import React from 'react';
import { Button } from 'reactstrap';

import { connect } from 'react-redux';
import { getSoil } from '../actions/soilActions';
import PropTypes from 'prop-types';
import Alert from 'react-bootstrap/Alert';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';

const axios = require('axios');

class Location extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      lat: '',
      lng: '',
      soil_temp: '',
      soil_moist: '',
      confidence: '',
      frp: '',
      detect_time: '',
      grass_pollen: '',
      tree_pollen: '',
      weed_pollen: '',
      grass_pollen_risk: '',
      tree_pollen_risk: '',
      weed_pollen_risk: '',
      pollen_time: '',
      water_time: '',
      water_vapour: '',
      aqi: '',
      co: '',
      no2: '',
      ozone: '',
      pm10: '',
      aqiInfo: '',
      city: '',
      state: '',
    };

    this.onSubmit = this.onSubmit.bind(this);
    this.onSubmitFire = this.onSubmitFire.bind(this);
  }

  componentDidMount = () => {
    if ('geolocation' in navigator) {
      console.log('Your location is Available');
      navigator.geolocation.getCurrentPosition((position) => {
        const self = this;
        self.setState({
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        });
      });
    } else {
      console.log(
        'Your location is not available, please change your settings to allow'
      );
    }
  };

  onSubmit = (e) => {
    const url = `https://api.ambeedata.com/soil/latest/by-lat-lng?lat=${this.state.lat}&lng=${this.state.lng}`;
    axios({
      method: 'GET',
      url: url,
      headers: {
        'x-api-key': 'vbOFm1KGNhaoAIQM0KrSPaknrXIgMaoQdXSMKsd5',
      },
    })
      .then((response) => {
        this.setState({
          soil_temp: response.data.data[0].soil_temperature,
          soil_moist: response.data.data[0].soil_moisture,
        });
      })
      .catch((error) => {
        console.log('Data could not be fetched ', error);
      });
  };

  onSubmitFire = (e) => {
    const url = `https://api.ambeedata.com/latest/fire?lat=${this.state.lat}&lng=${this.state.lng}`;
    axios({
      method: 'GET',
      url: url,
      headers: {
        'x-api-key': 'vbOFm1KGNhaoAIQM0KrSPaknrXIgMaoQdXSMKsd5',
      },
    })
      .then((response) => {
        console.log(response.data);
        this.setState({
          confidence: response.data.data[0].confidence,
          frp: response.data.data[0].frp,
          detect_time: response.data.data[0].detection_time,
        });
      })
      .catch((error) => {
        console.log('Data could not be fetched ', error);
      });
  };

  onSubmitPollen = (e) => {
    const url = `https://api.ambeedata.com/latest/pollen/by-lat-lng?lat=${this.state.lat}&lng=${this.state.lng}`;
    axios({
      method: 'GET',
      url: url,
      headers: {
        'x-api-key': 'vbOFm1KGNhaoAIQM0KrSPaknrXIgMaoQdXSMKsd5',
      },
    })
      .then((response) => {
        this.setState({
          grass_pollen: response.data.data[0].Count.grass_pollen,
          tree_pollen: response.data.data[0].Count.tree_pollen,
          weed_pollen: response.data.data[0].Count.weed_pollen,
          grass_pollen_risk: response.data.data[0].Risk.grass_pollen,
          tree_pollen_risk: response.data.data[0].Risk.tree_pollen,
          weed_pollen_risk: response.data.data[0].Risk.weed_pollen,
          pollen_time: response.data.data[0].updatedAt,
        });
      })
      .catch((error) => {
        console.log('Data could not be fetched ', error);
      });
  };

  onSubmitWater = (e) => {
    const url = `https://api.ambeedata.com/waterVapor/latest/by-lat-lng?lat=${this.state.lat}&lng=${this.state.lng}`;
    axios({
      method: 'GET',
      url: url,
      headers: {
        'x-api-key': 'vbOFm1KGNhaoAIQM0KrSPaknrXIgMaoQdXSMKsd5',
      },
    })
      .then((response) => {
        this.setState({
          water_vapour: response.data.data[0].water_vapor,
          water_time: response.data.data[0].createdAt,
        });
      })
      .catch((error) => {
        console.log('Data could not be fetched ', error);
      });
  };

  onSubmitAir = (e) => {
    const url = `https://api.ambeedata.com/latest/by-lat-lng?lat=${this.state.lat}&lng=${this.state.lng}`;
    axios({
      method: 'GET',
      url: url,
      headers: {
        'x-api-key': 'vbOFm1KGNhaoAIQM0KrSPaknrXIgMaoQdXSMKsd5',
      },
    })
      .then((response) => {
        this.setState({
          aqi: response.data.stations[0].AQI,
          co: response.data.stations[0].CO,
          no2: response.data.stations[0].NO2,
          ozone: response.data.stations[0].OZONE,
          pm10: response.data.stations[0].PM10,
          aqiInfo: response.data.stations[0].aqiInfo.category,
          city: response.data.stations[0].city,
          state: response.data.stations[0].state,
        });
      })
      .catch((error) => {
        console.log('Data could not be fetched ', error);
      });
  };

  static propTypes = {
    getSoil: PropTypes.func.isRequired,
    isAuthenticated: PropTypes.bool,
  };

  render() {
    return (
      <div>
        <Container>
          <Alert variant="success">
            <Alert.Heading>Hey, nice to see you</Alert.Heading>
            <p>
              Your location has successfully been recorded to us. Your location
              in coordinates is Latitude {this.state.lat} and Longitude{' '}
              {this.state.lng}. You can get a lot of information here including
              your soil types, moisture content, weather forecasting and much
              more
            </p>
            <hr />
            <p className="mb-0">
              Just surf around the corners and get a lot of useful information
            </p>
          </Alert>
          <div style={{ display: 'flex', textAlign: 'center' }}>
            <Button
              color="primary"
              onClick={this.onSubmit}
              style={{
                marginTop: '3rem',
                marginBottom: '3rem',
                marginLeft: '1rem',
                marginRight: '1rem',
              }}
            >
              Check Your Soil
            </Button>
            <Button
              color="primary"
              onClick={this.onSubmitFire}
              style={{
                marginTop: '3rem',
                marginBottom: '3rem',
                marginLeft: '1rem',
                marginRight: '1rem',
              }}
            >
              Check for Fire
            </Button>
            <Button
              color="primary"
              onClick={this.onSubmitPollen}
              style={{
                marginTop: '3rem',
                marginBottom: '3rem',
                marginLeft: '1rem',
                marginRight: '1rem',
              }}
            >
              Check For Pollen Grains
            </Button>
            <Button
              color="primary"
              onClick={this.onSubmitWater}
              style={{
                marginTop: '3rem',
                marginBottom: '3rem',
                marginLeft: '1rem',
                marginRight: '1rem',
              }}
            >
              Check for Humidity
            </Button>
            <Button
              color="primary"
              onClick={this.onSubmitAir}
              style={{
                marginTop: '3rem',
                marginBottom: '3rem',
                marginLeft: '1rem',
                marginRight: '1rem',
              }}
            >
              Check for Air around you
            </Button>
          </div>

          <div style={{ display: 'flex' }}>
            {this.state.soil_temp !== '' ? (
              <Card
                style={{
                  width: '18rem',
                  marginTop: '1rem',
                  marginBottom: '2rem',
                  marginLeft: '1rem',
                  marginRight: '1rem',
                }}
              >
                <Card.Img
                  variant="top"
                  src="https://images.unsplash.com/photo-1510844355160-2fb07bf9af75?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8c29pbHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                />
                <Card.Body>
                  <Card.Title>Your Soil</Card.Title>
                  <hr />
                  <Card.Text>
                    Your soil's current temperature is{' '}
                    <strong>{this.state.soil_temp}°C</strong> and its moisture
                    content is <strong>{this.state.soil_moist}%</strong>. Keep
                    good care of your soil and water it regularly
                  </Card.Text>
                  <a href="/community">
                    <Button variant="primary">Explore Best Practices</Button>
                  </a>
                </Card.Body>
              </Card>
            ) : null}

            {this.state.confidence !== '' ? (
              <Card
                style={{
                  width: '18rem',
                  marginTop: '1rem',
                  marginBottom: '2rem',
                  marginLeft: '1rem',
                  marginRight: '1rem',
                }}
              >
                <Card.Img
                  variant="top"
                  src="https://images.unsplash.com/photo-1476455553758-5a8b16727e23?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Njd8fGZpcmV8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                />
                <Card.Body>
                  <Card.Title>Fire Chances in your Area</Card.Title>
                  <hr />
                  <Card.Text>
                    The fire chances currently in your area is{' '}
                    <strong>{this.state.confidence}. </strong>
                    The corresponding FRP(Fire Radiative Power) is estimated to
                    be around <strong>{this.state.frp} MW </strong>. This data
                    was recorded at the time{' '}
                    <strong>{this.state.detect_time}. </strong>
                    You do not need to worry in case of fire as well. Just
                    follow these best practices as given
                  </Card.Text>
                  <a href="/community">
                    <Button variant="primary">Explore Best Practices</Button>
                  </a>
                </Card.Body>
              </Card>
            ) : null}

            {this.state.grass_pollen !== '' ? (
              <Card
                style={{
                  width: '18rem',
                  marginTop: '1rem',
                  marginBottom: '2rem',
                  marginLeft: '1rem',
                  marginRight: '1rem',
                }}
              >
                <Card.Img
                  variant="top"
                  src="https://images.unsplash.com/photo-1614166495387-d09f5e26eb92?ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8cG9sbGVufGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                />
                <Card.Body>
                  <Card.Title>General Pollen Info near you</Card.Title>
                  <hr />
                  <Card.Text>
                    The number of pollens(relative) per unit area in your farm
                    is for{' '}
                    <strong>
                      {' '}
                      grass pollen is {this.state.grass_pollen}, for tree pollen
                      is {this.state.tree_pollen}, for weed pollen is{' '}
                      {this.state.weed_pollen}.{' '}
                    </strong>
                    The corresponding risk of pollen grains for various pollens
                    near you farm are for{' '}
                    <strong>
                      {' '}
                      grass pollen is
                      {this.state.grass_pollen_risk}, for tree pollen is{' '}
                      {this.state.tree_pollen_risk} and for weed pollen is
                      {this.state.weed_pollen_risk}.{' '}
                    </strong>
                    This data was recorded at the time{' '}
                    <strong>{this.state.pollen_time}. </strong>
                    The sole information is to make you aware about the floating
                    pollen grains in your are of weed and you might need to plan
                    weedicides accordingly
                  </Card.Text>
                  <a href="/community">
                    <Button variant="primary">Explore Best Practices</Button>
                  </a>
                </Card.Body>
              </Card>
            ) : null}

            {this.state.water_vapour !== '' ? (
              <Card
                style={{
                  width: '18rem',
                  marginTop: '1rem',
                  marginBottom: '2rem',
                  marginLeft: '1rem',
                  marginRight: '1rem',
                }}
              >
                <Card.Img
                  variant="top"
                  src="https://images.unsplash.com/photo-1609609014985-bfd695dad544?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NjB8fHNtb2tlfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                />
                <Card.Body>
                  <Card.Title>Water Vapour Info in your atmosphere</Card.Title>
                  <hr />
                  <Card.Text>
                    The current amount of water vapour in the atmosphere near
                    your area is{' '}
                    <strong>{this.state.water_vapour} meters.</strong>
                    This data was recorded at the time{' '}
                    <strong>{this.state.water_time}. </strong>
                    The sole information is to make you aware about the current
                    atmospheric humidity in your atmosphere so that you plan on
                    irrigation accordingly!
                  </Card.Text>
                  <a href="/community">
                    <Button variant="primary">Explore Best Practices</Button>
                  </a>
                </Card.Body>
              </Card>
            ) : null}

            {this.state.aqi !== '' ? (
              <Card
                style={{
                  width: '18rem',
                  marginTop: '1rem',
                  marginBottom: '2rem',
                  marginLeft: '1rem',
                  marginRight: '1rem',
                }}
              >
                <Card.Img
                  variant="top"
                  src="https://images.unsplash.com/photo-1422132940975-a71d3ffef351?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8YWlyfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                />
                <Card.Body>
                  <Card.Title>Air Info around you</Card.Title>
                  <hr />
                  <Card.Text>
                    You are currently residing in{' '}
                    <strong>{this.state.city} </strong>city and in{' '}
                    <strong>{this.state.state}</strong> state. The current info
                    and composition of air around you is{' '}
                    <strong>
                      AQI is around {this.state.aqi}, concentration of CO gas is
                      {this.state.co}%, NO2 gas is {this.state.no2}%, ozone gas
                      is {this.state.ozone}%.{' '}
                    </strong>
                    The amount of{' '}
                    <strong>
                      PM2 particles is {this.state.pm10}. The AQI suggests that
                      the air around you is {this.state.aqiInfo}.{' '}
                    </strong>
                    The sole information is to make you aware about the current
                    air composition arounf you and thus take caution measures as
                    required!
                  </Card.Text>
                  <a href="/community">
                    <Button variant="primary">Explore Best Practices</Button>
                  </a>
                </Card.Body>
              </Card>
            ) : null}
          </div>
        </Container>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  soil: state.soil,
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { getSoil })(Location);
