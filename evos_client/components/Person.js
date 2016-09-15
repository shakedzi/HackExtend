import React, { Component, PropTypes } from 'react'

class Person extends Component {
  constructor(props, context) {
    super(props, context)
    this.state = {
      name: this.props.name,
      profilePicture: this.props.profilePicture

    }
  }
  render(){
    return(
      <div>
      <div className="person"></div>
      </div>
    );
  }
}


export default Person
