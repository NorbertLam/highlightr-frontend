import React from 'react';

import VodCard from '../components/VodCard'

import Grid from '@material-ui/core/Grid';

class VodContainer extends React.Component {

  state = {
    vods: []
  }

  componentWillReceiveProps(nextProps) {
    fetch(`https://api.twitch.tv/helix/videos?user_id=${nextProps.twitch_id}`, {
      headers: {
        'Client-ID': ''
      }
    })
      .then(resp => resp.json())
      .then(json => this.setState({vods: json.data}));
  }

  render() {
    const vodsArr = this.state.vods.map(vod => <VodCard vodObj={vod} />)

    return (
      <div>
        <h1>Vods</h1>
        <Grid container>
          {vodsArr}
        </Grid>
      </div>
    )
  }
}

export default VodContainer;
