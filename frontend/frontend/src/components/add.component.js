import React, { Component } from 'react';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import { Link } from 'react-router-dom';

class Add extends Component {
  constructor() {
    super();
    this.state = {
      id: '',
      mark1: '',
      mark2: '',
      mark3: '',
      mark4: '',
      mark5: '',
      total: '',
      successMessage: ''
    };
  }

  handleIdChange = (event) => {
    this.setState({ id: event.target.value });
  }

  handleMark1Change = (event) => {
    this.setState({ mark1: event.target.value });
  }

  handleMark2Change = (event) => {
    this.setState({ mark2: event.target.value });
  }

  handleMark3Change = (event) => {
    this.setState({ mark3: event.target.value });
  }

  handleMark4Change = (event) => {
    this.setState({ mark4: event.target.value });
  }

  handleMark5Change = (event) => {
    this.setState({ mark5: event.target.value });
  }

  handleTotalChange = (event) => {
    this.setState({ total: event.target.value });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const { id, mark1, mark2, mark3, mark4, mark5, total } = this.state;
    axios.post('http://localhost:9999/api/results', {
      id,
      mark1,
      mark2,
      mark3,
      mark4,
      mark5,
      total
    })
      .then(response => {
        console.log('Form submitted successfully');
        this.setState({ successMessage: 'Result added successfully' });
      })
      .catch(error => {
        console.error('Error submitting form:', error);
        this.setState({ successMessage: 'Submission is unsuccessful' });
      });
  }

  render() {
    return (
      <div className="App">
        <br /><br />
        <h1>Signup</h1>

        <Form.Group as={Row} className="mb-3">
          <Form.Label column sm="2">
            Id
          </Form.Label>
          <Col sm="10">
            <Form.Control type="text" placeholder="Enter id" value={this.state.id} onChange={this.handleIdChange} />
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-3">
          <Form.Label column sm="2">
            Mark 1
          </Form.Label>
          <Col sm="10">
            <Form.Control type="text" placeholder="Enter mark 1" value={this.state.mark1} onChange={this.handleMark1Change} />
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-3">
          <Form.Label column sm="2">
            Mark 2
          </Form.Label>
          <Col sm="10">
            <Form.Control type="text" placeholder="Enter mark 2" value={this.state.mark2} onChange={this.handleMark2Change} />
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-3">
          <Form.Label column sm="2">
            Mark 3
          </Form.Label>
          <Col sm="10">
            <Form.Control type="text" placeholder="Enter mark 3" value={this.state.mark3} onChange={this.handleMark3Change} />
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-3">
          <Form.Label column sm="2">
            Mark 4
          </Form.Label>
          <Col sm="10">
            <Form.Control type="text" placeholder="Enter mark 4" value={this.state.mark4} onChange={this.handleMark4Change} />
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-3">
          <Form.Label column sm="2">
            Mark 5
          </Form.Label>
          <Col sm="10">
            <Form.Control type="text" placeholder="Enter mark 5" value={this.state.mark5} onChange={this.handleMark5Change} />
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-3">
          <Form.Label column sm="2">
            Total
          </Form.Label>
          <Col sm="10">
            <Form.Control type="text" placeholder="Enter total" value={this.state.total} onChange={this.handleTotalChange} />
          </Col>
        </Form.Group>

        <Button type="submit" className="m-3" onClick={this.handleSubmit}>Add result</Button>
        <br></br>
       
        {this.state.successMessage && <div>{this.state.successMessage}</div>}
      </div>
    );
  }
}

export default Add;