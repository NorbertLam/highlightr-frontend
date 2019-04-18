
// Streamer Action Creator

export const loadStreamers = (streamers) => ({ type: 'LOAD_STREAMERS', payload: streamers });
export const selectStreamer = (streamer) => ({ type: 'SELECT_STREAMER', payload: streamer });
export const loadStream = (stream) => ({ type: 'LOAD_STREAM', payload: stream });

// Streamer Thunk Creator

export const getStreamers = () => (dispatch) => {
  return fetch('http://localhost:3000/api/v1/streamers')
    .then(resp => resp.json())
    .then(json => dispatch(loadStreamers(json)));
}

export const getStream = (user_id) => {
  return dispatch => {
    return fetch(`https://api.twitch.tv/helix/streams?user_id=${user_id}`, {
      headers: {
        'Client-ID': process.env.REACT_APP_CLIENT
      }
    })
      .then(resp => resp.json())
      .then(json => dispatch(loadStream(json.data[0])));
  }
}

export const getStreamer = (streamerName) => (dispatch) => {
  return fetch(`http://localhost:3000/api/v1/streamers/${streamerName}`)
      .then(resp => resp.json())
      .then(streamer => this.setState({streamer}, () => {
        this.props.getStream(this.state.streamer.twitch_id);
      }));
}