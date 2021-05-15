import React from 'react';
import {
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
import { addInfo } from '../actions/infoActions';
import PropTypes from 'prop-types';

class QuestionModal extends React.Component {
  state = {
    questionModal: false,
    infoModal: false,
    question: '',
    answer: '',
    name: '',
    phone: '',
  };

  static propTypes = {
    isAuthenticated: PropTypes.bool,
  };

  questionToggle = () => {
    this.setState({
      questionModal: !this.state.questionModal,
    });
  };

  infoToggle = () => {
    this.setState({
      infoModal: !this.state.infoModal,
    });
  };

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onQuestionSubmit = (e) => {
    e.preventDefault();

    const newQuestion = {
      question: this.state.question,
      name: this.state.name,
      phone: this.state.phone,
    };

    // Add item via addItem action

    this.props.addQuestion(newQuestion);

    this.questionToggle();
  };

  onInfoSubmit = (e) => {
    e.preventDefault();

    const newInfo = {
      question: this.state.question,
      answer: this.state.answer,
      name: this.state.name,
      phone: this.state.phone,
    };

    // Add item via addItem action

    this.props.addInfo(newInfo);

    this.infoToggle();
  };

  render() {
    return (
      <div>
        {this.props.isAuthenticated ? (
          <div style={{ textAlign: 'center' }}>
            <Button
              color="dark"
              style={{
                marginBottom: '2rem',
                marginLeft: '1rem',
                marginRight: '1rem',
              }}
              onClick={this.questionToggle}
            >
              Ask Questions
            </Button>
            <Button
              color="dark"
              style={{
                marginBottom: '2rem',
                marginLeft: '1rem',
                marginRight: '1rem',
              }}
              onClick={this.infoToggle}
            >
              Post Info
            </Button>
            <a href="/community/answer">
              <Button
                color="dark"
                style={{
                  marginBottom: '2rem',
                  marginLeft: '1rem',
                  marginRight: '1rem',
                }}
              >
                Answer A Question
              </Button>
            </a>
          </div>
        ) : (
          <h4 className="mb-3 ml-4">
            Please log in first to participate in the discussion
          </h4>
        )}

        <Modal isOpen={this.state.questionModal} toggle={this.questionToggle}>
          <ModalHeader toggle={this.questionToggle}>
            Ask Questions (Be Specific)
          </ModalHeader>
          <ModalBody>
            <Form onSubmit={this.onQuestionSubmit}>
              <FormGroup>
                <Label for="item">Question</Label>
                <Input
                  type="text"
                  name="question"
                  id="question"
                  placeholder="Ask your query"
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
                  Ask
                </Button>
              </FormGroup>
            </Form>
          </ModalBody>
        </Modal>

        <Modal isOpen={this.state.infoModal} toggle={this.infoToggle}>
          <ModalHeader toggle={this.infoToggle}>
            Share an Info which might be helpful
          </ModalHeader>
          <ModalBody>
            <Form onSubmit={this.onInfoSubmit}>
              <FormGroup>
                <Label for="item">Question</Label>
                <Input
                  type="text"
                  name="question"
                  id="question"
                  placeholder="What you wanna talk about"
                  onChange={this.onChange}
                  style={{ marginBottom: '1rem' }}
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
                  Ask
                </Button>
              </FormGroup>
            </Form>
          </ModalBody>
        </Modal>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  question: state.question,
  info: state.info,
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { addInfo })(QuestionModal);
