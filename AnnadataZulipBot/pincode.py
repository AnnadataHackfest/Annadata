import requests

def getLocationFromPincode(pincode):
    url = "http://www.postalpincode.in/api/pincode/{}".format(pincode)
    results = requests.get(url)
    data = results.json()
    return data["PostOffice"][0]["District"]
