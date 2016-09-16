import React, { Component, PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Router, Route, hashHistory, Link } from 'react-router'
import Header from '../components/Header'
import PickFriendCheckbox from '../components/PickFriendCheckbox'


import * as TodoActions from '../actions'


class PickFriends extends Component {
  render() {
    const { todos, actions } = this.props
    return (
      <div className="container">
        <Header />
        <div className="row">
          <div >
            <PickFriendCheckbox />
          </div>
        </div>
        <Link to='/main'>Next</Link>
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
)(PickFriends)
