
// Clip Action Creator

export const loadClips = (clips) => ({ type: 'LOAD_CLIPS', payload: clips });

// Clip Action Thunk Creator

export const getClips = (streamerID) => (dispatch) => {
  return fetch(`https://api.twitch.tv/helix/clips?broadcaster_id=${streamerID}&first=12`, {
    headers: {
      'content-type': 'application/json',
      'Client-ID': process.env.REACT_APP_CLIENT
    }
  })
    .then(resp => resp.json())
    .then(json => {
      dispatch(loadClips(json.data))
    })
}
