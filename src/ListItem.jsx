export const ListItem = (props) => {

  const { children, checkedStatus, handleCompleteTask, handleDeleteTask } = props;

  return (
    <>
      <li className="list-item">
        <label className="list-item-label">
          <input type="checkbox" checked={checkedStatus} data-list-item-checkbox onChange={handleCompleteTask} />
          <span data-list-item-text>{children}</span>
        </label>
        <button data-button-delete onClick={handleDeleteTask}>Delete</button>
      </li>
    </>

  )
}
