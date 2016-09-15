import React, { Component } from 'react'

class Chair extends Component {
  constructor(props, context) {
    super(props, context)
    this.state = {
      chair: {name: "roy",photo: "http://static.bigstockphoto.com/images/homepage/2016_popular_photo_categories.jpg"}
    }
  }
  render() {
    return (
      <div className="chair">
        <img src={this.state.chair.photo} alt={this.state.chair.name} />
      </div>
    );

  }
}

export default Chair
