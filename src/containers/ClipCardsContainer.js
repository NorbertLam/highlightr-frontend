import React from 'react';

import {connect} from 'react-redux';

import Grid from '@material-ui/core/Grid';

import ClipCard from '../components/ClipCard';

class ClipsContainer extends React.Component {

  render() {
    const clipsArr = this.props.clips.map(clip => <ClipCard key={clip.id} clipObj={clip} handleOpen={this.props.handleOpen} />)

    return (
      <div>
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
