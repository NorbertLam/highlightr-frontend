
const initialState = {
  user: {},
  selectedStreamer: {},
  streamerInfo: {
    streamers: []
  }
}

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case ('LOAD_STREAMERS'): {
      // console.log(action.payload)
      return {...state, streamerInfo:{ streamers: action.payload }}
    }
    case ('SELECT_STREAMER'): {
      return {...state, selectedStreamer: action.payload}
    }
    default:
      return state
  }
}

export default reducer;
