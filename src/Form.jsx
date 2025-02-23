import React from 'react'

export const Form = ({ handlerAddTask }) => {
  return (
    <div id="new-todo-form">
      <label htmlFor="todo-input">New Todo</label>
      <input type="text" id="todo-input" />
      <button onClick={handlerAddTask}>Add Todo</button>
    </div>
  )
}
