
// Vod Action Creator

export const loadVods = (vods) => ({type: 'LOAD_VODS', payload: vods});

// Vod Thunk Creator

export const getVods = (twitch_id) => (dispatch) => {
  return fetch(`https://api.twitch.tv/helix/videos?user_id=${twitch_id.toLowerCase()}`, {
    headers: {
      'Client-ID': process.env.REACT_APP_CLIENT
    }
  })
    .then(resp => resp.json())
    .then(json => dispatch(loadVods(json.data)));
}
