import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Complete from '../images/complete.PNG';
import plantDiseaseDetected from '../images/plantDiseaseDetected.PNG';
import noInternet from '../images/noInternet.png';
import icon1 from '../images/icon1.png';
import icon2 from '../images/icon2.png';
import icon3 from '../images/icon3.png';
import icon4 from '../images/icon4.png';

const Features = () => {
  return (
    <div style={{ marginBottom: '2rem' }}>
      <div
        style={{ textAlign: 'center', marginTop: '2rem', marginBottom: '2rem' }}
      >
        <h2>Our Salient Features</h2>
      </div>
      <Container>
        <Row>
          <Col>
            <Card style={{ width: '18rem' }}>
              <Card.Img
                variant="top"
                src={Complete}
                width="300"
                height="300"
                alt="detail information"
              />
              <Card.Body>
                <Card.Text>
                  Detailed information from sowing till harvesting
                </Card.Text>
                <a href="/modern">
                  <Button variant="primary">Explore More</Button>
                </a>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card style={{ width: '18rem' }}>
              <Card.Img
                variant="top"
                src={plantDiseaseDetected}
                width="300"
                height="300"
              />
              <Card.Body>
                <Card.Text>
                  Plant disease detection using computer vision
                </Card.Text>
                <a href="/crop">
                  <Button variant="primary">Upload Image</Button>
                </a>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card style={{ width: '18rem' }}>
              <Card.Img
                variant="top"
                src={noInternet}
                width="300"
                height="300"
              />
              <Card.Body>
                <Card.Text>
                  Unique SMS based model for farmers without internet
                </Card.Text>
                <a href="/">
                  <Button variant="primary">SMS Now</Button>
                </a>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
      <Container>
        <div
          style={{
            textAlign: 'center',
            marginTop: '2rem',
            marginBottom: '2rem',
          }}
        >
          <h2>Our Range of Services</h2>
        </div>
        <Row>
          <Col>
            <img src={icon1} alt="Crop Disease Detection" />
            <br />
            <span>
              <strong>Crop Disease Detection</strong>
            </span>
          </Col>
          <Col>
            <img src={icon2} alt="Weather and All API support" />
            <br />
            <span>
              <strong>Weather and All API support</strong>
            </span>
          </Col>
          <Col>
            <img src={icon3} alt="Irrigation and Modern Farming" />
            <br />
            <span>
              <strong>Irrigation and Modern Farming</strong>
            </span>
          </Col>
          <Col>
            <img src={icon4} alt="Cross-Platform Application" />
            <br />
            <span>
              <strong>Cross-Platform Application</strong>
            </span>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Features;
