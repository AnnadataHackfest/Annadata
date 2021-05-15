import requests

def getPollenInfoGeo(lat, lng):
    url = "http://localhost:5000/api/ambeedata/pollen?lat={}&lng={}".format(lat, lng)
    results = requests.get(url)
    data = results.json()
    grass_pollen_count = data["data"][0]["Count"]["grass_pollen"]
    tree_pollen_count = data["data"][0]["Count"]["tree_pollen"]
    weed_pollen_count = data["data"][0]["Count"]["weed_pollen"]
    grass_pollen_risk = data["data"][0]["Risk"]["grass_pollen"]
    tree_pollen_risk = data["data"][0]["Risk"]["tree_pollen"]
    weed_pollen_risk = data["data"][0]["Risk"]["weed_pollen"]

    info = {
        "grass_pollen_count": grass_pollen_count,
        "tree_pollen_count": tree_pollen_count,
        "weed_pollen_count": weed_pollen_count,
        "grass_pollen_risk": grass_pollen_risk,
        "tree_pollen_risk": tree_pollen_risk,
        "weed_pollen_risk": weed_pollen_risk
    }

    return info
