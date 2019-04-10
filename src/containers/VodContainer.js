import React from 'react'

import {withRouter} from 'react-router-dom';

import Hightlight from '../components/Hightlight'

import Grid from '@material-ui/core/Grid';

class VodContainer extends React.Component {
  
  state = {
    startTime: '00:00:00',
    autoplay: false,
    highlights: []
  }

  componentDidMount() {
    fetch(`http://localhost:3000/api/v1/vod/${this.getVodId()}`)
      .then(resp => resp.json())
      .then(vod => this.setState({highlights: vod.highlights}))
  }

  getVodId = () => {
    return this.props.location.pathname.split('/')[3];
  }

  setTime = (startTime) => {
    this.setState({
      startTime,
      autoplay: true
    })
  }

  render() {
    let highlightsArr = []
    const time = this.state.startTime.split(':');
    
    if (this.state.highlights) {
      highlightsArr = this.state.highlights.map(highlight => <Hightlight highlight={highlight} setTime={this.setTime} />)
    }

    return (
      <div>
        <h1>VOD</h1>
        <iframe
          title={'idk'}
          src={`https://player.twitch.tv/?video=v${this.getVodId()}&autoplay=${this.state.autoplay}&time=${time[0]}h${time[1]}m${time[2]}s`}
          height="720"
          width="1280"
          frameBorder="0"
          scrolling="no"
          allowFullScreen={true}>
        </iframe>
        <div>
          <Grid>
            {highlightsArr}
          </Grid>
        </div>
      </div>
    )
  }
}

export default withRouter(VodContainer);
