import React, { Component, PropTypes } from 'react'

class ProgressBar extends Component {
  constructor(props, context) {
    super(props, context)
    this.state = {
      now: 60
    }
  }
  render(){
    return(
    <ProgressBar active now={this.state.now} label={`${this.state.now}%`} />
    );
  }
}


export default ProgressBar
