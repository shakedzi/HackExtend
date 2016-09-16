import * as types from '../constants/ActionTypes'

const SERVER_URL = 'http://localhost:3000/evos/'

export function login(user){

  fetchData('login',user)
  console.log("loginnnnnnnnn")
  return { type: types.Login, user }
}

export function addTodo(text) {
  return { type: types.ADD_TODO, text }
}

export function deleteTodo(id) {
  return { type: types.DELETE_TODO, id }
}

export function editTodo(id, text) {
  return { type: types.EDIT_TODO, id, text }
}

export function completeTodo(id) {
  return { type: types.COMPLETE_TODO, id }
}

export function completeAll() {
  return { type: types.COMPLETE_ALL }
}

export function clearCompleted() {
  return { type: types.CLEAR_COMPLETED }
}

function fetchData(url,data) {
   fetch(SERVER_URL+url, {
         method: 'POST',
         body: JSON.stringify(data)
   })
 }
