import React, { Component } from 'react';
import {Route, Switch} from 'react-router-dom';
import NavBar from './containers/NavBar';
import ChannelsContainer from './containers/ChannelsContainer';
import HomeContainer from './containers/HomeContainer';
import StreamerContainer from './containers/StreamerContainer';
import VodCardContainer from './containers/VodCardContainer';
import VodContainer from './containers/VodContainer';
import SignupContainer from './containers/SignupContainer';
import LoginContainer from './containers/LoginContainer';
import ProfileContainer from './containers/ProfileContainer'
import './App.css';

import {connect} from 'react-redux';

import {getCurrUser} from './actions/userActions';

class App extends Component {

  componentDidMount() {
    const token = localStorage.getItem('token');

    if (token) {
      this.props.getCurrUser(token);
    } else {
      console.log('not logged in');
    }
  }

  render() {
    return (
      <div className="App">
        <NavBar />
        <Switch>
          <Route path="/channel/:login/vods" component={StreamerContainer} />
          <Route path="/channel/:login/:vod" component={VodContainer} />
          <Route path="/channel/:login" component={StreamerContainer} />
          <Route path="/channels" component={ChannelsContainer} />
          <Route path="/signup" component={SignupContainer} />
          <Route path="/login" component={LoginContainer} />
          <Route path="/profile" component={ProfileContainer} />
          <Route path="/" component={HomeContainer} />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    selectedStreamer: state.selectedStreamer
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getCurrUser: (token) => dispatch(getCurrUser(token))    
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
