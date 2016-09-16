import React, { Component } from 'react'
import { Router, Route, browserHistory, Link } from 'react-router'

class PlusEvent extends Component {
  constructor(props, context) {
    super(props, context)
    this.state = {
      plusSign: 'http://cdn.mysitemyway.com/etc-mysitemyway/icons/legacy-previews/icons/rounded-glossy-black-icons-alphanumeric/074184-rounded-glossy-black-icon-alphanumeric-plus-sign-simple.png'
    }
  }
  render() {
    return (
      <Link to='/addevent'>
        <div className="col-md-2 eventPlus">
          <img src={this.state.plusSign} className="img-responsive" />
        </div>
      </Link>
    );

  }
}

export default PlusEvent
