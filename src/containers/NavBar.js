import React from 'react';
import {NavLink} from 'react-router-dom';
import Toolbar from '@material-ui/core/Toolbar';

const NavBar = () => {
  return (
    <Toolbar>
      <NavLink className="nav-item" to="/">Home</NavLink>
      <NavLink className="nav-item" to="/channels">Channels</NavLink>
    </Toolbar>
  )
}

export default NavBar
