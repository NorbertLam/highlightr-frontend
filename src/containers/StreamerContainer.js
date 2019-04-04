import React from 'react'
import VodContainer from './VodContainer'

import {connect} from 'react-redux'

class StreamerContainer extends React.Component {

  state = {
    streamer: {}
  }

  componentDidMount() {
    const streamerName = this.props.location.pathname.split('/')[2];

    fetch(`http://localhost:3000/api/v1/streamers/${streamerName}`)
      .then(resp => resp.json())
      .then(streamer => this.setState({streamer}));
  }

  render() {
    
    return (
      <div>
        <h1>{this.state.streamer.display_name}</h1>
        <iframe
          src={`https://player.twitch.tv/?channel=${this.props.location.pathname.split('/')[2]}&muted=true`}
          height="720"
          width="1280"
          frameBorder="0"
          scrolling="no"
          allowFullScreen={true}>
        </iframe>
        <VodContainer twitch_id={this.state.streamer.twitch_id}/>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    streamers: state.streamerInfo.streamers
  }
}

export default connect(mapStateToProps)(StreamerContainer);
