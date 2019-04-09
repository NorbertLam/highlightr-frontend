import React from 'react';

import {withRouter} from 'react-router-dom'

const VodCard = (props) => {

  const style = {
    width: '320px',
    height: '180px'
  }

  const thumbnail = props.vodObj.thumbnail_url.split('-').slice(0, 2).join('-');
  console.log(props.vodObj);

  return (
    <div onClick={() => props.history.push(`/channel/${props.vodObj.user_name}/${props.vodObj.id}`)}>
      <img 
        style={style} 
        src={thumbnail + '-320x180.jpg'} 
        alt={thumbnail} 
        onError={(e) =>{e.target.onerror = null; e.target.src="https://i.ytimg.com/vi/19s0vIeJthA/maxresdefault.jpg"}}
      />
    </div>
  )
}

export default withRouter(VodCard);
