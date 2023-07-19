import re
import requests

HTTP_REQUEST_HEADERS = {
    "User-Agent": "GreaterDenverTransit/1.0 preston@prestonmueller.com"
}

for url in [
    "https://www.greaterdenvertransit.com/wp-content/uploads/202303_MFS.pdf",  
    "https://www.greaterdenvertransit.com/wp-content/uploads/202212_MFS.pdf",  
    "https://www.greaterdenvertransit.com/wp-content/uploads/202112_MFS.pdf",  
    "https://www.greaterdenvertransit.com/wp-content/uploads/202011_MFS.pdf",  
    "https://www.greaterdenvertransit.com/wp-content/uploads/201912_MFS.pdf",  
]:
    # download
    year = re.search("(20[0-9]{4})", url)[0]
    path = f"pdf/{year}.pdf"
    print("Download: ", year, path, url)
    response = requests.get(url, headers=HTTP_REQUEST_HEADERS)
    with open(path, "wb") as file:
        file.write(response.content)

"""
ChatGPT prompt to convert to JSON:
Convert this data to JSON. Skip "Total Light Rail" or "Total Commuter Rail", if present. Use JSON null for missing values. Skip the last three columns, i.e. only use the first 12 columns, one for each month. Spell months out completely. Keys for lines should be one character.
"""