import React from 'react';
import {NavLink} from 'react-router-dom';
import Toolbar from '@material-ui/core/Toolbar';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
  import Grid from '@material-ui/core/Grid';

const NavBar = () => {
  return (
    <AppBar position="sticky">
      <Toolbar style={{backgroundColor: '#6441A1'}}>
        <Tabs textColor="white">
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
  )
}

export default NavBar
