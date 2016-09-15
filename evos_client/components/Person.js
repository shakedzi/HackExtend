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
      <div className="person">
        <img onmouseover="bigImg(this)" onmouseout="normalImg(this)" src={this.state.person.profilePicture} alt={this.state.person.name} className="img-responsive"/>
      </div>
      );
  }
}


export default Person
