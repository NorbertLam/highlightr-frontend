import React from 'react';

import {withRouter} from 'react-router-dom';

import {connect} from 'react-redux';

class Profile extends React.Component {

  componentDidMount() {
    if (Object.keys(this.props.user).length === 0) {
      this.props.history.push('/');
    } 
  }

  render() {
    return (
      <div>
        <h1>Profile</h1>
        <h2>{this.props.user.username}</h2>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.user
  }
}

export default connect(mapStateToProps)(withRouter(Profile));
