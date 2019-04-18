import React from 'react';

import {withRouter} from 'react-router-dom';

import {connect} from 'react-redux';

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import {createUser} from '../actions/userActions';


class SignupForm extends React.Component {

  style = {
    backgroundColor: '#6441A1',
    color: 'white'
  }

  state = {
    email: '',
    username: '',
    password: ''
  }

  handleChange = (name) => (event) => {
    this.setState({[name]: event.target.value});
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.createUser(this.state);
    this.props.history.push('login')
  }

  render () {
    return (
      <div>
        <form id="signupForm" autoComplete="off" onSubmit={this.handleSubmit}>
          <TextField
            label="Email"
            className="email"
            type="email"
            value={this.state.email}
            margin="normal"
            variant="outlined"
            required="true"
            onChange={this.handleChange('email')}
          /> <br/>
          <TextField
            label="Username"
            className="username"
            value={this.state.username}
            margin="normal"
            variant="outlined"
            required="true"
            onChange={this.handleChange('username')}
          /> <br/>
          <TextField
            label="Password"
            className="password"
            type="password"
            value={this.state.password}
            margin="normal"
            variant="outlined"
            required="true"
            onChange={this.handleChange('password')}
          /> <br/>
          <Button variant="contained" style={this.style} type="submit" form="signupForm">
            Signup
          </Button>
        </form>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {createUser: (userObj) => dispatch(createUser(userObj))}
}

export default connect(null, mapDispatchToProps)(withRouter(SignupForm));
