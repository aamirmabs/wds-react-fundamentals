import { Children } from 'react'

export const ListItem = (props) => {

  const { children, index, checkedStatus, handleCompleteTask } = props;

  return (
    <>
      <li className="list-item">
        <label className="list-item-label">
          <input type="checkbox" checked={checkedStatus} data-list-item-checkbox onChange={handleCompleteTask} />
          <span data-list-item-text>{children}</span>
        </label>
        <button data-button-delete>Delete</button>
      </li>
    </>

  )
}
