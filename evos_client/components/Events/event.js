import React, { Component } from 'react'
import ProgressBar from '../ProgressBar'
import { Router, Route, browserHistory, Link } from 'react-router'

class Event extends Component {
  constructor(props, context) {
    super(props, context)
    this.state = {
      eventTitle: 'Roy`s Wedding',
      eventPhoto: 'http://sazan.me/wp-content/uploads/2015/07/26.jpg'
    }
  }
  render() {
    return (
      <Link to='/main'>
        <div className="col-md-2 event">
          <h2 className="eventTitle">{this.state.eventTitle}</h2>
          <img src={this.state.eventPhoto} className="img-responsive" />
          <ProgressBar />
        </div>
      </Link>
    );

  }
}

export default Event
