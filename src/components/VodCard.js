import React from 'react';

const VodCard = (props) => {

  const thumbnail = props.vodObj.thumbnail_url.split('-').slice(0, 2).join('-')

  return (
    <div>
      <img src={thumbnail + '-320x180.jpg'} />
    </div>
  )
}

export default VodCard;
