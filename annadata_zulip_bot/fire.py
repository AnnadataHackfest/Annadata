import requests

def getFireInfoGeo(lat, lng):
    url = "http://localhost:5000/api/ambeedata/fire?lat={}&lng={}".format(lat, lng)
    results = requests.get(url)
    data = results.json()
    confidence = data["data"][0]["confidence"]
    # Fire radiative power in MW
    frp = data["data"][0]["frp"]
    detection_time = data["data"][0]["detection_time"]
    distance = data["data"][0]["distance"]

    info = {
        "confidence": confidence,
        "frp": frp,
        "detection_time": detection_time,
        "distance": distance
    }

    return info
