import TodoConstants from '../constants/TodoConstants'

export function addTodo(text){
  return {
    "type" : TodoConstants.TODO_CREATE,
     text
  }
}

export function makeTodoComplete(id){
  return {
    "type" : TodoConstants.TODO_TOGGLE,
    id
  }
}
