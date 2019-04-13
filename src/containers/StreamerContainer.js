import React, { Fragment } from 'react';
import VodCardContainer from './VodCardContainer';
import ClipContainer from './ClipContainer';
import ClipCardsContainer from './ClipCardsContainer';

import {connect} from 'react-redux';

import Dialog from '@material-ui/core/Dialog';
import Toolbar from '@material-ui/core/Toolbar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

import {getStream} from '../actions/streamerActions';
import {getClips, selectClip} from '../actions/clipActions';

class StreamerContainer extends React.Component {

  state = {
    streamer: {},
    value: 0,
    frameValue: false,
    vodValue: true,
    clipValue: true,
    open: false
  }

  componentDidMount() {
    const streamerName = this.props.location.pathname.split('/')[2];

    fetch(`http://localhost:3000/api/v1/streamers/${streamerName}`)
      .then(resp => resp.json())
      .then(streamer => this.setState({streamer}, () => {
        this.props.getStream(this.state.streamer.twitch_id);
        this.props.getClips(this.state.streamer.twitch_id);
      }));
  }

  handleOpen = () => {
    this.setState({open: true});
  }

  handleClose = () => {
    this.setState({open: false});
    this.props.selectClip({});
  }

  handleChange = (event, value) => {
    this.setState({value})
  }

  renderStream = () => {
    return (
      <Fragment>
        <iframe
            title={this.state.streamer.login}
            src={`https://player.twitch.tv/?channel=${this.props.location.pathname.split('/')[2]}&muted=true`}
            height="720"
            width="1280"
            frameBorder="0"
            scrolling="no"
            allowFullScreen={true}>
          </iframe>
          <iframe frameBorder="0"
            title="twitch-chat"
            id="chat_embed"
            src={`https://www.twitch.tv/embed/${this.props.location.pathname.split('/')[2]}/chat`}
            height="720"
            width="350">
          </iframe>
      </Fragment>
    )
  }

  render() {
    
    return (
      <div>
        <h1 style={{overflowWrap: 'break-word'}}>{this.props.currentStream === undefined ? this.state.streamer.display_name : this.props.currentStream.title}</h1>
        <Toolbar>
          <Tabs onChange={this.handleChange} value={this.state.value}>
            <Tab label="Stream"/>
            <Tab label="VoDs" />
            <Tab label="Clips" />
          </Tabs>
        </Toolbar>
        {this.state.value === 0 && this.renderStream()}
        {this.state.value === 1 && <VodCardContainer twitch_id={this.state.streamer.twitch_id} />}
        {this.state.value === 2 && <ClipCardsContainer streamerObj={this.state.streamer} handleOpen={this.handleOpen} />}
        <Dialog
          fullWidth={true}
          open={this.state.open}
          onClose={this.handleClose}
          maxWidth="lg"
        >
          <ClipContainer />
        </Dialog>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    streamers: state.streamerInfo.streamers,
    currentStream: state.currentStream
  }
}

const maptDispatchToProps = (dispatch) => {
  return {
    getStream: (user_id) => dispatch(getStream(user_id)),
    getClips: (twitch_id) => dispatch(getClips(twitch_id)),
    selectClip: (clipObj) => dispatch(selectClip(clipObj))
  }
}

export default connect(mapStateToProps, maptDispatchToProps)(StreamerContainer);
