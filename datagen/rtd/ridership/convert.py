import json
from datetime import datetime
from os import path

RIDERSHIP_DIR = "json"
RIDERSHIP_JSONS = [
    [2019, "2019.json"],
    [2020, "2020.json"],
    [2021, "2021.json"],
    [2022, "2022.json"],
    [2023, "2023.json"]
]
OUTPUT_PATH = ".data/ridership.json"

output = {}

for [year, filename] in RIDERSHIP_JSONS:
    with open(path.join(RIDERSHIP_DIR, filename), "rb") as file:
      year_data = json.load(file)
      for line in year_data:
         if line not in output:
            output[line] = []
         for month in year_data[line]:
            month_num = datetime.strptime(month, "%B").strftime("%m")
            output[line].append({
               "date": f"{year}-{month_num}-15",
               "riders": year_data[line][month]
            })

# print(json.dumps(output, indent=4))

with open(OUTPUT_PATH, "w", encoding="utf-8") as file:
   json.dump(output, file, ensure_ascii=False, indent=4)
