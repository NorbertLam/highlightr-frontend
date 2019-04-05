
const initialState = {
  user: {},
  selectedStreamer: {},
  streamerInfo: {
    streamers: {}
  }
}

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case ('LOAD_STREAMERS'): {
      const streamers = {}

      action.payload.forEach(streamer => {
        streamers[streamer.display_name] = streamer;
      })
      
      return {...state, streamerInfo:{ streamers: streamers}}
    }
    case ('SELECT_STREAMER'): {
      return {...state, selectedStreamer: action.payload}
    }
    default:
      return state
  }
}

export default reducer;
