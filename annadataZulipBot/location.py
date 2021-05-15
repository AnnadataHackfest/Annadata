import requests

def getLocationFromName(place):
    results = requests.get('https://maps.googleapis.com/maps/api/geocode/json?address='+place+',&region=in&key=AIzaSyBKmBYERZyz9Cj7-F9bT7WMWVuSHiaX9kU')
    data = results.json()
    # print(data["results"][0]["geometry"]["location"]["lat"])
    # print(data["results"][0]["geometry"]["location"]["lng"])
    info = {
        "lat": data["results"][0]["geometry"]["location"]["lat"],
        "lng": data["results"][0]["geometry"]["location"]["lng"]
    }
    return info
