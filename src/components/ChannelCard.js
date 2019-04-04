import React from 'react';
import {withRouter} from 'react-router-dom'
import {connect} from 'react-redux'

import {selectStreamer} from '../actions/streamerActions'


const ChannelCard = (props) => {
  return (
    <div onClick={() => props.history.push(`/channel/${props.streamerObj.display_name}`)} >
      <img src={props.streamerObj.profile_image_url} alt={props.streamerObj.profile_image_url} />
    </div>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    selectStreamer: (streamerObj) => dispatch(selectStreamer(streamerObj))
  }
}

export default connect(null, mapDispatchToProps)(withRouter(ChannelCard));
