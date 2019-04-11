
const initialState = {
  user: {},
  selectedStreamer: {},
  streamerInfo: {
    streamers: {}
  },
  currentStream: {},
  selectedClip: {},
  clips: [],
  results: []
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
    case ('GET_USER'): {
      return {...state, user: action.payload};
    }
    case ('CLEAR_USER'): {
      return {...state, user: {}}
    }
    case ('LOAD_CLIPS'): {
      return {...state, clips: action.payload};
    }
    case ('SELECT_CLIP'): {
      return {...state, selectedClip: action.payload};
    }
    case ('LOAD_SEARCH'): {
      return {...state, results: action.payload};
    }
    default:
      return state;
  }
}

export default reducer;
