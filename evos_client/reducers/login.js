import { Login } from '../constants/ActionTypes'

const initialState = [
  {
    user: {
      name: "someone",
      email: "someone@someone.com",
      id: "000000000",
      accessToken: "AAAAAA",
      picture: "https://fbcdn-profile-a.akamaihd.net/hprofile-ak-xta1/v/t1.0-1/c19.0.50.50/p50x50/11251821_10206896541626577_9204345797060510663_n.jpg?oh=c3a31ddc0b0db8e6eecd6ea657e63691&oe=587D9F4F&__gda__=1484844695_660837d39aa3d904f022e42ce91b5505"
    }
  }
]

export default function todos(state = initialState, action) {
  switch (action.type) {
    case Login:
      let userDetails = Object.assign({}, {name: action.user.name}, {id: action.user.id},{email: action.user.email},{picture: action.user.picture.data.url},{accessToken: action.user.accessToken})
      return Object.assign({},{user:{userDetails}})
    default:
      return state
  }
}
