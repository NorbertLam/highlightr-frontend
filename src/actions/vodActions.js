
// Vod Action Creator

// Vod Thunk Creator

export const getVod = (twitchVod_id) => (dispatch) => {
  return fetch(`http://localhost:3000/api/v1/vod/${twitchVod_id}`)
    .then(resp => resp.json())
    .then(console.log)
}
