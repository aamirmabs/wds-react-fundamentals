import React from 'react'

export const Form = () => {
  return (
    <div id="new-todo-form">
      <label htmlFor="todo-input">New Todo</label>
      <input type="text" id="todo-input" />
      <button>Add Todo</button>
    </div>
  )
}
