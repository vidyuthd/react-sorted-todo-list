import React, { Component } from 'react'
import TodoTextInput from './TodoTextInput.react'
import classNames from 'classnames'
import {connect} from 'react-redux'
import * as actioncreators from '../dispatcher/ActionCreator'

class TodoItem extends Component{
  render(){
    const todo = this.props.todo
    return (
      <li
        className={classNames({
          'completed': todo.complete,
        })}
        key={todo.id}>
        <div className={classNames({
          'view' : true,
        })}>
          <input
            className="toggle"
            type="checkbox"
            checked={todo.complete}
            onChange={() => this.props.makeTodoComplete(todo.id)}
          />
          <label>
            {todo.text}
          </label>
        </div>
      </li>
    )
  }
}

TodoItem = connect(null,actioncreators)(TodoItem)

export default TodoItem
