import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import axios from 'axios';

class Admin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      error: '',
      loggedIn: false,
      facultyDetails: []
    };
  }

  handleUsernameChange = (event) => {
    this.setState({ username: event.target.value });
  };

  handlePasswordChange = (event) => {
    this.setState({ password: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const { username, password } = this.state;
    // Check if the entered username and password are correct
    if (username === 'admin' && password === 'password') {
      // Successful login
      console.log('Login successful');
      // Clear the form fields and set loggedIn to true
      this.setState({ username: '', password: '', error: '', loggedIn: true });
      // Fetch faculty details
      this.fetchFacultyDetails();
    } else {
      // Invalid login
      this.setState({ error: 'Invalid username or password' });
    }
  };

  fetchFacultyDetails = async () => {
    try {
      const response = await axios.get('http://localhost:8083/facultys');
      // Set the faculty details in state
      this.setState({ facultyDetails: response.data });
    } catch (error) {
      console.error('Error fetching faculty details:', error);
    }
  };

  render() {
    if (this.state.loggedIn) {
      return (
        <div>
          <h1>Faculty Details</h1>
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Department</th>
                <th>Email</th>
                <th>Password</th>
                <th>Address</th>
              </tr>
            </thead>
            <tbody>
              {this.state.facultyDetails.map((faculty) => (
                <tr key={faculty.id}>
                  <td>{faculty.name}</td>
                  <td>{faculty.department}</td>
                  <td>{faculty.email}</td>
                  <td>{faculty.password}</td>
                  <td>{faculty.address}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
    }

    return (
      <div>
        <h1>Admin Sign In</h1>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group controlId="formUsername">
            <Form.Label>Username</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter username"
              value={this.state.username}
              onChange={this.handleUsernameChange}
            />
          </Form.Group>

          <Form.Group controlId="formPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Enter password"
              value={this.state.password}
              onChange={this.handlePasswordChange}
            />
          </Form.Group>

          <Button variant="primary" type="submit">
            Sign In
          </Button>

          {this.state.error && <div className="error">{this.state.error}</div>}
        </Form>
      </div>
    );
  }
}

export default Admin;
