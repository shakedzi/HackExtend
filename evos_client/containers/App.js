import React, { Component, PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Router, Route, hashHistory } from 'react-router'
import Header from '../components/Header'
import MainSection from '../components/MainSection'
import MapTable from '../components/mapTable'
import ListApproved from '../components/ListApproved'
import ListWaitingReplay from '../components/ListWaitingReplay'
import ProgressBar from '../components/ProgressBar'
import * as TodoActions from '../actions'


class App extends Component {
  render() {
    const { todos, actions } = this.props
    return (
      <div className="container">
        <Header />
        <div className="row">
          <div className="col-md-9">
          <div className="twoTables">
              <MapTable  />
              <MapTable/>
          </div>
          <div className="twoTables">
              <MapTable  />
              <MapTable/>
          </div>
          <div className="twoTables">
              <MapTable  />
              <MapTable/>
          </div>
          <div className="twoTables">
              <MapTable  />
              <MapTable/>
          </div>
          <div className="twoTables">
              <MapTable  />
              <MapTable/>
          </div>
          </div>
          <div className="col-md-3">
              <ProgressBar />
              <ListApproved />
              <ListWaitingReplay />
          </div>
        </div>
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
)(App)
