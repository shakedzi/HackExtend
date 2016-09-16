import React, { Component, PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Router, Route, hashHistory } from 'react-router'
import Header from '../components/Header'
import MainSection from '../components/MainSection'
import LoginButton from '../components/Login/loginButton'

import * as TodoActions from '../actions'


class Login extends Component {
  render() {
    const { todos, actions } = this.props
    return (
      <div className="container">
        <LoginButton login={actions.login} />
      </div>
    )
  }
}


function mapStateToProps(state) {
  return {
    todos: state.todos
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(TodoActions, dispatch)
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login)
