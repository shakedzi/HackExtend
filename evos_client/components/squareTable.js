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
      <table>
       <tbody>
       <tr>
       <td>
       {
         this.state.guestes.map(function(user, j) {
                if(j>3){
                  return <div>{j}</div>
                }

           })
         }
         </td>
         </tr>
          <tr>
            <Chair />
            <Chair />
          </tr>
          <tr>
            <Chair />
            <Chair />
          </tr>
       </tbody>
      </table>
    );
  }
}

export default SquareTable
