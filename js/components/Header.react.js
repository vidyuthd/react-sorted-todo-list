import React,{ Component } from 'react'
import TodoTextInput from './TodoTextInput.react'
import {connect} from 'react-redux'
import * as actioncreators from '../dispatcher/ActionCreator'

class Header extends Component{
  render(){
    return (
      <header id="header">
        <h1> todos </h1>
        <TodoTextInput
          id="new-todo"
          placeholder=" What needs to be done? "
          onSave = {(text) => this.onSave(text)}
          value = ""
        />
        </header>
    )
  }

  onSave(text){
    if(text.trim()){
      this.props.addTodo(text)
    }
  }
}


const mapStateToProps = () => { return {}}

Header = connect(mapStateToProps,actioncreators)(Header)

export default Header
