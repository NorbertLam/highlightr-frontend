import React from 'react';
import {withRouter} from 'react-router-dom'
import {connect} from 'react-redux'

import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';

import {selectStreamer} from '../actions/streamerActions'

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
  titleBar: {
    paddingLeft: '10%',
    paddingRight: '10%'
  },
});


const ChannelCard = (props) => {
  
  const {classes} = props;

  return (
    <div className={classes.root} onClick={() => props.history.push(`/channel/${props.streamerObj.login}`)} >
      {/* <img src={props.streamerObj.profile_image_url} alt={props.streamerObj.profile_image_url} /> */}
      <GridListTile key={props.streamerObj.profile_image_url}>
        <img src={props.streamerObj.profile_image_url} alt={props.streamerObj.profile_image_url} />
        <GridListTileBar
        className={classes.titleBar}
          title={props.streamerObj.display_name}
          // subtitle={<span>by: {props.streamerObj.login}</span>}
        />
      </GridListTile>
    </div>
  );
}

ChannelCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

const mapDispatchToProps = (dispatch) => {
  return {
    selectStreamer: (streamerObj) => dispatch(selectStreamer(streamerObj))
  }
}

export default connect(null, mapDispatchToProps)(withStyles(styles)(withRouter(ChannelCard)));

{/* <GridListTile key={props.streamerObj.profile_image_url}>
  <img src={props.streamerObj.profile_image_url} alt={props.streamerObj.profile_image_url} />
  <GridListTileBar
    title={props.streamerObj.profile_image_url}
    subtitle={<span>by: {props.streamerObj.login}</span>}
  />
</GridListTile> */}