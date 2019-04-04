import React from 'react';

import VodCard from '../components/VodCard'

import Grid from '@material-ui/core/Grid';

class VodCardContainer extends React.Component {

  state = {
    vods: []
  }

  componentWillReceiveProps(nextProps) {
    console.log(process.env)

    fetch(`https://api.twitch.tv/helix/videos?user_id=${nextProps.twitch_id.toLowerCase()}`, {
      headers: {
        'Client-ID': process.env.REACT_APP_CLIENT
      }
    })
      .then(resp => resp.json())
      .then(json => this.setState({vods: json.data}));
  }

  render() {
    const vodsArr = this.state.vods.map(vod => <VodCard key={vod.id} vodObj={vod} />)

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

export default VodCardContainer;
