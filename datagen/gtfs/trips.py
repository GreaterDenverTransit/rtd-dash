from dataclasses import dataclass
import datetime

from gtfs.models import Network, Service


@dataclass
class TripSummary:
    id: str
    route_id: str
    # route_pattern_id: str
    service: Service
    # line: Line
    departure_time: datetime.timedelta


def get_trip_summaries_for_network(network: Network):
    summaries = []
    for trip in network.trips_by_id.values():
        summary = TripSummary(
            id=trip.id,
            route_id=trip.route_id,
            service=trip.service,
            departure_time=trip.stop_times[0].time,
        )
        summaries.append(summary)
    return summaries
