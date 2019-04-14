import React, { Fragment } from 'react';

class Featured extends React.Component {

  render() {
    return (
      <Fragment>
        <iframe 
          title="home"
          src="https://www.youtube.com/embed/2S24-y0Ij3Y" 
          height="720" 
          width="1280" 
          frameBorder="0" 
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
          allowFullScreen>
      </iframe>
      </Fragment>
    )
  }
}

export default Featured;
