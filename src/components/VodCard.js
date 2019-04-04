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

// {
//   "id": "405735301",
//   "user_id": "24991333",
//   "user_name": "imaqtpie",
//   "title": "new patch new imaqtpie, today we will finally begin our match on rank one and reclaim the spot that rightfully belongs to the one and only g",
//   "description": "",
//   "created_at": "2019-04-03T22:41:08Z",
//   "published_at": "2019-04-03T22:41:08Z",
//   "url": "https://www.twitch.tv/videos/405735301",
//   "thumbnail_url": "https://static-cdn.jtvnw.net/s3_vods/ae2c8608eefb8a1d26f1_imaqtpie_33523382256_1163871464/thumb/thumb0-%{width}x%{height}.jpg",
//   "viewable": "public",
//   "view_count": 1427,
//   "language": "en",
//   "type": "archive",
//   "duration": "59s"
// },