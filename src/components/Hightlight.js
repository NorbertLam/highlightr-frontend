import React from 'react'

import Button from '@material-ui/core/Button';

class Highlight extends React.Component {
  
  render() {
    return (
      <div style={{marginTop: "10px"}}>
        <Button 
          variant="contained" 
          color="primary" 
          onClick={() => this.props.setTime(this.props.highlight.start)}>
            {this.props.highlight.start}
        </Button>
      </div>
    )
  }
}

export default Highlight;