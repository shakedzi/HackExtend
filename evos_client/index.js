import 'babel-polyfill'
import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { Router, Route, hashHistory } from 'react-router'
import App from './containers/App'
import Login from './containers/Login'
import Events from './containers/Events'
import AddEvent from './containers/AddEvent'
import PickFriends from './containers/PickFriends'
import configureStore from './store/configureStore'
import 'todomvc-app-css/mapTable.css'


const store = configureStore()

render(
  <Provider store={store}>
    <Router history={hashHistory}>
      <Route path="/" component={Login}/>
      <Route path="/main" component={App}/>
      <Route path="/events" component={Events}/>
      <Route path="/addevent" component={AddEvent}/>
      <Route path="/pickfriends" component={PickFriends}/>
    </Router>
  </Provider>,
  document.getElementById('root')
)
