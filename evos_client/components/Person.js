import React, { Component, PropTypes } from 'react'

class Person extends Component {
  constructor(props, context) {
    super(props, context)
    this.state = {
        person: {name: "roy",profilePicture: "http://static4.bigstockphoto.com/thumbs/0/3/9/small2/93074543.jpg"}
    }
  }
  render(){
    return(
      <span className="person">
        <img src={this.props.profilePicture} title={this.props.name} className="img-responsive"/>
        <span className="person-name">{this.props.name}</span>
      </span>
      );
  }
}


export default Person
