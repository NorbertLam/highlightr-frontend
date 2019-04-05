import React from 'react';

import TextField from '@material-ui/core/TextField';


class SignupForm extends React.Component {
  
  state = {
    email: '',
    username: '',
    password: ''
  }

  handleChange = name => event => {
    this.setState({[name]: event.target.value});
  }

  render () {
    return (
      <div>
        <form autoComplete="off">
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
            label="Username"
            className="username"
            value={this.state.username}
            margin="normal"
            variant="outlined"
            onChange={this.handleChange('username')}
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
        </form>
      </div>
    )
  }
}

export default SignupForm;
