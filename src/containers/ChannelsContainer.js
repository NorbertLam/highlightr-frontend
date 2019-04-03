import React from 'react';
import {withRouter} from 'react-router-dom';
import ChannelCard from '../components/ChannelCard'

import {connect} from 'react-redux'

import {getStreamers} from '../actions/streamerActions'

import Grid from '@material-ui/core/Grid';


class ChannelContainer extends React.Component {

  componentDidMount() {
    this.props.getStreamers();
  }
  
  render () {
    const streamersArr = this.props.streamers.map(streamer => {
      return <ChannelCard key={streamer.id} streamerObj={streamer} />
    })

    return (
      <div>
        <h1>CHANNELS</h1>
        <Grid container className="channel-container" >
          {streamersArr}
        </Grid>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {streamers: state.streamerInfo.streamers}
}

const mapDispatchToProps = (dispatch) => ({
  getStreamers: () => dispatch(getStreamers())
})

export default connect(mapStateToProps, mapDispatchToProps)(ChannelContainer);
