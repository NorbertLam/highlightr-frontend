import React from 'react'

import {withRouter} from 'react-router-dom';

import {connect} from 'react-redux';

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import {loginUser} from '../actions/userActions';

class LoginForm extends React.Component {

  style = {
    backgroundColor: '#6441A1',
    color: 'white'
  }
  
  state = {
    email: '',
    password: ''
  }

  handleChange = (name) => (event) => {
    this.setState({[name]: event.target.value})
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.loginUser(this.state);
    this.props.history.push('/profile');
  }
  
  render () {
    return (
      <div>
        <form id="loginForm" onSubmit={this.handleSubmit}>
          <TextField
            label="Email"
            className="email"
            type="email"
            value={this.state.email}
            margin="normal"
            variant="outlined"
            onChange={this.handleChange('email')}
          /> <br/>
          <TextField
            label="Password"
            className="password"
            type="password"
            value={this.state.password}
            margin="normal"
            variant="outlined"
            onChange={this.handleChange('password')}
          /> <br/>
          <Button variant="contained" style={this.style} type="submit" form="loginForm">
            Login
          </Button>
        </form>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  loginUser: (userObj) => dispatch(loginUser(userObj))
})

export default connect(null, mapDispatchToProps)(withRouter(LoginForm));
