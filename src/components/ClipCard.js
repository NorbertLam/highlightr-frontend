import React from 'react';

import {connect} from 'react-redux';

import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';

import {selectClip} from '../actions/clipActions';

class ClipCard extends React.Component {

  handleClick = () => {
    this.props.handleOpen();
    this.props.selectClip(this.props.clipObj);
  }

  render() {
    return (
      <GridListTile onClick={this.handleClick}>
        <img src={this.props.clipObj.thumbnail_url} alt="this.props.clipObj.thumbnail_url"/> 
        <GridListTileBar title={this.props.clipObj.title}/>
      </GridListTile>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    selectClip: (clipObj) => dispatch(selectClip(clipObj))
  };
}

export default connect(null, mapDispatchToProps)(ClipCard);
