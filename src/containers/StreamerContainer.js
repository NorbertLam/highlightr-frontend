import React, { Fragment } from 'react';
import VodCardContainer from './VodCardContainer';
import ClipContainer from './ClipContainer';
import ClipCardsContainer from './ClipCardsContainer';

import {withRouter} from 'react-router-dom';

import {connect} from 'react-redux';

import {withStyles} from '@material-ui/core/styles';
import Dialog from '@material-ui/core/Dialog';
import Toolbar from '@material-ui/core/Toolbar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

import {getStream} from '../actions/streamerActions';
import {getClips, selectClip} from '../actions/clipActions';

const styles = theme => ({
  indicator: {
    backgroundColor: '#6441A1'
  },
  img: {
    maxWidth: '5%',
    madHeight: '5%'
  }
})

class StreamerContainer extends React.Component {

  state = {
    streamer: {},
    period: 'week',
    value: 0,
    open: false
  }

  componentDidMount() {
    const pathName = this.props.location.pathname.split('/');
    const streamerName = pathName[2];
    
    if(pathName.length > 3) {
      this.setState({value: 1})
    }

    fetch(`http://localhost:3000/api/v1/streamers/${streamerName}`)
      .then(resp => resp.json())
      .then(streamer => this.setState({streamer}, () => {
        this.props.getStream(this.state.streamer.twitch_id);
      }));
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.location.pathname != this.props.location.pathname) {
      const pathName = nextProps.location.pathname.split('/');
      const streamerName = pathName[2];
      
      if(pathName.length > 3) {
        this.setState({value: 1})
      }

      fetch(`http://localhost:3000/api/v1/streamers/${streamerName}`)
        .then(resp => resp.json())
        .then(streamer => this.setState({streamer}, () => {
          this.props.getStream(this.state.streamer.twitch_id);
        }));
    }
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

  handlePeriod = (name) => (event) => {
    this.setState({[name]: event.target.value}, () => {
      this.props.getClips(this.state.period);
    });
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
          <h1>{!!this.props.currentStream ? this.props.currentStream.title : null}</h1>
      </Fragment>
    )
  }

  render() {
    const {login, profile_image_url, display_name} = this.state.streamer;

    return (
      <div>
        <Toolbar>
          <img className={this.props.classes.img} src={profile_image_url} alt={profile_image_url} />
          <h2>{display_name}</h2>
          <Tabs classes={{indicator: this.props.classes.indicator}} onChange={this.handleChange} value={this.state.value}>
            <Tab label="Stream" onClick={() => this.props.history.push(`/channel/${login}`)} />
            <Tab label="VoDs" onClick={() => this.props.history.push(`/channel/${login}/vods`)} />
            <Tab label="Clips" />
          </Tabs>
        </Toolbar>
        {this.state.value === 0 && this.renderStream()}
        {this.state.value === 1 && <VodCardContainer />}
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
    getClips: (twitch_id, period) => dispatch(getClips(twitch_id, period)),
    selectClip: (clipObj) => dispatch(selectClip(clipObj))
  }
}

export default connect(mapStateToProps, maptDispatchToProps)(withStyles(styles)(withRouter(StreamerContainer)));
