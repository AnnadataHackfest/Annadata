import React from 'react';
import { Container, Button } from 'reactstrap';
import { connect } from 'react-redux';
import { getInfos } from '../actions/infoActions';
import PropTypes from 'prop-types';
import Alert from 'react-bootstrap/Alert';

class FarmersAskFarmers extends React.Component {
  static propTypes = {
    getInfos: PropTypes.func.isRequired,
    info: PropTypes.object.isRequired,
    isAuthenticated: PropTypes.bool,
  };

  componentDidMount() {
    this.props.getInfos();
  }

  render() {
    const { infos } = this.props.info;
    return (
      <Container>
        <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
          <h2>Grow with the Community</h2>
        </div>
        <div>
          {infos.map(({ _id, name, question, answer, phone }) => (
            <Alert show={true} variant="info">
              <Alert.Heading>{name}</Alert.Heading>
              <p>{question}</p>
              <hr />
              <p>{answer}</p>
              <div className="d-flex justify-content-end">
                <a href={`tel: ${phone}`}>
                  <Button variant="outline-success">{`Call ${name}`}</Button>
                </a>
              </div>
            </Alert>
          ))}
        </div>
      </Container>
    );
  }
}

const mapStateToProps = (state) => ({
  info: state.info,
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { getInfos })(FarmersAskFarmers);
