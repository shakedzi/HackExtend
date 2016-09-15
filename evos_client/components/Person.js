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
        <img src={this.state.person.profilePicture} title={this.state.person.name} className="img-responsive"/>
        {this.props.name}
      </span>
      );
  }
}


export default Person
