import React, { Component, PropTypes } from 'react'
import TodoItem from './TodoItem.react'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

class MainSection extends Component{
  render(){
    if (Object.keys(this.props.allTodos).length < 1) {
      return null;
    }

    return (
      <section id="main">
        <ReactCSSTransitionGroup transitionName="slider" transitionEnterTimeout={500} transitionLeaveTimeout={500} component="ul" id="todo-list">
          {this.props.allTodos.map(function(element,id){
            return <TodoItem key={element.id+element.complete} index={id} closed="true" todo={element} />
          })}
        </ReactCSSTransitionGroup>
      </section>
    )
  }
}

export default MainSection
