import React from 'react'

import {connect} from 'react-redux'

class StreamerContainer extends React.Component {

  componentDidMount() {
    
  }

  render() {
    return (
      <div>
        <h1>Streamer</h1>
        
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    selectedStreamer: state.selectedStreamer
  }
}

export default connect(mapStateToProps)(StreamerContainer);
