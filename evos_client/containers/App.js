import React, { Component, PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Header from '../components/Header'
import MainSection from '../components/MainSection'
import MapTable from '../components/mapTable'
import ListApproved from '../components/ListApproved'
import * as TodoActions from '../actions'


class App extends Component {
  render() {
    const { todos, actions } = this.props
    return (
      <div className="container">
        <Header />
        <div className="row">
          <div className="col-md-8">
              <MapTable />
          </div>
          <div className="col-md-4">
              <ListApproved />
          </div>
        </div>



      </div>
    )
  }
}

App.propTypes = {
  todos: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
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
