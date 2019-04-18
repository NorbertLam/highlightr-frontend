import React from 'react';

import {withRouter} from 'react-router-dom';

import {connect} from 'react-redux';

import VodCard from '../components/VodCard'

import GridList from '@material-ui/core/GridList';

import {getVods} from '../actions/vodActions';

class VodCardContainer extends React.Component {

  state = {}

  componentDidMount() {
    const pathName = this.props.location.pathname.split('/');
    const streamerName = pathName[2];
    
    fetch(`http://localhost:3000/api/v1/streamers/${streamerName}`)
      .then(resp => resp.json())
      .then(json => {
        this.props.getVods(json.twitch_id);
      })
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.location.pathname !== this.props.location.pathname) {
      const pathName = nextProps.location.pathname.split('/');
      const streamerName = pathName[2];
    
      fetch(`http://localhost:3000/api/v1/streamers/${streamerName}`)
        .then(resp => resp.json())
        .then(json => {
          this.props.getVods(json.twitch_id);
          this.setState()
        })
    }
  }

  render() {
    const vodsArr = this.props.vods.map(vod => <VodCard key={vod.id} vodObj={vod} />)

    return (
      <div>
        <GridList style={{ alignItems: 'center', justifyContent: 'center'}} >
          {vodsArr}
        </GridList>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({vods: state.vods})

export default connect(mapStateToProps,{getVods})(withRouter(VodCardContainer));
