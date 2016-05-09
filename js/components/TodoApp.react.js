import React, { Component } from 'react'
import Header from './Header.react'
import MainSection from './MainSection.react'
import Footer from './Footer.react'
import TodoStore from '../stores/TodoStore'
import {connect} from 'react-redux'

class TodoApp extends Component{
  render (){
    return (
      <div>
      <Header />
      <MainSection allTodos={this.props.allTodos} />
      </div>
    )
  }
}

const mapStateToProps = (state,props) => {
  return {
    allTodos : state
  }
}

TodoApp = connect(mapStateToProps)(TodoApp)

export default TodoApp
