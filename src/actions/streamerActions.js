
// Streamer Action Creator

export const loadStreamers = (streamers) => ({ type: 'LOAD_STREAMERS', payload: streamers });
export const selectStreamer = (streamer) => ({ type: 'SELECT_STREAMER', payload: streamer })

// Streamer Thunk Creator

export const getStreamers = () => (dispatch) => {
  return fetch('http://localhost:3000/api/v1/streamers')
    .then(resp => resp.json())
    .then(json => dispatch(loadStreamers(json)))
}
