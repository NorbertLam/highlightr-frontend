import React, { Component } from 'react';
import {Route, Switch} from 'react-router-dom';
import NavBar from './containers/NavBar';
import ChannelsContainer from './containers/ChannelsContainer';
import HomeContainer from './containers/HomeContainer';
import './App.css';

import {connect} from 'react-redux'

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <Switch>
          <Route path="/channels" component={ChannelsContainer} />
          <Route path="/" component={HomeContainer} />
        </Switch>
      </div>
    );
  }
}

const mapPropstoState = (state) => {
  return {
    selectedStreamer: state.selectedStreamer
  }
}

export default connect(mapPropstoState)(App);
