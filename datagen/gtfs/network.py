from gtfs.loader import GtfsLoader
from gtfs.models import (
    StopTime,
    Station,
    Stop,
    LocationType,
    Network,
    Trip,
    Service,
    ServiceExceptionDate,
    Route,
)
from gtfs.time import time_from_string, date_from_string, DAYS_OF_WEEK
from gtfs.util import index_by, bucket_by


def get_shapes_by_id(shapes):
    res = {}
    for shape in shapes:
        shape_id = shape["shape_id"]
        if not res.get(shape_id):
            res[shape_id] = []
        lat = float(shape["shape_pt_lat"])
        lon = float(shape["shape_pt_lon"])
        seq = int(shape["shape_pt_sequence"])
        res[shape_id].append((lat, lon, seq))
    for shape_id in res:
        res[shape_id] = [
            (lat, lon) for (lat, lon, _) in sorted(res[shape_id], key=lambda entry: entry[2])
        ]
    return res


def get_service_exception_dates_for_service_id(service_id, calendar_date_dicts):
    dates = []
    for date_dict in calendar_date_dicts:
        if date_dict["service_id"] == service_id:
            exception_date = date_from_string(date_dict["date"])
            exception_type = date_dict["exception_type"]
            service_exception_date = ServiceExceptionDate(
                date=exception_date,
                service_id=service_id,
                exception_type=exception_type,
            )
            dates.append(service_exception_date)
    return dates


def link_services(calendar_dicts, calendar_date_dicts):
    services = []
    for calendar_dict in calendar_dicts:
        service_id = calendar_dict["service_id"]
        services.append(
            Service(
                id=service_id,
                days=[day for day in DAYS_OF_WEEK if calendar_dict[day] == "1"],
                description="PRESTON_DESCRIPTION",
                # schedule_name=attribute_dict["service_schedule_name"],
                schedule_type="PRESTON_SCHEDULE_TYPE",
                schedule_typicality=0,
                start_date=date_from_string(calendar_dict["start_date"]),
                end_date=date_from_string(calendar_dict["end_date"]),
                exception_dates=get_service_exception_dates_for_service_id(
                    service_id,
                    calendar_date_dicts,
                ),
            )
        )
    return index_by(services, lambda s: s.id)


def get_stations_from_stops(stop_dicts):
    for stop_dict in stop_dicts:
        if stop_dict["location_type"] == LocationType.STATION:
            yield stop_dict


def get_station_stop_args_from_dict(stop_dict):
    return {
        "id": stop_dict["stop_id"],
        "name": stop_dict["stop_name"],
        "location": (float(stop_dict["stop_lat"]), float(stop_dict["stop_lon"])),
        "wheelchair_boarding": stop_dict["wheelchair_boarding"],
        "zone_id": stop_dict["zone_id"],
        "location_type": stop_dict["location_type"],
    }


def link_station(station_dict):
    return Station(**get_station_stop_args_from_dict(station_dict))


def link_trips(trip_dicts, services_by_id, shapes_by_id):
    res = {}
    for trip_dict in trip_dicts:
        trip_id = trip_dict["trip_id"]
        matching_service = services_by_id.get(trip_dict["service_id"])
        # Throw out special services with no regularly scheduled service days
        if matching_service and len(matching_service.days) > 0:
            trip = Trip(
                id=trip_dict["trip_id"],
                service=matching_service,
                route_id=trip_dict["route_id"],
                direction_id=int(trip_dict["direction_id"]),
                shape_id=trip_dict["shape_id"],
                shape=shapes_by_id[trip_dict["shape_id"]],
            )
            res[trip_id] = trip
    return res


def link_stop_times(stop, stop_time_dicts_for_stop_id, trips_by_id):
    stop_times = []
    added = 0
    for stop_time_dict in stop_time_dicts_for_stop_id:
        assert stop_time_dict["stop_id"] == stop.id
        trip = trips_by_id.get(stop_time_dict["trip_id"])
        if trip:
            stop_time = StopTime(
                stop=stop,
                trip=trip,
                time=time_from_string(stop_time_dict["departure_time"]),
            )
            added += 1
            stop_times.append(stop_time)
            trip.add_stop_time(stop_time)
    stop.set_stop_times(sorted(stop_times))


def link_stops(stations_by_id, stop_dicts):
    stops = []
    for stop_dict in stop_dicts:
        parent_station_id = stop_dict["parent_station"]
        parent_station = stations_by_id.get(parent_station_id)
        if stop_dict["location_type"] == LocationType.STOP:
            stop = Stop(parent_station=parent_station, **get_station_stop_args_from_dict(stop_dict))
            stops.append(stop)
            if parent_station:
                parent_station.add_child_stop(stop)
    return stops


def link_routes(route_dicts):
    routes = []
    for route_dict in route_dicts:
        route_id = route_dict["route_id"]
        route = Route(
            id=route_id,
            long_name=route_dict["route_long_name"],
        )
        routes.append(route)
    return index_by(routes, lambda r: r.id)


def ensure_trips_are_sorted(trips_by_id):
    for trip in trips_by_id.values():
        trip.stop_times = list(sorted(trip.stop_times, key=lambda st: st.time))


def build_network_from_gtfs(loader: GtfsLoader):
    # Do the loading...
    calendar_dicts = loader.load_calendar()
    calendar_date_dicts = loader.load_calendar_dates()
    stop_dicts = loader.load_stops()
    stop_time_dicts = loader.load_stop_times()
    trip_dicts = loader.load_trips()
    route_dicts = loader.load_routes()
    shapes = loader.load_shapes()
    print("Loaded entities")
    # Now do the linking...
    station_dicts = get_stations_from_stops(stop_dicts)
    print("Linking services...")
    services_by_id = link_services(calendar_dicts, calendar_date_dicts)
    print("Linking routes...")
    routes_by_id = link_routes(route_dicts)
    print("Linking trips...")
    shapes_by_id = get_shapes_by_id(shapes)
    trips_by_id = link_trips(trip_dicts, services_by_id, shapes_by_id)
    stations = [link_station(d) for d in station_dicts]
    stations_by_id = index_by(stations, lambda st: st.id)
    print("Linking stops...")
    stops = link_stops(stations_by_id, stop_dicts)
    stop_time_dicts_by_stop_id = bucket_by(stop_time_dicts, "stop_id")
    print("Linking stop times...")
    for stop in stops:
        stop_times_for_id = stop_time_dicts_by_stop_id.get(stop.id)
        if stop_times_for_id and len(stop_times_for_id) > 0:
            link_stop_times(stop, stop_times_for_id, trips_by_id)
    print("Sorting trips...")
    ensure_trips_are_sorted(trips_by_id)
    return Network(
        stations_by_id=stations_by_id,
        trips_by_id=trips_by_id,
        shapes_by_id=shapes_by_id,
        routes_by_id=routes_by_id,
        services_by_id=services_by_id,
    )
