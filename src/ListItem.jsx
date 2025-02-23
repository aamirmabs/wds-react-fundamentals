import { Children } from 'react'

export const ListItem = ({ children, itemText, checkedStatus }) => {
  return (
    <>
      <li className="list-item">
        <label className="list-item-label">
          <input type="checkbox" checked={checkedStatus} data-list-item-checkbox />
          <span data-list-item-text>{itemText} {children}</span>
        </label>
        <button data-button-delete>Delete</button>
      </li>
    </>

  )
}
