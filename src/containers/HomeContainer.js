import React from 'react';
import {withRouter} from 'react-router-dom';

const HomeContainer = () => {
  return (
    <div>
      <h1>HOME</h1>
      <iframe 
        title="home"
        src="https://www.youtube.com/embed/2S24-y0Ij3Y" 
        height="720" 
        width="1280" 
        frameBorder="0" 
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
        allowFullScreen>
      </iframe>
    </div>
  )
}

export default withRouter(HomeContainer);
