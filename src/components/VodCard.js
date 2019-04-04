import React from 'react';

import {withRouter} from 'react-router-dom'

const VodCard = (props) => {

  const thumbnail = props.vodObj.thumbnail_url.split('-').slice(0, 2).join('-')

  return (
    <div onClick={() => props.history.push(`/channel/${props.vodObj.user_name}/${props.vodObj.id}`)}>
      <img src={thumbnail + '-320x180.jpg'} alt={thumbnail}/>
    </div>
  )
}

export default withRouter(VodCard);
