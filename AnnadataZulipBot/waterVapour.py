import requests

def getWaterVapourInfoGeo(lat, lng):
    url = "http://localhost:5000/api/ambeedata/waterVapour?lat={}&lng={}".format(lat, lng)
    results = requests.get(url)
    data = results.json()
    # Water vapor levels in meters (m)
    water_vapor = data["data"][0]["water_vapor"]
    print(data)
    info = {
        "water_vapor": water_vapor
    }
    return info
