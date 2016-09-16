import React, { Component, PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Router, Route, hashHistory } from 'react-router'
import Header from '../components/Header'
import MapEvents from '../components/Events/mapEvents'

import * as TodoActions from '../actions'


class Events extends Component {
  render() {
    const { todos, actions } = this.props
    return (
      <div className="container">
        <Header />
        <MapEvents />
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
)(Events)
