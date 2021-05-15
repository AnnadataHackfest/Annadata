# See readme.md for instructions on running this code.

import copy
from math import log10, floor

from zulip_bots.bots.annadata import utils

from typing import Any, Dict, List
from zulip_bots.lib import BotHandler
from soil import *
from fire import *
from pollen import *
from location import *
from pincode import *
from weather import *
from waterVapour import *
from air import *


class AnnadataHandler:
    '''
    This plugin allows users to receive various real time information about farming.
    One can receive information about soil, fire alert, pollen and weed data, weather forecast, air quality and water vapour content.
    User can receive this information by providing either their geolocation coordinates, pin code or city name
    The message '@annadata help' posts a short description of how to use
    the plugin, along with a list of all supported commands.
    '''

    def usage(self) -> str:
        return '''
                This plugin allows users to receive various real time information about farming.
                One can receive information about soil, fire alert, pollen and weed data, weather forecast, air quality and water vapour content.
                User can receive this information by providing either their geolocation coordinates, pin code or city name
                The message '@annadata help' posts a short description of how to use
                the plugin, along with a list of all supported commands.
               '''

    def handle_message(self, message: Dict[str, str], bot_handler: BotHandler) -> None:
        bot_response = get_bot_converter_response(message, bot_handler)
        bot_handler.send_reply(message, bot_response)

def get_bot_converter_response(message: Dict[str, str], bot_handler: BotHandler) -> str:
    content = message['content']

    words = content.lower().split()
    convert_indexes = [i for i, word in enumerate(words) if word == "@annadata"]
    convert_indexes = [-1] + convert_indexes
    results = []

    for convert_index in convert_indexes:
        if (convert_index + 1) < len(words) and words[convert_index + 1] == 'help':
            results.append(utils.HELP_MESSAGE)
            continue
        # soil geolocation 28 77
        if (convert_index + 4) < len(words) and words[convert_index + 1] == 'soil' and words[convert_index + 2] == 'geolocation':
            lat = words[convert_index + 3]
            lng = words[convert_index + 4]
            soilInfo = getSoilInfoGeo(lat, lng)
            results.append('Soil Information: \n scantime: {} \n  soil_temperature: {} \n soil_moisture: {}'.format(soilInfo["scantime"],
                                                  soilInfo["soil_temperature"],
                                                  soilInfo["soil_moisture"]))
            continue
        # soil name bengaluru
        if (convert_index + 3) < len(words) and words[convert_index + 1] == 'soil' and words[convert_index + 2] == 'name':
            city_name = words[convert_index + 3]
            coordinates = getLocationFromName(city_name)
            soilInfo = getSoilInfoGeo(coordinates["lat"], coordinates["lng"])
            results.append('Soil Information: \n scantime: {} \n  soil_temperature: {} \n soil_moisture: {}'.format(soilInfo["scantime"],
                                                  soilInfo["soil_temperature"],
                                                  soilInfo["soil_moisture"]))
            continue
        # soil pincode 121001
        if (convert_index + 3) < len(words) and words[convert_index + 1] == 'soil' and words[convert_index + 2] == 'pincode':
            pincode = words[convert_index + 3]
            city_name = getLocationFromPincode(pincode)
            coordinates = getLocationFromName(city_name)
            soilInfo = getSoilInfoGeo(coordinates["lat"], coordinates["lng"])
            results.append('Soil Information: \n scantime: {} \n  soil_temperature: {} \n soil_moisture: {}'.format(soilInfo["scantime"],
                                                  soilInfo["soil_temperature"],
                                                  soilInfo["soil_moisture"]))
            continue
        # fire geolocation 28 77
        if (convert_index + 4) < len(words) and words[convert_index + 1] == 'fire' and words[convert_index + 2] == 'geolocation':
            lat = words[convert_index + 3]
            lng = words[convert_index + 4]
            info = getFireInfoGeo(lat, lng)
            results.append('Fire Information: \n confidence: {} \n  Fire radiative power in MW: {} \n Event detection time: {} \n Distance (in kms) from fire location: {}'.format(info["confidence"],
                                                  info["frp"],
                                                  info["detection_time"],
                                                  info["distance"]))
            continue
        # fire name bengaluru
        if (convert_index + 3) < len(words) and words[convert_index + 1] == 'fire' and words[convert_index + 2] == 'name':
            city_name = words[convert_index + 3]
            coordinates = getLocationFromName(city_name)
            info = getFireInfoGeo(coordinates["lat"], coordinates["lng"])
            results.append('Fire Information: \n confidence: {} \n  Fire radiative power in MW: {} \n Event detection time: {} \n Distance (in kms) from fire location: {}'.format(info["confidence"],
                                                  info["frp"],
                                                  info["detection_time"],
                                                  info["distance"]))
            continue
        # fire pincode 121001
        if (convert_index + 3) < len(words) and words[convert_index + 1] == 'fire' and words[convert_index + 2] == 'pincode':
            pincode = words[convert_index + 3]
            city_name = getLocationFromPincode(pincode)
            coordinates = getLocationFromName(city_name)
            info = getFireInfoGeo(coordinates["lat"], coordinates["lng"])
            results.append('Fire Information: \n confidence: {} \n  Fire radiative power in MW: {} \n Event detection time: {} \n Distance (in kms) from fire location: {}'.format(info["confidence"],
                                                  info["frp"],
                                                  info["detection_time"],
                                                  info["distance"]))
            continue
        # pollen geolocation 28 77
        if (convert_index + 4) < len(words) and words[convert_index + 1] == 'pollen' and words[convert_index + 2] == 'geolocation':
            lat = words[convert_index + 3]
            lng = words[convert_index + 4]
            info = getPollenInfoGeo(lat, lng)
            results.append('Pollen Information: \n Grass Pollen Count: {} particles/m3 \n  Grass Pollen Risk: {} \n Tree Pollen Count: {} particles/m3 \n Tree Pollen Risk: {} \n Weed Pollen Count: {} particles/m3 \n  Weed Pollen Risk: {}'.format(info["grass_pollen_count"],
                                                  info["grass_pollen_risk"],
                                                  info["tree_pollen_count"],
                                                  info["tree_pollen_risk"],
                                                  info["weed_pollen_count"],
                                                  info["weed_pollen_risk"]))
            continue
        # pollen name bengaluru
        if (convert_index + 3) < len(words) and words[convert_index + 1] == 'pollen' and words[convert_index + 2] == 'name':
            city_name = words[convert_index + 3]
            coordinates = getLocationFromName(city_name)
            info = getPollenInfoGeo(coordinates["lat"], coordinates["lng"])
            results.append('Pollen Information: \n Grass Pollen Count: {} particles/m3 \n  Grass Pollen Risk: {} \n Tree Pollen Count: {} particles/m3 \n Tree Pollen Risk: {} \n Weed Pollen Count: {} particles/m3 \n  Weed Pollen Risk: {}'.format(info["grass_pollen_count"],
                                                  info["grass_pollen_risk"],
                                                  info["tree_pollen_count"],
                                                  info["tree_pollen_risk"],
                                                  info["weed_pollen_count"],
                                                  info["weed_pollen_risk"]))
            continue
        # pollen pincode 121001
        if (convert_index + 3) < len(words) and words[convert_index + 1] == 'pollen' and words[convert_index + 2] == 'pincode':
            pincode = words[convert_index + 3]
            city_name = getLocationFromPincode(pincode)
            coordinates = getLocationFromName(city_name)
            info = getPollenInfoGeo(coordinates["lat"], coordinates["lng"])
            results.append('Pollen Information: \n Grass Pollen Count: {} particles/m3 \n  Grass Pollen Risk: {} \n Tree Pollen Count: {} particles/m3 \n Tree Pollen Risk: {} \n Weed Pollen Count: {} particles/m3 \n  Weed Pollen Risk: {}'.format(info["grass_pollen_count"],
                                                  info["grass_pollen_risk"],
                                                  info["tree_pollen_count"],
                                                  info["tree_pollen_risk"],
                                                  info["weed_pollen_count"],
                                                  info["weed_pollen_risk"]))
            continue
        # weather geolocation 28 77
        if (convert_index + 4) < len(words) and words[convert_index + 1] == 'weather' and words[convert_index + 2] == 'geolocation':
            lat = words[convert_index + 3]
            lng = words[convert_index + 4]
            info = getWeatherInfoGeo(lat, lng)
            results.append('Weather Information: \n Temperature: {} Fahrenheit \n  Dew Point: {} Fahrenheit \n Relative Humidity: {} \n Pressure:  {} millibar \n Wind speed: {} miles per hour \n Wind Gust: {} miles per hour \n Wind Bearing: {} \n Cloud Cover Percentage: {} \n Visibility: {} miles\n Ozone: {} Dobson'.format(info["temperature"],
                                                  info["dewPoint"],
                                                  info["humidity"],
                                                  info["pressure"],
                                                  info["windSpeed"],
                                                  info["windGust"],
                                                  info["windBearing"],
                                                  info["cloudCover"],
                                                  info["visibility"],
                                                  info["ozone"]))
            continue
        # weather name bengaluru
        if (convert_index + 3) < len(words) and words[convert_index + 1] == 'weather' and words[convert_index + 2] == 'name':
            city_name = words[convert_index + 3]
            coordinates = getLocationFromName(city_name)
            info = getWeatherInfoGeo(coordinates["lat"], coordinates["lng"])
            results.append('Weather Information: \n Temperature: {} Fahrenheit \n  Dew Point: {} Fahrenheit \n Relative Humidity: {} \n Pressure:  {} millibar \n Wind speed: {} miles per hour \n Wind Gust: {} miles per hour \n Wind Bearing: {} \n Cloud Cover Percentage: {} \n Visibility: {} miles\n Ozone: {} Dobson'.format(info["temperature"],
                                                  info["dewPoint"],
                                                  info["humidity"],
                                                  info["pressure"],
                                                  info["windSpeed"],
                                                  info["windGust"],
                                                  info["windBearing"],
                                                  info["cloudCover"],
                                                  info["visibility"],
                                                  info["ozone"]))
            continue
        # weather pincode 121001
        if (convert_index + 3) < len(words) and words[convert_index + 1] == 'weather' and words[convert_index + 2] == 'pincode':
            pincode = words[convert_index + 3]
            city_name = getLocationFromPincode(pincode)
            coordinates = getLocationFromName(city_name)
            info = getWeatherInfoGeo(coordinates["lat"], coordinates["lng"])
            results.append('Weather Information: \n Temperature: {} Fahrenheit \n  Dew Point: {} Fahrenheit \n Relative Humidity: {} \n Pressure:  {} millibar \n Wind speed: {} miles per hour \n Wind Gust: {} miles per hour \n Wind Bearing: {} \n Cloud Cover Percentage: {} \n Visibility: {} miles\n Ozone: {} Dobson'.format(info["temperature"],
                                                  info["dewPoint"],
                                                  info["humidity"],
                                                  info["pressure"],
                                                  info["windSpeed"],
                                                  info["windGust"],
                                                  info["windBearing"],
                                                  info["cloudCover"],
                                                  info["visibility"],
                                                  info["ozone"]))
            continue
        # watervapour geolocation 28 77
        if (convert_index + 4) < len(words) and words[convert_index + 1] == 'watervapour' and words[convert_index + 2] == 'geolocation':
            lat = words[convert_index + 3]
            lng = words[convert_index + 4]
            info = getWaterVapourInfoGeo(lat, lng)
            results.append('Water vapor levels in meters (m): {}'.format(info["water_vapor"]))
            continue
        # watervapour name bengaluru
        if (convert_index + 3) < len(words) and words[convert_index + 1] == 'watervapour' and words[convert_index + 2] == 'name':
            city_name = words[convert_index + 3]
            coordinates = getLocationFromName(city_name)
            info = getWaterVapourInfoGeo(coordinates["lat"], coordinates["lng"])
            results.append('Water vapor levels in meters (m): {}'.format(info["water_vapor"]))
            continue
        # watervapour pincode 121001
        if (convert_index + 3) < len(words) and words[convert_index + 1] == 'watervapour' and words[convert_index + 2] == 'pincode':
            pincode = words[convert_index + 3]
            city_name = getLocationFromPincode(pincode)
            coordinates = getLocationFromName(city_name)
            info = getWaterVapourInfoGeo(coordinates["lat"], coordinates["lng"])
            results.append('Water vapor levels in meters (m): {}'.format(info["water_vapor"]))
            continue

        # air geolocation 28 77
        if (convert_index + 4) < len(words) and words[convert_index + 1] == 'air' and words[convert_index + 2] == 'geolocation':
            lat = words[convert_index + 3]
            lng = words[convert_index + 4]
            info = getAirInfoGeo(lat, lng)
            results.append('Air Quality information: \n  NO2: {} ppb \n PM10: {} ug/m3 \n PM2.5: {} ug/m3 \n CO: {} ppm \n SO2: {} ppb \n OZONE: {} ppb \n Air quality index (AQI): {} \n Pollutant: {} \n concentration {} \n category: {}'.format(info["NO2"],
                                                        info["PM10"],
                                                        info["PM25"],
                                                        info["CO"],
                                                        info["SO2"],
                                                        info["OZONE"],
                                                        info["AQI"],
                                                        info["pollutant"],
                                                        info["concentration"],
                                                        info["category"]))
            continue
        # air name bengaluru
        if (convert_index + 3) < len(words) and words[convert_index + 1] == 'air' and words[convert_index + 2] == 'name':
            city_name = words[convert_index + 3]
            coordinates = getLocationFromName(city_name)
            info = getAirInfoGeo(coordinates["lat"], coordinates["lng"])
            results.append('Air Quality information: \n  NO2: {} ppb \n PM10: {} ug/m3 \n PM2.5: {} ug/m3 \n CO: {} ppm \n SO2: {} ppb \n OZONE: {} ppb \n Air quality index (AQI): {} \n Pollutant: {} \n concentration {} \n category: {}'.format(info["NO2"],
                                                        info["PM10"],
                                                        info["PM25"],
                                                        info["CO"],
                                                        info["SO2"],
                                                        info["OZONE"],
                                                        info["AQI"],
                                                        info["pollutant"],
                                                        info["concentration"],
                                                        info["category"]))
            continue
        # air pincode 121001
        if (convert_index + 3) < len(words) and words[convert_index + 1] == 'air' and words[convert_index + 2] == 'pincode':
            pincode = words[convert_index + 3]
            city_name = getLocationFromPincode(pincode)
            coordinates = getLocationFromName(city_name)
            info = getAirInfoGeo(coordinates["lat"], coordinates["lng"])
            results.append('Air Quality information: \n  NO2: {} ppb \n PM10: {} ug/m3 \n PM2.5: {} ug/m3 \n CO: {} ppm \n SO2: {} ppb \n OZONE: {} ppb \n Air quality index (AQI): {} \n Pollutant: {} \n concentration {} \n category: {}'.format(info["NO2"],
                                                        info["PM10"],
                                                        info["PM25"],
                                                        info["CO"],
                                                        info["SO2"],
                                                        info["OZONE"],
                                                        info["AQI"],
                                                        info["pollutant"],
                                                        info["concentration"],
                                                        info["category"]))
            continue
        else:
            results.append('Too few arguments given. ' + utils.QUICK_HELP)

    new_content = ''
    for idx, result in enumerate(results, 1):
        new_content += ((str(idx) + '. Result: ') if len(results) > 1 else '') + result + '\n'

    return new_content

handler_class = AnnadataHandler
