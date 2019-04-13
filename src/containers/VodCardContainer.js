import React from 'react';

import {connect} from 'react-redux';

import VodCard from '../components/VodCard'

import Grid from '@material-ui/core/Grid';

import {getVods} from '../actions/vodActions';

class VodCardContainer extends React.Component {

  componentDidMount() {
    this.props.getVods(this.props.twitch_id);
  }

  render() {
    const vodsArr = this.props.vods.map(vod => <VodCard key={vod.id} vodObj={vod} />)

    return (
      <div>
        <h1>Vods</h1>
        <Grid container alignItems="center" justify="center">
          {vodsArr}
        </Grid>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({vods: state.vods})

export default connect(mapStateToProps,{getVods})(VodCardContainer);
