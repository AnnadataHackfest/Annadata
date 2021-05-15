import requests

def getWeatherInfoGeo(lat, lng):
    url = "http://localhost:5000/api/ambeedata/weather?lat={}&lng={}".format(lat, lng)
    results = requests.get(url)
    data = results.json()
    time = data["data"]["time"]
    temperature = data["data"]["temperature"]
    dewPoint = data["data"]["dewPoint"]
    humidity = data["data"]["humidity"]
    pressure = data["data"]["pressure"]
    windSpeed = data["data"]["windSpeed"]
    windGust = data["data"]["windGust"]
    windBearing = data["data"]["windBearing"]
    cloudCover = data["data"]["cloudCover"]
    visibility = data["data"]["visibility"]
    ozone = data["data"]["ozone"]

    info = {
        "temperature": temperature,
        "dewPoint": dewPoint,
        "humidity": humidity,
        "pressure": pressure,
        "windSpeed": windSpeed,
        "windGust": windGust,
        "windBearing": windBearing,
        "cloudCover": cloudCover,
        "visibility": visibility,
        "ozone": ozone
    }

    return info
