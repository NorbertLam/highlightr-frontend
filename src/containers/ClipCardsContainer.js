import React from 'react';

import {connect} from 'react-redux';

import GridList from '@material-ui/core/GridList';

import ClipCard from '../components/ClipCard';

class ClipsContainer extends React.Component {

  render() {
    const clipsArr = this.props.clips.map(clip => <ClipCard key={clip.id} clipObj={clip} handleOpen={this.props.handleOpen} />)

    return (
      <div>
        <GridList container alignItems="center" justify="center">
          {clipsArr}
        </GridList>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {clips: state.clips}
}

export default connect(mapStateToProps)(ClipsContainer);
