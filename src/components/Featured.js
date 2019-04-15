import React from 'react';

import {connect} from 'react-redux';

import ClipCard from '../components/ClipCard';

import {withStyles} from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import Select from '@material-ui/core/Select';
import Dialog from '@material-ui/core/Dialog';

import {getTopClips, selectClip} from '../actions/clipActions';
import ClipContainer from '../containers/ClipContainer';

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

  state = {
    open: false,
    period: 'week'
  }

  componentDidMount() {
    this.props.getTopClips(this.state.period);
  }

  handleOpen = () => {
    this.setState({open: true});
  }

  handleClose = () => {
    this.setState({open: false});
    this.props.selectClip({});
  }

  handleChange = (name) => (event) => {
    // console.log('change', name, event.target.value)
    this.setState({[name]: event.target.value}, () => {
      // console.log(this.state)
      this.props.getTopClips(this.state.period);
    });
  }

  render() {    
    const { classes, topClips} = this.props;
    const clipsArr = topClips.map(clip => <ClipCard key={clip.id} clipObj={clip} handleOpen={this.handleOpen} />)

    return (
      <div>
        <div className={classes.div}>
          <iframe
            className={classes.iframe}
            title={'featured'}
            src={`https://player.twitch.tv/?channel=${'twitchpresents'}&muted=true&autoplay=false`}
            height="475"
            width="960"
            frameBorder="0"
            scrolling="no"
            allowFullScreen={true}>
          </iframe>
        </div>
        <Dialog
          fullWidth={true}
          open={this.state.open}
          onClose={this.handleClose}
          maxWidth="lg"
        >
          <ClipContainer />
        </Dialog>
        <Select
          value={this.state.period}
          onChange={this.handleChange('period')}
          inputProps={{
            name: 'period',
          }}
        >
          <option value={'all'}>All</option>
          <option value={'day'}>Day</option>
          <option value={'week'}>Week</option>
          <option value={'month'}>Month</option>
        </Select>
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

export default connect(mapStateToProps, {getTopClips, selectClip})(withStyles(styles)(Featured));
