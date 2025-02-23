export const Form = ({ handleNewTaskText, handleAddNewTask, newTaskText }) => {

  // disable submit button if task text is 0
  let disabledStatus = false;
  if (newTaskText.length === 0) {
    disabledStatus = true;
    // console.log("LOG: Add Todo button disabled.");
  }
  else {
    disabledStatus = false;
  }

  return (
    <div id="new-todo-form">
      <label htmlFor="todo-input">New Todo</label>
      <input type="text" id="todo-input" value={newTaskText} onChange={handleNewTaskText} />
      <button
        onClick={handleAddNewTask}
        disabled={disabledStatus}>
        Add Todo
      </button >
    </div >
  )
}
