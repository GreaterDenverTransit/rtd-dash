from dataclasses import dataclass
from datetime import datetime, date
from functools import cached_property
from os import listdir, path, mkdir
from zipfile import BadZipFile, ZipFile
import pickle
import json

from config import GTFS_DATA_PATH, EARLIEST_DATE, GTFS_BUNDLE_DIR, SKIP_BUNDLES
from gtfs.loader import GtfsLoader
from gtfs.network import build_network_from_gtfs
from gtfs.trips import get_trip_summaries_for_network
from gtfs.service_levels import compute_service_levels_json
from gtfs.time import date_from_string, date_to_string


@dataclass
class GtfsFeed:
    start_date: date
    end_date: date
    filepath: str
    version: str

    @cached_property
    def subdirectory(self):
        return path.join(GTFS_DATA_PATH, date_to_string(self.start_date))

    def child_by_name(self, filename):
        return path.join(self.subdirectory, filename)

    @cached_property
    def gtfs_zip_path(self):
        return self.child_by_name("data.zip")

    @cached_property
    def gtfs_subdir_path(self):
        return self.child_by_name("feed")

    @cached_property
    def trip_summaries_pickle_path(self):
        return self.child_by_name("trip_summaries.pickle")

    @cached_property
    def service_levels_json_path(self):
        return self.child_by_name("service_levels.json")

    @cached_property
    def loader(self):
        return GtfsLoader(root=self.gtfs_subdir_path)

def extract_gtfs_zip(feed: GtfsFeed):
    if path.exists(feed.gtfs_subdir_path):
        return
    # download_gtfs_zip(feed)
    print(f"Extracting {feed.filepath} to {feed.gtfs_subdir_path}")
    try:
        zf = ZipFile(feed.filepath)
        zf.extractall(feed.gtfs_subdir_path)
    except BadZipFile:
        print(feed.gtfs_zip_path)

RUNS = 0

def get_trip_summaries(feed: GtfsFeed):
    global RUNS
    extract_gtfs_zip(feed)
    pickle_path = feed.trip_summaries_pickle_path
    if path.exists(pickle_path):
        with open(pickle_path, "rb") as file:
            try:
                return pickle.load(file)
            except Exception:
                print("Error loading pickled trip summaries")
    print("Creating network from scratch...")
    RUNS += 1
    if RUNS > 8:
        exit(137)
    network = build_network_from_gtfs(feed.loader)
    trip_summaries = get_trip_summaries_for_network(network)
    with open(pickle_path, "wb") as file:
        pickle.dump(trip_summaries, file)
    return trip_summaries


def get_service_levels_json(feed: GtfsFeed):
    target_path = feed.service_levels_json_path
    if not path.exists(target_path):
        print(f"Generating service_levels.json for {feed.filepath}")
        trip_summaries = get_trip_summaries(feed)
        service_levels_json = compute_service_levels_json(trip_summaries)
        with open(target_path, "w") as file:
            file.write(json.dumps(service_levels_json))
    with open(target_path, "r") as file:
        return json.loads(file.read())


def load_feeds_from_archive(load_start_date: date):
    feeds = []
    bundles = list(filter(lambda f: ".zip" in f, sorted(listdir(GTFS_BUNDLE_DIR))))
    for i in range(0, len(bundles)):
        bundle = bundles[i]

        if bundle in SKIP_BUNDLES:
            continue

        next = None
        if i+1 < len(bundles):
            next = bundles[i+1]

        start_date = date_from_string(bundle[0:8])
        end_date = date_from_string(next[0:8]) if next else datetime.now().date().strftime("%Y%m%d")
        if start_date < load_start_date:
            continue
        gtfs_feed = GtfsFeed(
            start_date=start_date,
            end_date=end_date,
            version=bundle[0:8],
            filepath=path.join(GTFS_BUNDLE_DIR, bundle)
        )
        feeds.append(gtfs_feed)
    return feeds


def load_feeds_and_service_levels_from_archive(load_start_date: date = EARLIEST_DATE):
    for feed in load_feeds_from_archive(load_start_date):
        yield feed, get_service_levels_json(feed)


if __name__ == "__main__":
    if not path.exists(GTFS_DATA_PATH):
        mkdir(GTFS_DATA_PATH)
    feeds = load_feeds_from_archive(EARLIEST_DATE)
    for feed in feeds:
        get_service_levels_json(feed)