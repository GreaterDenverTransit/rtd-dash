from typing import List, Tuple, Dict
from dataclasses import dataclass
from datetime import date, datetime, timedelta
import json

from config import (
    # RIDERSHIP_TARGET_DATE,
    CUTOFF_DATE,
    EARLIEST_DATE,
    FILL_DATE_RANGES,
    IGNORE_DATE_RANGES,
    IGNORE_ROUTE_ID,
    OUTPUT_FILE,
    PRE_COVID_DATE,
    ROUTE_IDS_RAIL,
    TIME_ZONE,
)

from gtfs.archive import load_feeds_and_service_levels_from_archive, GtfsFeed
from gtfs.time import date_from_string
from gtfs.util import bucket_by, get_date_ranges_of_same_value, date_range_contains, rtd_short_name
# from ridership.timeseries import (
#     # get_ridership_time_series_by_adhoc_label,
#     map_route_id_to_adhoc_label,
# )


@dataclass
class ServiceLevelsEntry:
    route_id: str
    service_levels: List[int]
    exception_dates: List[date]
    start_date: date
    end_date: date
    feed: GtfsFeed


def get_route_kind(route_id: str):
    if route_id in ROUTE_IDS_RAIL:
        return route_id
    return "bus"


def get_weekday_service_levels_history(
    feeds_and_service_levels: List[Tuple[GtfsFeed, Dict]]
):
    histories = {}
    for (feed, service_levels) in feeds_and_service_levels:
        for line_id, service_dates in service_levels.items():
            history = histories.setdefault(line_id, [])
            weekday_service = service_dates["Weekday"]
            if len(weekday_service) > 0:
                for service_levels in weekday_service:
                    service_start_date = date_from_string(service_levels["startDate"])
                    trip_count = sum(service_levels["serviceLevels"])
                    history.append(
                        {
                            "date": service_start_date.strftime("%Y-%m-%d"),
                            "trips": trip_count,
                        }
                    )
            else:
                history.append(
                    {"date": feed.start_date.strftime("%Y-%m-%d"), "trips": 0}
                )
    return histories


def get_service_level_entries_and_route_ids(
    feeds_and_service_levels: List[Tuple[GtfsFeed, Dict]]
):
    entries = []
    all_route_ids = set()
    for feed, service_levels in feeds_and_service_levels:
        for route_id, line_entry in service_levels.items():
            all_route_ids.add(route_id)
            service_level_history = line_entry["history"]
            exception_dates = list(map(date_from_string, line_entry["exceptionDates"]))
            for service_levels in service_level_history:
                entry = ServiceLevelsEntry(
                    route_id=route_id,
                    service_levels=service_levels["serviceLevels"],
                    start_date=date_from_string(service_levels["startDate"]),
                    end_date=date_from_string(service_levels["endDate"]),
                    exception_dates=exception_dates,
                    feed=feed,
                )
                entries.append(entry)
    return bucket_by(entries, lambda e: e.route_id), all_route_ids


def get_service_levels_entry_for_date(entries: List[ServiceLevelsEntry], date: date):
    matching_entries = [e for e in entries if e.start_date <= date <= e.end_date]
    if len(matching_entries) > 0:
        return max(matching_entries, key=lambda e: e.feed.start_date)
    return None


def get_service_level_history(
    entries: List[ServiceLevelsEntry],
    start_date: date,
    end_date: date,
):
    levels_by_date = {}
    date = start_date
    while date <= end_date:
        entry = get_service_levels_entry_for_date(entries, date)
        levels_by_date[date] = round(sum(entry.service_levels)) if entry else 0
        date += timedelta(days=1)
    values = []
    for date_range, value in get_date_ranges_of_same_value(levels_by_date):
        (min_date, max_date) = date_range
        range_length_days = 1 + (max_date - min_date).days
        is_weekend = range_length_days <= 2 and all(
            (d.weekday() in (5, 6) for d in (min_date, max_date))
        )
        is_fill_range = any(
            (
                date_range_contains(fill_range, date_range)
                for fill_range in FILL_DATE_RANGES
            )
        )
        is_ignore_range = any(
            (
                date_range_contains(ignore_range, date_range)
                for ignore_range in IGNORE_DATE_RANGES
            )
        )
        fill_hole = value == 0 and (range_length_days <= 5 or is_fill_range)
        value_to_append = (
            values[-1] if len(values) and (fill_hole or is_ignore_range or is_weekend) else value
        )
        values += range_length_days * [value_to_append]
    return values


def get_exemplar_service_levels_for_lookback_date(
    entries: List[ServiceLevelsEntry],
    start_lookback_date: date,
    matching_days_of_week: List[int],
):
    date = start_lookback_date
    while date >= EARLIEST_DATE:
        entry = get_service_levels_entry_for_date(entries, date)
        if (
            entry
            and not date in entry.exception_dates
            and date.weekday() in matching_days_of_week
        ):
            return entry.service_levels
        date -= timedelta(days=1)
    return None


def service_is_cancelled(
    entries: List[ServiceLevelsEntry],
    start_lookback_date: date,
    matching_days_of_week: List[int],
):
    most_recent_matching_date = start_lookback_date
    while most_recent_matching_date.weekday() not in matching_days_of_week:
        most_recent_matching_date -= timedelta(days=1)
    entry = get_service_levels_entry_for_date(entries, most_recent_matching_date)
    return entry is None


def get_service_levels_summary_dict(
    entries: List[ServiceLevelsEntry],
    start_lookback_date: date,
    matching_days_of_week: List[int],
):
    if service_is_cancelled(entries, start_lookback_date, matching_days_of_week):
        return {"cancelled": True, "tripsPerHour": None, "totalTrips": 0}
    trips_per_hour = get_exemplar_service_levels_for_lookback_date(
        entries,
        start_lookback_date,
        matching_days_of_week,
    )
    total_trips = round(sum(trips_per_hour)) if trips_per_hour else 0
    return {
        "cancelled": False,
        "tripsPerHour": trips_per_hour,
        "totalTrips": total_trips,
    }


def get_service_regime_dict(
    entries: List[ServiceLevelsEntry], start_lookback_date: date
):
    return {
        "weekday": get_service_levels_summary_dict(
            entries, start_lookback_date, list(range(0, 5))
        ),
        "saturday": get_service_levels_summary_dict(entries, start_lookback_date, [5]),
        "sunday": get_service_levels_summary_dict(entries, start_lookback_date, [6]),
    }


def count_total_trips(regime_dict):
    return (
        regime_dict["weekday"]["totalTrips"]
        + regime_dict["saturday"]["totalTrips"]
        + regime_dict["sunday"]["totalTrips"]
    )


def summarize_service(numerator_regime_dict, denominator_regime_dict):
    numerator_total_trips = count_total_trips(numerator_regime_dict)
    denominator_total_trips = count_total_trips(denominator_regime_dict)
    try:
        total_trips_fraction = numerator_total_trips / denominator_total_trips
    except ZeroDivisionError:
        total_trips_fraction = 0
    return numerator_total_trips, total_trips_fraction


# def get_merged_ridership_time_series(
#     route_ids: List[str],
#     ridership_time_series_by_label: Dict[str, List],
# ):
#     labels = set((map_route_id_to_adhoc_label(route_id) for route_id in route_ids))
#     matching_time_series = [
#         ridership_time_series_by_label.get(label)
#         for label in labels
#         if label in ridership_time_series_by_label
#     ]
#     if len(matching_time_series) == 0:
#         return None
#     merged_time_series = [0] * len(matching_time_series[0])
#     for ts in matching_time_series:
#         for idx, value in enumerate(ts):
#             merged_time_series[idx] += value
#     return merged_time_series


# def get_ridership_percentage(total_ridership_time_series):
#     ridership_percentage = round(
#         total_ridership_time_series[-1] / total_ridership_time_series[0], 2
#     )
#     return ridership_percentage


def get_service_percentage(total_service_time_series):
    service_percentage = round(
        total_service_time_series[-1] / total_service_time_series[0], 2
    )
    return service_percentage


# since the data holds constant over a week, this function removes the duplicates of 7 and condenses into 1 datapoint
# keeps overall trends the same
def condensed_time_series(total_time_series):
    condensed_series = [total_time_series[0]]
    for i in range(len(total_time_series) - 1):
        if total_time_series[i] is not total_time_series[i + 1]:
            condensed_series.append(total_time_series[i + 1])
    return condensed_series


def generate_total_data(
    # ridership_time_series_list: List[List[float]],
    service_time_series_list: List[List[float]],
    combined_total_trips: int,
    total_cancelled_routes: int,
    total_reduced_serv_routes: int,
    total_increased_serv_routes: int,
    start_date: date,
):
    # total_ridership_time_series = [
    #     sum(entries_for_day) for entries_for_day in zip(*ridership_time_series_list)
    # ]
    # condensed_ridership_series = condensed_time_series(total_ridership_time_series)
    total_service_time_series = [
        sum(entries_for_day) for entries_for_day in zip(*service_time_series_list)
    ]
    condensed_service_series = condensed_time_series(total_service_time_series)
    # total_ridership_percentage = get_ridership_percentage(total_ridership_time_series)
    total_service_percentage = get_service_percentage(total_service_time_series)
    # total_passengers = total_ridership_time_series[-1]
    end_date = start_date + timedelta(days=(len(total_service_time_series) - 1))
    return {
        "totalRidershipHistory": [], #condensed_ridership_series,
        "totalServiceHistory": condensed_service_series,
        "totalRidershipPercentage": 1, # total_ridership_percentage,
        "totalServicePercentage": total_service_percentage,
        "totalPassengers": 420, #total_passengers
        "totalTrips": combined_total_trips,
        "totalRoutesCancelled": total_cancelled_routes,
        "totalReducedService": total_reduced_serv_routes,
        "totalIncreasedService": total_increased_serv_routes,
        "startDate": start_date.strftime("%Y-%m-%d"),
        "endDate": end_date.strftime("%Y-%m-%d"),
    }

def generate_data_file():
    start_date = PRE_COVID_DATE
    today = CUTOFF_DATE or datetime.now(TIME_ZONE).date()
    # ridership_source = get_latest_ridership_source()
    data_by_route_id = {}
    feeds_and_service_levels = load_feeds_and_service_levels_from_archive()
    entries, route_ids = get_service_level_entries_and_route_ids(feeds_and_service_levels)
    # ridership_time_series_by_label = get_ridership_time_series_by_adhoc_label(
    #     ridership_source,
    #     start_date,
    #     today,
    # )
    # ridership_time_series_list = []
    service_time_series_list = []
    combined_total_trips = 0
    total_reduced_serv_routes = 0
    total_increased_serv_routes = 0
    total_cancelled_routes = 0
    for route_id in route_ids:
        if IGNORE_ROUTE_ID(route_id):
            continue
        entries_for_route_id = entries[route_id]
        # ridership_time_series = get_merged_ridership_time_series(
        #     exemplar_entry.route_ids,
        #     ridership_time_series_by_label,
        # )
        service_time_series = get_service_level_history(
            entries_for_route_id,
            start_date,
            today,
        )
        baseline_service_regime = get_service_regime_dict(
            entries_for_route_id,
            start_date,
        )
        current_service_regime = get_service_regime_dict(entries_for_route_id, today)
        day_kinds = ("weekday", "saturday", "sunday")

        try:
            service_time_fraction = sum(
                (current_service_regime[day]["totalTrips"] for day in day_kinds)
            ) / sum((baseline_service_regime[day]["totalTrips"] for day in day_kinds))
        except ZeroDivisionError:
            service_time_fraction = 0
        if service_time_fraction > 1:
            total_increased_serv_routes += 1
        elif service_time_fraction < 1 and service_time_fraction != 0:
            total_reduced_serv_routes += 1

        if (
            current_service_regime["weekday"]["cancelled"]
            or current_service_regime["saturday"]["cancelled"]
            or current_service_regime["sunday"]["cancelled"]
        ):
            total_cancelled_routes += 1

        total_trips, service_fraction = summarize_service(
            current_service_regime,
            baseline_service_regime,
        )

        # if ridership_time_series is not None:
        #     ridership_time_series_list.append(ridership_time_series)
        if service_time_series is not None:
            service_time_series_list.append(service_time_series)

        combined_total_trips += total_trips

        short_name = route_id
        if route_id in ROUTE_IDS_RAIL and len(route_id) == 4:
            short_name = route_id[-1]

        data_by_route_id[route_id] = {
            "id": route_id,
            "shortName": rtd_short_name(route_id),
            "longName": route_id,
            "routeId": route_id,
            "startDate": start_date.strftime("%Y-%m-%d"),
            "lineKind": get_route_kind(route_id),
            # "ridershipHistory": ridership_time_series,
            "serviceHistory": service_time_series,
            "serviceFraction": service_fraction,
            "totalTrips": total_trips,
            "serviceRegimes": {
                "baseline": baseline_service_regime,
                "current": current_service_regime,
            },
        }

    total_data = generate_total_data(
        # ridership_time_series_list,
        service_time_series_list,
        combined_total_trips,
        total_cancelled_routes,
        total_reduced_serv_routes,
        total_increased_serv_routes,
        start_date,
    )

    with open(OUTPUT_FILE, "w") as file:
        file.write(
            json.dumps(
                {
                    "summaryData": total_data,
                    "lineData": data_by_route_id,
                }
            )
        )


if __name__ == "__main__":
    generate_data_file()
