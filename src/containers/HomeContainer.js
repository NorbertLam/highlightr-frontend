import React from 'react';
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
