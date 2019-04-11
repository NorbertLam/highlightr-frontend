import React from 'react';

class ClipCard extends React.Component {

  render() {
    return (
      <div>
        <img src={this.props.clipObj.thumbnail_url} alt="this.props.clipObj.thumbnail_url"/>
      </div>
    )
  }
}

export default ClipCard;
