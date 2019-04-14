import React, { Fragment } from 'react';
import {withRouter} from 'react-router-dom';

import Featured from '../components/Featured';

const HomeContainer = () => {
  return (
    <div>
      <Featured />
    </div>
  )
}

export default withRouter(HomeContainer);

{/* <h1>HOME</h1>
<iframe 
  title="home"
  src="https://www.youtube.com/embed/2S24-y0Ij3Y" 
  height="720" 
  width="1280" 
  frameBorder="0" 
  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
  allowFullScreen>
</iframe> */}
