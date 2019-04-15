
// Clip Action Creator

export const loadClips = (clips) => ({ type: 'LOAD_CLIPS', payload: clips });
export const loadTopClips = (clips) => ({type: 'LOAD_TOP_CLIPS', payload: clips});
export const selectClip = (clipObj) => ({ type: 'SELECT_CLIP', payload: clipObj });

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

export const getTopClips = (period) => (dispatch) => {
  return fetch(`https://api.twitch.tv/kraken/clips/top?&period=${period}&limit=12`, {
    headers: {
      'content-type': 'application/json',
      'Accept': 'application/vnd.twitchtv.v5+json',
      'Client-ID': process.env.REACT_APP_CLIENT
    }
  })
    .then(resp => resp.json())
    .then(json => {
      dispatch(loadTopClips(json.clips))
    })
}
