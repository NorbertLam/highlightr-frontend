import React, { Component } from 'react';
import {Route, Switch} from 'react-router-dom';
import NavBar from './containers/NavBar';
import ChannelsContainer from './containers/ChannelsContainer';
import HomeContainer from './containers/HomeContainer';
import StreamerContainer from './containers/StreamerContainer';
import VodContainer from './containers/VodContainer';
import SignupContainer from './containers/SignupContainer';
import LoginContainer from './containers/LoginContainer';
import './App.css';

import {connect} from 'react-redux'

class App extends Component {

  render() {
    return (
      <div className="App">
        <NavBar />
        <Switch>
          <Route path="/channel/:login/:vod" component={VodContainer} />
          <Route path="/channel/:login" component={StreamerContainer} />
          <Route path="/channels" component={ChannelsContainer} />
          <Route path="/signup" component={SignupContainer} />
          <Route path="/login" component={LoginContainer} />
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
