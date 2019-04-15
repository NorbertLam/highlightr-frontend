import React from 'react';
import {NavLink, withRouter} from 'react-router-dom';

import Search from '../components/Search'

import Toolbar from '@material-ui/core/Toolbar';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
// import Grid from '@material-ui/core/Grid';
import {withStyles} from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import PropTypes from 'prop-types';
import Dialog from '@material-ui/core/Dialog';

import {connect} from 'react-redux';

import {loginUser, clearUser} from '../actions/userActions';


const styles = theme => ({
  indicator: {
    backgroundColor: '#fff'
  }
});

const tabs = { '': 0, 'channels': 1, 'signup': 2, 'login': 3, 'channel': 1}

class NavBar extends React.Component {

  state = {
    value: tabs[window.location.pathname.split('/')[1]],
    email: '',
    password: '',
    open: false
  }

  handleTab = (event, value) => {
    this.setState({value});
  }

  handleChange = (name) => (event) => {
    this.setState({[name]: event.target.value})
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.loginUser(this.state);
    this.setState({open: false, value: tabs[window.location.pathname.split('/')[1]]});
  }

  handleLogout = () => {
    localStorage.removeItem('token');
    this.setState({value: 0})
    this.props.clearUser();
    this.props.history.push('/');
  }

  handleOpen = () => {
    this.setState({open: true});
  }

  handleClose = () => {
    this.setState({open: false});
  }
  
  render () {

    const isUser = Object.keys(this.props.user).length;

    return (
      <div>
        <AppBar position="sticky">
          <Toolbar style={{backgroundColor: '#6441A1'}}>
            <Tabs classes={{indicator: this.props.classes.indicator}} value={this.state.value} onChange={this.handleTab}>
              <Tab style={{color: 'white'}} component={NavLink} to="/" label="Home"/>
              <Tab style={{color: 'white'}} component={NavLink} to="/channels" label="Channels"/>
              {isUser === 0 ? <Tab style={{color: 'white'}} component={NavLink} to="/signup" label="Signup"/> : null}
              {isUser === 0  ? <Tab style={{color: 'white'}} component={NavLink} to="login" label="Login"/> : null}
              <Tab style={{color: 'white'}} component={NavLink} to="/profile" label="Profile"/>
              {isUser > 0 ? <Tab onClick={this.handleLogout} label="Logout"/> : null}
            </Tabs>
            <Search/>
          </Toolbar>
        </AppBar>
      </div>
    )
  }
}

NavBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  user: state.user
})

const mapDispatchToProps = (dispatch) => ({
  loginUser: (userObj) => dispatch(loginUser(userObj)),
  clearUser: () => dispatch(clearUser())
})

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(withRouter(NavBar)));
