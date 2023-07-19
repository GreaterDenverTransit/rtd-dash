import datetime
import json
import pathlib
import requests
import time

SAVE_PATH = pathlib.Path("rtd/bundles")
HTTP_REQUEST_HEADERS = {
    "User-Agent": "GreaterDenverTransit/1.0 greaterdenvertransit@gmail.com"
}

with open("rtd/rtd_gtfs.json") as file:
    gtfses = json.load(file)

by_date = {}
  
for gtfs in gtfses:
    id = gtfs["id"]
    url = gtfs["url"]
    date_segment = id.split("/")[2]
    if "-" in date_segment:
        date_segment = date_segment.split("-")[0]
    if date_segment in by_date:
        continue
    if len(date_segment) > 8:
        date_segment = datetime.datetime.fromtimestamp(int(date_segment)).strftime("%Y%m%d")
    
    by_date[date_segment] = gtfs["url"]

print("Ready to download", len(by_date), "files")

SAVE_PATH.mkdir(parents=True, exist_ok=True)

for date, url in by_date.items():
    time.sleep(0.3)
    print("Downloading", url)
    path = pathlib.Path(SAVE_PATH, f"{date}.zip")
    response = requests.get(url, headers=HTTP_REQUEST_HEADERS)
    with open(path, "wb") as file:
        file.write(response.content)

    print("Saved to", path)
    print()
