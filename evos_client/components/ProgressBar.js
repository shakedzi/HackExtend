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
      <div className="progress">
        <div className="progress-bar" style={{ width: `${this.state.now}%` }}>
        {this.state.now}%
        </div>
      </div>
    );
  }
}


export default ProgressBar
