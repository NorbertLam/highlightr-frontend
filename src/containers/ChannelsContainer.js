import React from 'react';
import {withRouter} from 'react-router-dom';
import ChannelCard from '../components/ChannelCard'

import {connect} from 'react-redux'

import GridList from '@material-ui/core/GridList';

import {getStreamers} from '../actions/streamerActions'

class ChannelContainer extends React.Component {

  componentDidMount() {
    this.props.getStreamers();
  }
  
  render () {
    const {classes} = this.props;

    const streamersArr = Object.keys(this.props.streamers).map(display_name => {
      return <ChannelCard key={this.props.streamers[display_name].twitch_id} 
        streamerObj={this.props.streamers[display_name]} />
    })

    return (
      <div>
        <h1>CHANNELS</h1>
        <GridList container className="channel-container" >
          {streamersArr}
        </GridList>
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

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(ChannelContainer));
