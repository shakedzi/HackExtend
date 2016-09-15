import React, { Component } from 'react'
import SquareTable from './SquareTable'

class MapTable extends Component {
  constructor(props, context) {
    super(props, context)
  }
  render() {
    return (
      <div>
        <SquareTable />
      </div>
    );
  }
}

export default MapTable
