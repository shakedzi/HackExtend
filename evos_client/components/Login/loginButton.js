import React, { Component } from 'react'
import FacebookLogin from 'react-facebook-login';
import { Router, Route, browserHistory } from 'react-router'

class LoginButton extends Component {
  constructor(props,context) {
    super(props,context)
    this.responseFacebook.bind(this)
  }
  responseFacebook(response){

    Router.transitionTo('main');
    // var transitionTo = Router.transitionTo;
    //
    // transitionTo('main');
    // console.log(this.props)
    //
    // browserHistory.push('/main')
    // this.props.login(response)
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
