import React from 'react'
import ReactDom from 'react-dom'
import TodoApp from './components/TodoApp.react'
import {Provider} from 'react-redux'
import {createStore} from 'redux'
import TodoConstants from './constants/TodoConstants'
import update from 'react-addons-update'

const reducer = (state = [],action) => {
  let mergeObj = {}
  let newstate = state
  switch (action.type) {
    case TodoConstants.TODO_CREATE:
      const id = (+new Date() + Math.floor(Math.random() * 999999)).toString(36);
       mergeObj = {
        id: id,
        complete: false,
        text: action.text
      }
      newstate = state.concat(mergeObj)
      break;
    case TodoConstants.TODO_TOGGLE :
      const position = pos(state,action.id)
      mergeObj = {
        id: action.id,
        complete: !state[position]["complete"],
        text: state[position]["text"]
      }
      newstate = state.slice(0,position).concat([mergeObj]).concat(state.slice(position+1,state.length))
      break;
    default:
      return state
  }
  return newstate.sort(function compare(a,b){if(a.complete === b.complete){return a.text> b.text ? 1 : a.text === b.text ? 0 : -1 } else{ return a.complete > b.complete ? 1 : -1 }})
}

const pos = (state,id) => {
  const keys = Object.keys(state)
  let i = 0
  for(; i < keys.length ; i++){
      if(id === state[keys[i]].id){
        return i
      }
  }
  return i
}

const store = createStore(reducer)
store.dispatch({type:"INITIALIZE"})

ReactDom.render(
  <Provider store={store}>
    <TodoApp />
  </Provider>,
  document.getElementById('todoapp')
);
