
// User Action Creator

export const getUser = (userObj) => ({type: 'GET_USER', payload: userObj});
export const changeIndicator = () => ({type: 'CHANGE_INDICATOR'});


// User Thunk Creator

export const createUser = (userObj) => (dispatch) => {
  return fetch('http://localhost:3000/api/v1/signup', {
    method: 'POST',
    headers: {
      "Content-Type": "application/json" 
    },
    body: JSON.stringify(userObj)
  })
    .then(resp => resp.json)
    .then(console.log)
}

export const loginUser = (userObj) => (dispatch) => {
  return fetch('http://localhost:3000/api/v1/login', {
    method: 'POST',
    headers: {
      "content-type": "application/json"
    },
    body: JSON.stringify(userObj)
  })
    .then(resp => resp.json())
    .then(json => {
      dispatch(getUser(json.user));
      localStorage.setItem('token', json.jwt);
    })
}

export const getCurrUser = (token) => (dispatch) => {
  return fetch('http://localhost:3000/api/v1/current_user', {
    method: 'GET',
    headers: {
      'content-type': 'application/json',
      'accepts': "application/json",
      'Authorization': `${token}`
    }
  })
    .then(resp => resp.json())
    .then(json => {
      dispatch(getUser(json.user));
    })
}
