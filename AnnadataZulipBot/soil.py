import requests

def getSoilInfoGeo(lat, lng):
    url = "http://localhost:5000/api/ambeedata/soil?lat={}&lng={}".format(lat, lng)
    results = requests.get(url)
    data = results.json()
    scantime = data["data"][0]["scantime"]
    soil_temperature = data["data"][0]["soil_temperature"]
    soil_moisture = data["data"][0]["soil_moisture"]

    soilInfo = {
        "scantime": scantime,
        "soil_temperature": soil_temperature,
        "soil_moisture": soil_moisture,
    }

    return soilInfo
