import React from 'react';

import {connect} from 'react-redux';

import Grid from '@material-ui/core/Grid';

import ClipCard from '../components/ClipCard';

import {getClips} from '../actions/clipActions';

class ClipsContainer extends React.Component {

  render() {
    const clipsArr = this.props.clips.map(clip => <ClipCard clipObj={clip} handleOpen={this.props.handleOpen} />)

    return (
      <div>
        <h1>{this.props.streamerObj.login} Clips</h1>
        <Grid container alignItems="center" justify="center">
          {clipsArr}
        </Grid>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {clips: state.clips}
}

export default connect(mapStateToProps)(ClipsContainer);
