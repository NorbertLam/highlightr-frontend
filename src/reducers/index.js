
const initialState = {
  user: {},
  selectedStreamer: {},
  streamerInfo: {
    streamers: {}
  },
  currentStream: {}
}

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case ('LOAD_STREAMERS'): {
      const streamers = {};

      action.payload.forEach(streamer => {
        streamers[streamer.display_name] = streamer;
      })
      
      return {...state, streamerInfo:{ streamers: streamers}};
    }
    case ('SELECT_STREAMER'): {
      return {...state, selectedStreamer: action.payload};
    }
    case ('LOAD_STREAM'): {
      return {...state, currentStream: action.payload};
    }
    default:
      return state;
  }
}

export default reducer;
