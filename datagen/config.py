from datetime import date
from os import path
from pytz import timezone

# Lower bound for time series and GTFS feeds
EARLIEST_DATE = date(2019, 4, 28)

# Date to use as a baseline
PRE_COVID_DATE = date(2019, 10, 15)

TIME_ZONE = timezone("US/Eastern")

# Should point to data.json in the root of the repo
OUTPUT_FILE = path.normpath(path.join(path.dirname(__file__), "..", "data.json"))


ROUTE_ID_MAP = {
    "117N_merged_113656131": "117N"
}
IGNORE_ROUTE_ID = lambda id: "merged" in id or id in {
    "120E",
    "120L",
    "17",
    "206S",
    "228A",
    "228F",
    "31L",
    "49",
    "50",
    "520",
    "55L",
    "61AV",
    "7",
    "72L",
    "AB",
    "ATA",
    "LD3",
    "NB1",
    "NB2",
    "NB3",
    "STMP",
}
ROUTE_IDS_RAIL = ["A", "113B", "C", "101D", "101E", "F", "113G", "101H", "109L", "117N", "107R", "120W"]

GTFS_BUNDLE_DIR = path.join(path.dirname(__file__), "rtd", "bundles")
GTFS_DATA_PATH = path.join(path.dirname(__file__), "gtfs", ".data")
SKIP_BUNDLES = [
    "20200401.zip",
    "20200405.zip",
    "20200408.zip",
    "20200411.zip",
    "20200413.zip"
    "20200415.zip"
    "20200729.zip"
]

# Change to e.g. date(2021, 8, 8) to load ridership data already in datagen/ridership/.data
# rather than attempting to fetch later data from the MassDOT Box endpoint.
# RIDERSHIP_TARGET_DATE = None

CUTOFF_DATE = date(2023, 6, 15)

# Date ranges with service gaps that we paper over because of major holidays rather than doing
# more complicated special-casing with GTFS services
FILL_DATE_RANGES = [
    # (date(2021, 11, 19), date(2021, 11, 26)),  # Thanksgiving 2021
    # (date(2021, 12, 18), date(2021, 12, 26)),  # Christmas 2021
    # (date(2022, 12, 18), date(2023, 1, 3)),    # Christmas 2022
]

# Date ranges with service anomalies that we'll smooth over with the previous date's values
IGNORE_DATE_RANGES = [
]
