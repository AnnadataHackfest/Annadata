const express = require('express');

const router = express.Router();
const axios = require('axios');
const {
  soilLatest,
  fireLatest,
  pollenLatest,
  // pollenForecast,
  waterVapourLatest,
  airQualityLatestGeospatial,
  airQualityLatestPostalCode,
  weatherLatest,
} = require('./ambeedataEndpoints');

const AmbeedataApiBaseUrl = process.env.AMBEEDATA_API_BASE_URL;
const AmbeedataApiKey = process.env.AMBEEDATA_API_KEY;

// Sample Request Url: localhost:5000/api/ambeedata/soil?lat=28.68&lng=77.22
router.get('/soil', (req, res) => {
  console.log(req.lat);
  const { lat } = req;
  const { lng } = req;
  console.log('latitude ', lat);
  console.log('longitude ', lng);
  const url = `${AmbeedataApiBaseUrl}${soilLatest}?lat=${lat}&lng=${lng}`;
  axios({
    method: 'GET',
    url,
    headers: {
      'x-api-key': AmbeedataApiKey,
    },
  })
    .then((response) => {
      console.log(response.data);
      res.json(response.data);
    })
    .catch((error) => {
      console.log('Error occured in Ambeedata Api ', error);
      return res.status(400).json({ msg: 'Error occured in Ambeedata Api' });
    });
});

// Sample Request Url: localhost:5000/api/ambeedata/fire?lat=28.68&lng=77.22
router.get('/fire', (req, res) => {
  const { lat, lng } = req.query;
  console.log('latitude ', lat);
  console.log('longitude ', lng);
  const url = `${AmbeedataApiBaseUrl}${fireLatest}?lat=${lat}&lng=${lng}`;
  axios({
    method: 'GET',
    url,
    headers: {
      'x-api-key': AmbeedataApiKey,
    },
  })
    .then((response) => {
      console.log(response.data);
      res.json(response.data);
    })
    .catch((error) => {
      console.log('Error occured in Ambeedata Api ', error);
      return res.status(400).json({ msg: 'Error occured in Ambeedata Api' });
    });
});

// Sample Request Url: localhost:5000/api/ambeedata/pollen?lat=28.68&lng=77.22
router.get('/pollen', (req, res) => {
  const { lat, lng } = req.query;
  console.log('latitude ', lat);
  console.log('longitude ', lng);
  const url = `${AmbeedataApiBaseUrl}${pollenLatest}?lat=${lat}&lng=${lng}`;
  axios({
    method: 'GET',
    url,
    headers: {
      'x-api-key': AmbeedataApiKey,
    },
  })
    .then((response) => {
      console.log(response.data);
      res.json(response.data);
    })
    .catch((error) => {
      console.log('Error occured in Ambeedata Api ', error);
      return res.status(400).json({ msg: 'Error occured in Ambeedata Api' });
    });
});

// Sample Request Url: localhost:5000/api/ambeedata/waterVapour?lat=28.68&lng=77.22
router.get('/waterVapour', (req, res) => {
  const { lat, lng } = req.query;
  console.log('latitude ', lat);
  console.log('longitude ', lng);
  const url = `${AmbeedataApiBaseUrl}${waterVapourLatest}?lat=${lat}&lng=${lng}`;
  axios({
    method: 'GET',
    url,
    headers: {
      'x-api-key': AmbeedataApiKey,
    },
  })
    .then((response) => {
      console.log(response.data);
      res.json(response.data);
    })
    .catch((error) => {
      console.log('Error occured in Ambeedata Api ', error);
      return res.status(400).json({ msg: 'Error occured in Ambeedata Api' });
    });
});

// Sample Request Url: localhost:5000/api/ambeedata/air/geospatial?lat=28.68&lng=77.22
router.get('/air/geospatial', (req, res) => {
  const { lat, lng } = req.query;
  console.log('latitude ', lat);
  console.log('longitude ', lng);
  const url = `${AmbeedataApiBaseUrl}${airQualityLatestGeospatial}?lat=${lat}&lng=${lng}`;
  axios({
    method: 'GET',
    url,
    headers: {
      'x-api-key': AmbeedataApiKey,
    },
  })
    .then((response) => {
      console.log(response.data);
      res.json(response.data);
    })
    .catch((error) => {
      console.log('Error occured in Ambeedata Api ', error);
      return res.status(400).json({ msg: 'Error occured in Ambeedata Api' });
    });
});

// Sample Request Url: localhost:5000/api/ambeedata/air/postal?postalCode=560020&countryCode=IN
router.get('/air/postal', (req, res) => {
  const { postalCode } = req.query;
  const countryCode = req.query.postalCode || 'IN';
  console.log('postalCode ', postalCode);
  console.log('countryCode ', countryCode);
  const url = `${AmbeedataApiBaseUrl}${airQualityLatestPostalCode}?postalCode=${postalCode}&countryCode=${countryCode}`;
  axios({
    method: 'GET',
    url,
    headers: {
      'x-api-key': AmbeedataApiKey,
    },
  })
    .then((response) => {
      console.log(response.data);
      res.json(response.data);
    })
    .catch((error) => {
      console.log('Error occured in Ambeedata Api ', error);
      return res.status(400).json({ msg: 'Error occured in Ambeedata Api' });
    });
});

// Sample Request Url: localhost:5000/api/ambeedata/weather?lat=28.68&lng=77.22
router.get('/weather', (req, res) => {
  const { lat, lng } = req.query;
  console.log('latitude ', lat);
  console.log('longitude ', lng);
  const url = `${AmbeedataApiBaseUrl}${weatherLatest}?lat=${lat}&lng=${lng}`;
  axios({
    method: 'GET',
    url,
    headers: {
      'x-api-key': AmbeedataApiKey,
    },
  })
    .then((response) => {
      console.log(response.data);
      res.json(response.data);
    })
    .catch((error) => {
      console.log('Error occured in Ambeedata Api ', error);
      return res.status(400).json({ msg: 'Error occured in Ambeedata Api' });
    });
});

module.exports = router;
