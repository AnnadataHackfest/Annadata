import requests

def getAirInfoGeo(lat, lng):
    url = "http://localhost:5000/api/ambeedata/air/geospatial?lat={}&lng={}".format(lat, lng)
    results = requests.get(url)
    data = results.json()
    NO2 = data["stations"][0]["NO2"]
    PM10 = data["stations"][0]["PM10"]
    PM25 = data["stations"][0]["PM25"]
    CO = data["stations"][0]["CO"]
    SO2 = data["stations"][0]["SO2"]
    OZONE = data["stations"][0]["OZONE"]
    AQI = data["stations"][0]["AQI"]

    pollutant = data["stations"][0]["aqiInfo"]["pollutant"]
    concentration = data["stations"][0]["aqiInfo"]["concentration"]
    category = data["stations"][0]["aqiInfo"]["category"]

    info = {
        "NO2": NO2,
        "PM10": PM10,
        "PM25": PM25,
        "CO": CO,
        "SO2": SO2,
        "OZONE": OZONE,
        "AQI": AQI,
        "pollutant": pollutant,
        "concentration": concentration,
        "category": category
    }

    return info
