import React, {Fragment} from 'react';

import {withRouter} from 'react-router-dom'

import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';

const VodCard = (props) => {

  const style = {
    width: '320px',
    height: '180px'
  }

  const thumbnail = props.vodObj.thumbnail_url.split('-').slice(0, 2).join('-');

  return (
    <Fragment onClick={() => props.history.push(`/channel/${props.vodObj.user_name}/${props.vodObj.id}`)} >
      <GridListTile key={props.vodObj.id} >
        <img 
          style={style} 
          src={thumbnail + '-320x180.jpg'} 
          alt={thumbnail} 
          onError={(e) =>{e.target.onerror = null; e.target.src="https://i.ytimg.com/vi/19s0vIeJthA/maxresdefault.jpg"}}
        />
        <GridListTileBar
          title={props.vodObj.title}
          // subtitle={<span>by: {props.streamerObj.login}</span>}
        />
      </GridListTile>
    </Fragment>
    // <div onClick={() => props.history.push(`/channel/${props.vodObj.user_name}/${props.vodObj.id}`)}>
    //   <img 
    //     style={style} 
    //     src={thumbnail + '-320x180.jpg'} 
    //     alt={thumbnail} 
    //     onError={(e) =>{e.target.onerror = null; e.target.src="https://i.ytimg.com/vi/19s0vIeJthA/maxresdefault.jpg"}}
    //   />
    // </div>
  )
}

export default withRouter(VodCard);
