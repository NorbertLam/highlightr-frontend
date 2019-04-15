import React from 'react';

import {connect} from 'react-redux';

import ClipCard from '../components/ClipCard';

import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

import {getTopClips} from '../actions/clipActions';

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

class Featured extends React.Component {

  componentDidMount() {
    this.props.getTopClips();
  }

  render() {    
    const { classes, topClips} = this.props;
    const clipsArr = topClips.map(clip => <ClipCard key={clip.id} clipObj={clip} handleOpen={this.props.handleOpen} />)

    return (
      <div>
        <div className={classes.div}>
          <iframe
            className={classes.iframe}
            title={'featured'}
            src={`https://player.twitch.tv/?channel=${'imaqtpie'}&muted=true&autoplay=false`}
            height="475"
            width="960"
            frameBorder="0"
            scrolling="no"
            allowFullScreen={true}>
          </iframe>
        </div>
        <Grid style={{ alignItems: 'center', justifyContent: 'center'}} container>
          {clipsArr}
        </Grid>
      </div>
    )
  }
}

Featured.propTypes = {
  classes: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => {
  return {topClips: state.topClips}
}

export default connect(mapStateToProps, {getTopClips})(withStyles(styles)(Featured));
