import React, {Fragment} from 'react';

import {withRouter} from 'react-router-dom'

import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';

const VodCard = (props) => {

  const styles = theme => ({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-around',
      overflow: 'hidden',
      backgroundColor: theme.palette.background.paper,
    },
    gridList: {
      width: 500,
      height: 450,
    },
    icon: {
      color: 'rgba(255, 255, 255, 0.54)',
    },
  });

  const thumbnail = props.vodObj.thumbnail_url.split('-').slice(0, 2).join('-');

  return (
    <Fragment  >
      <GridListTile key={props.vodObj.id} onClick={() => props.history.push(`/channel/${props.vodObj.user_name}/${props.vodObj.id}`)}>
        <img 
          // style={style} 
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
  )
}

export default withRouter(VodCard);
