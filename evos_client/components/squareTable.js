import React, { Component } from 'react'
import Logic from '../logic/helper'
import Chair from './chair'
class SquareTable extends Component {
  constructor(props, context) {
    super(props, context)
    this.state = {
      guestes: [{name: "roy",photo: "http://static.bigstockphoto.com/images/homepage/2016_popular_photo_categories.jpg"},
        {name: "israel",photo: "http://static.bigstockphoto.com/images/homepage/2016_popular_photo_categories.jpg"},
        {name: "adi",photo: "http://static.bigstockphoto.com/images/homepage/2016_popular_photo_categories.jpg"},
        {name: "yoav",photo: "http://static.bigstockphoto.com/images/homepage/2016_popular_photo_categories.jpg"},
        {name: "dan",photo: "http://static.bigstockphoto.com/images/homepage/2016_popular_photo_categories.jpg"},
        {name: "nisim",photo: "http://static.bigstockphoto.com/images/homepage/2016_popular_photo_categories.jpg"}
      ]
    }
  }
  render() {
    return (
      <div className="col-md-3 squareTable">
       {
        this.state.guestes.map(function(user, j) {
          return <Chair />
        })
       }
      </div>
    );
  }
}

export default SquareTable
