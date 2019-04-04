import React from 'react'

import {withRouter} from 'react-router-dom';

class VodContainer extends React.Component {

  render() {

    return (
      <div>
        <h1>VOD</h1>
        <iframe
          title={'idk'}
          src={`https://player.twitch.tv/?video=v${this.props.location.pathname.split('/')[3]}&autoplay=false`}
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

export default withRouter(VodContainer);
