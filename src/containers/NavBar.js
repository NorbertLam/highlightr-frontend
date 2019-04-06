import React from 'react';
import {NavLink} from 'react-router-dom';
import Toolbar from '@material-ui/core/Toolbar';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  indicator: {
    backgroundColor: '#fff'
  }
});

const tabs = { '': 0, 'channels': 1, 'signup': 2, 'login': 3, 'channel': 1}

class NavBar extends React.Component {

  state = {
    value: tabs[window.location.pathname.split('/')[1]]
  }

  handleChange = (event, value) => {
    this.setState({value});
  }
  
  render () {
    return (
      <div>
        <AppBar position="sticky">
          <Toolbar style={{backgroundColor: '#6441A1'}}>
            <Tabs classes={{indicator: this.props.classes.indicator}} value={this.state.value} onChange={this.handleChange}>
              <Tab style={{color: 'white'}} component={NavLink} to="/" label="Home"/>
              <Tab style={{color: 'white'}} component={NavLink} to="/channels" label="Channels"/>
              <Tab style={{color: 'white'}} component={NavLink} to="/signup" label="Signup"/>
              <Tab style={{color: 'white'}} component={NavLink} to="/login" label="Login"/>
            </Tabs>
          <Grid style={{float: 'right'}}>
              <Tab style={{color: 'white', float: 'right'}} label="Iwantthisontherightcorner"/>
          </Grid>
          </Toolbar>
        </AppBar>
      </div>
    )
  }
}

export default withStyles(styles)(NavBar);
