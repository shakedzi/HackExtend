import React, { Component, PropTypes } from 'react'
import Person from './Person'
import LogoImg from '../images/green-check-icon.png';


class ListApproved extends Component {
  constructor(props, context) {
    super(props, context)
    this.state = {
      approvedList: [{name: "roy",profilePicture: "http://static.bigstockphoto.com/images/homepage/2016_popular_photo_categories.jpg"},
        {name: "israel",profilePicture: "http://static.bigstockphoto.com/images/homepage/2016_popular_photo_categories.jpg"},
        {name: "adi",profilePicture: "http://static.bigstockphoto.com/images/homepage/2016_popular_photo_categories.jpg"},
        {name: "yoav",profilePicture: "http://static.bigstockphoto.com/images/homepage/2016_popular_photo_categories.jpg"},
        {name: "dan",profilePicture: "http://static.bigstockphoto.com/images/homepage/2016_popular_photo_categories.jpg"},
        {name: "nisim",profilePicture: "http://static.bigstockphoto.com/images/homepage/2016_popular_photo_categories.jpg"}
    ]
    }
  }
  render(){
         return (
           <ul>
             {this.state.approvedList.map(function(person,j) {
               return
               <li>
                 <Person key={j} name={person.name} photo={person.profilePicture}  />

                 <img src={LogoImg} width="55" height="66" />
               </li>
             })
           }
           </ul>

    );
  }
}


export default ListApproved