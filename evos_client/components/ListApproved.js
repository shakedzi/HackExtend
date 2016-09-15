import React, { Component, PropTypes } from 'react'
import Person from './Person'
import CheckImg from '../images/green-check-icon.png';


class ListApproved extends Component {
  constructor(props, context) {
    super(props, context)
    this.state = {
      approvedList: [{name: "roy",profilePicture: "http://static4.bigstockphoto.com/thumbs/0/3/9/small2/93074543.jpg"},
        {name: "israel",profilePicture: "http://static4.bigstockphoto.com/thumbs/0/3/9/small2/93074543.jpg"},
        {name: "adi",profilePicture: "http://static4.bigstockphoto.com/thumbs/0/3/9/small2/93074543.jpg"},
        {name: "yoav",profilePicture: "http://static.bigstockphoto.com/images/homepage/2016_popular_photo_categories.jpg"},
        {name: "dan",profilePicture: "http://static.bigstockphoto.com/images/homepage/2016_popular_photo_categories.jpg"},
        {name: "nisim",profilePicture: "http://static.bigstockphoto.com/images/homepage/2016_popular_photo_categories.jpg"}
    ]
    }
  }
  render(){
         return (
           <ul className="listApproved">
             {this.state.approvedList.map(function(person,j) {
               return(
               <li>
                 <Person key={j} name={person.name} profilePicture={person.profilePicture}  />
                 <img src={CheckImg} width="20" height="20" />
               </li> )
             })
           }
           </ul>

    );
  }
}


export default ListApproved
