import React, { Component } from 'react'
import FacebookLogin from 'react-facebook-login';

class LoginButton extends Component {
  constructor(props, context) {
    super(props, context)
    this.responseFacebook.bind(this)
  }
  responseFacebook(response){
    console.log(response);
  }
  render() {
    return (
      <FacebookLogin
        appId="608912575947670"
        autoLoad={true}
        fields="name,email,picture"
        callback={this.responseFacebook} />
    )
  }
}

export default LoginButton
