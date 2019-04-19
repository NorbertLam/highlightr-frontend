import React from 'react';

import {connect} from 'react-redux';

class ClipContainer extends React.Component {

  render() {
    return (
      <div>
        <iframe
          title={this.props.selectedClip.title}
          src={this.props.selectedClip.embed_url}
          height="720"
          width="1280"
          frameBorder="0"
          scrolling="no"
          allowFullScreen={true}>
        </iframe>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    selectedClip: state.selectedClip
  };
}

export default connect(mapStateToProps)(ClipContainer);
