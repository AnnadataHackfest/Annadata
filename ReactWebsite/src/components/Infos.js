import React from 'react';
import {
  Container,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  Form,
  FormGroup,
  Label,
  Input,
} from 'reactstrap';
import { connect } from 'react-redux';
import { getQuestions } from '../actions/questionActions';
import { addInfo } from '../actions/infoActions';
import PropTypes from 'prop-types';
import Alert from 'react-bootstrap/Alert';

class Infos extends React.Component {
  state = {
    modal: false,
    question: '',
    answer: '',
    name: '',
    phone: '',
  };

  static propTypes = {
    getQuestions: PropTypes.func.isRequired,
    question: PropTypes.object.isRequired,
    isAuthenticated: PropTypes.bool,
  };

  componentDidMount() {
    this.props.getQuestions();
  }

  toggle = () => {
    this.setState({
      modal: !this.state.modal,
    });
  };

  handleClick = (e) => {
    this.setState({
      question: e.target.value,
    });
    this.toggle();
  };

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = (e) => {
    e.preventDefault();

    const newInfo = {
      question: this.state.question,
      answer: this.state.answer,
      name: this.state.name,
      phone: this.state.phone,
    };

    // Add item via addItem action

    this.props.addInfo(newInfo);

    this.toggle();
  };

  render() {
    const { questions } = this.props.question;
    console.log(questions);
    return (
      <Container>
        <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
          <h2>Community needs you contribution, please help</h2>
        </div>
        <div>
          {questions.map(({ _id, name, question, phone }) => (
            <Alert show={true} variant="success">
              <Alert.Heading>{name}</Alert.Heading>
              <p>{question}</p>
              <hr />
              <div className="d-flex justify-content-start">
                <Button
                  color="primary"
                  onClick={this.handleClick}
                  value={question}
                >
                  Answer now
                </Button>{' '}
              </div>
              <div className="d-flex justify-content-end">
                <a href={`tel: ${phone}`}>
                  <Button variant="outline-success">{`Call ${name}`}</Button>
                </a>
              </div>
            </Alert>
          ))}
        </div>

        <Modal isOpen={this.state.modal} toggle={this.toggle}>
          <ModalHeader toggle={this.toggle}>Answer the question</ModalHeader>
          <ModalBody>
            <Form onSubmit={this.onSubmit}>
              <FormGroup>
                <Label for="item">Question</Label>
                <Input
                  type="text"
                  name="question"
                  id="question"
                  placeholder="What you wanna talk about"
                  value={this.state.question}
                  style={{ marginBottom: '1rem' }}
                  disabled
                />

                <Label for="item">Answer</Label>
                <Input
                  type="text"
                  name="answer"
                  id="answer"
                  placeholder="Propose your solution"
                  onChange={this.onChange}
                  style={{ marginBottom: '1rem' }}
                />

                <Label for="item">Your Name</Label>
                <Input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Your name"
                  onChange={this.onChange}
                  style={{ marginBottom: '1rem' }}
                />

                <Label for="item">Phone</Label>
                <Input
                  type="text"
                  name="phone"
                  id="phone"
                  placeholder="For further commuication"
                  onChange={this.onChange}
                  style={{ marginBottom: '1rem' }}
                />

                <Button color="dark" style={{ marginTop: '2rem' }} block>
                  Submit
                </Button>
              </FormGroup>
            </Form>
          </ModalBody>
        </Modal>
      </Container>
    );
  }
}

const mapStateToProps = (state) => ({
  question: state.question,
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { getQuestions, addInfo })(Infos);
