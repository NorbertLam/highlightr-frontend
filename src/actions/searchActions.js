
// Search Action Creator

export const loadSearch = (results) => ({ type: 'LOAD_SEARCH', payload: results });

//  Search Thunk Creator

export const getSearch = (channel) => (dispatch) => {
  return fetch(`https://api.twitch.tv/kraken/search/channels?query=${channel}&limit=2`, {
    headers: {
      'content-type': 'application/json',
      'Client-ID': process.env.REACT_APP_CLIENT
    }
  })
    .then(resp => resp.json())
    .then(json => dispatch(loadSearch(json.channels)));
}
