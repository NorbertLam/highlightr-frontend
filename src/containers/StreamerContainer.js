import React from 'react';
import VodCardContainer from './VodCardContainer';
import ClipsContainer from './ClipCardsContainer';

import {connect} from 'react-redux';

import {getStream} from '../actions/streamerActions';
import {getClips} from '../actions/clipActions';

class StreamerContainer extends React.Component {

  state = {
    streamer: {}
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

  render() {
    
    return (
      <div>
        <h1 style={{overflowWrap: 'break-word'}}>{this.props.currentStream === undefined ? this.state.streamer.display_name : this.props.currentStream.title}</h1>
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
        <VodCardContainer twitch_id={this.state.streamer.twitch_id} />
        <ClipsContainer streamerObj={this.state.streamer} />
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
    getClips: (twitch_id) => dispatch(getClips(twitch_id))
  }
}

export default connect(mapStateToProps, maptDispatchToProps)(StreamerContainer);
