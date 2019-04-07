
// User Action Creator


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
    .then(console.log)
}