import React, { Component } from 'react'
import Event from './Event'
import PlusEvent from './PlusEvent'

class MapEvents extends Component {
  constructor(props, context) {
    super(props, context)
  }
  render() {
    return (
      <div>
        <div className="row">
          <Event />
          <Event />
          <Event />
          <Event />
          <PlusEvent />
        </div>
      </div>
    );
  }
}

export default MapEvents
