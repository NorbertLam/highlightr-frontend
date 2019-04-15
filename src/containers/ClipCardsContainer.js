import React from 'react';

import {connect} from 'react-redux';

import {withStyles} from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import Select from '@material-ui/core/Select';

import ClipCard from '../components/ClipCard';

import {getClips} from '../actions/clipActions';

const styles = theme => ({
  select: {
    marginLeft: '10px',
    marginTop: '10px',
    float: 'left',
  },
})

class ClipsContainer extends React.Component {

  state = {
    period: 'week'
  }

  componentDidMount() {
    this.props.getClips(this.props.streamerObj.login, this.state.period);
  }

  handleChange = (name) => (event) => {
    this.setState({[name]: event.target.value}, () => {
      this.props.getClips(this.props.streamerObj.login, this.state.period);
    });
  }

  render() {
    const {classes} = this.props
    const clipsArr = this.props.clips.map(clip => <ClipCard key={clip.id} clipObj={clip} handleOpen={this.props.handleOpen} />)

    return (
      <div>
        <Select
          className={classes.select}
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
        <GridList container='true' alignItems="center" justify="center">
          {clipsArr}
        </GridList>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {clips: state.clips}
}

export default connect(mapStateToProps, {getClips})(withStyles(styles)(ClipsContainer));
