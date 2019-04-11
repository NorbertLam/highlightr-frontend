import React from 'react';

import {connect} from 'react-redux';

import {selectClip} from '../actions/clipActions';

class ClipCard extends React.Component {

  handleClick = () => {
    console.log('clicked')
    this.props.handleOpen();
    this.props.selectClip(this.props.clipObj);
  }

  render() {
    return (
      <div onClick={this.handleClick} >
        <img src={this.props.clipObj.thumbnail_url} alt="this.props.clipObj.thumbnail_url"/>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    selectClip: (clipObj) => dispatch(selectClip(clipObj))
  };
}

export default connect(null, mapDispatchToProps)(ClipCard);
