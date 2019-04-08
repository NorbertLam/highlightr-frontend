import React from 'react';
import {NavLink, withRouter} from 'react-router-dom';
import Toolbar from '@material-ui/core/Toolbar';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Modal from '@material-ui/core/Modal';
import TextField from '@material-ui/core/TextField';


const styles = theme => ({
  indicator: {
    backgroundColor: '#fff'
  }
});

const tabs = { '': 0, 'channels': 1, 'signup': 2, 'login': 3, 'channel': 1}

class NavBar extends React.Component {

  state = {
    value: tabs[window.location.pathname.split('/')[1]],
    emai: '',
    password: '',
    open: false
  }

  handleTab = (event, value) => {
    this.setState({value});
  }

  handleChange = (name) => (event) => {
    this.setState({[name]: event.target.value})
  }

  handleLogout = () => {
    localStorage.removeItem('token');
    this.props.history.push('/');
  }

  handleOpen = () => {
    this.setState({open: true});
  }

  handleClose = () => {
    this.setState({open: false});
  }
  
  render () {
    return (
      <div>
        <AppBar position="sticky">
          <Toolbar style={{backgroundColor: '#6441A1'}}>
            <Tabs classes={{indicator: this.props.classes.indicator}} value={this.state.value} onChange={this.handleTab}>
              <Tab style={{color: 'white'}} component={NavLink} to="/" label="Home"/>
              <Tab style={{color: 'white'}} component={NavLink} to="/channels" label="Channels"/>
              <Tab style={{color: 'white'}} component={NavLink} to="/signup" label="Signup"/>
              {/* <Tab style={{color: 'white'}} component={NavLink} to="/login" label="Login"/> */}
              <Tab style={{color: 'white'}} onClick={this.handleOpen} label="Login"/>
              <Tab style={{color: 'white'}} component={NavLink} to="/profile" label="Profile"/>
            </Tabs>
              <Tab onClick={this.handleLogout} label="Logout"/>
          {/* <Grid style={{float: 'right'}}>
              <Tab style={{color: 'white', float: 'right'}} label="Iwantthisontherightcorner"/>
          </Grid> */}
          </Toolbar>
        </AppBar>
        <Modal style={{position: 'absolute', left: '50%', top: '50%', transform: 'translate(-50%, -50%)'}} open={this.state.open} onClose={this.handleClose}>
          <form style={{backgroundColor : '#484848', position: 'absolute', left: '50%', top: '50%'}} id="loginForm">
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
        </Modal>
      </div>
    )
  }
}

export default withStyles(styles)(withRouter(NavBar));
