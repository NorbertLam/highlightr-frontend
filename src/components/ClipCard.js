import React from 'react';

import {connect} from 'react-redux';

import {withStyles} from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

import {selectClip} from '../actions/clipActions';

const styles = theme => ({
  div: {
    backgroundColor: '#f8ceec',
    backgroundImage: 'linear-gradient(315deg, #647DEE 0%, #7F53AC 74%)'
  },
  iframe: {
    marginTop: '5%',
    paddingBottom: '5%',
  },
  card: {
    maxWidth: 345,
  },
  media: {
    objectFit: 'cover',
  },
})

class ClipCard extends React.Component {

  handleClick = () => {
    this.props.handleOpen();
    this.props.selectClip(this.props.clipObj);
  }

  render() {
    const {classes, clipObj} = this.props

    return (
      <Card className={classes.card}>
        <CardActionArea>
          <CardMedia
            component="img"
            alt="Contemplative Reptile"
            className={classes.media}
            onClick={this.handleClick}
            image={clipObj.thumbnail_url || clipObj.thumbnails.medium}
            title="Contemplative Reptile"
          />
          <CardContent>
            <Typography noWrap='false' component="h5">
              {clipObj.title}
            </Typography>
            <Typography style={{display: 'inherit', bottom: 0, right: 0}} noWrap='false' component="h5">
              {clipObj.views || clipObj.view_count} views
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small">{clipObj.broadcaster_name || clipObj.broadcaster.display_name}</Button>
        </CardActions>
      </Card>
    )
  }
}

ClipCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

const mapDispatchToProps = (dispatch) => {
  return {
    selectClip: (clipObj) => dispatch(selectClip(clipObj))
  };
}

export default connect(null, mapDispatchToProps)(withStyles(styles)(ClipCard));
