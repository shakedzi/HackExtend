import React, { Component, PropTypes } from 'react'
import Person from './Person'
import QuestionImg from '../images/blue-question-mark.png';


class ListWaitingReplay extends Component {
  constructor(props, context) {
    super(props, context)
    this.state = {
      waitingReplay: [{name: "gilad",profilePicture: "http://stech2.firstpost.com/tech2images/640x359/proportional/jpeg/gallery/2013/aug/facebookprofile_301007399129.jpg"},
        {name: "sasson",profilePicture: "http://stech2.firstpost.com/tech2images/640x359/proportional/jpeg/gallery/2013/aug/facebookprofile_301007399129.jpg"},
        {name: "robin",profilePicture: "http://si.wsj.net/public/resources/images/WW-AA663A_SANDB_M_20150925152829.jpg"},
        {name: "nissim",profilePicture: "https://assets.entrepreneur.com/slideshow/20150623143233-10-inspirational-quotes-women-business-leaders-1.jpeg"},
        {name: "eve",profilePicture: "http://urbanasian.files.wordpress.com/2013/04/aa-upload1.jpg"},
        {name: "julia",profilePicture: "http://orig09.deviantart.net/9ea7/f/2015/308/9/0/profile_picture_by_xanda_man-d9fkirh.jpg"}
    ]
    }
  }
  render(){
         return (
           <ul className="listWaiting">
             {this.state.waitingReplay.map(function(person,j) {
               return(
               <li>
                 <Person key={j} name={person.name} profilePicture={person.profilePicture}  />
                 <img src={QuestionImg} width="20" height="20" />
               </li> )
             })
           }
           </ul>

    );
  }
}

export default ListWaitingReplay
