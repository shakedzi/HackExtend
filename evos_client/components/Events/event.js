import React, { Component } from 'react'
import ProgressBar from '../ProgressBar'
import { Router, Route, browserHistory, Link } from 'react-router'

class Event extends Component {
  constructor(props, context) {
    super(props, context)
  }
  render() {
    return (
      <Link to='/main'>
        <div className="col-md-2 event">
          <h2 className="eventTitle">{this.props.eventTitle}</h2>
          <img src={this.props.eventPhoto} className="img-responsive" />
          <ProgressBar />
        </div>
      </Link>
    );

  }
}

export default Event
