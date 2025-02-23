import React from 'react'

export const ListItem = () => {
  return (
    <>
      <li className="list-item">
        <label className="list-item-label">
          <input type="checkbox" data-list-item-checkbox />
          <span data-list-item-text>Item 1</span>
        </label>
        <button data-button-delete>Delete</button>
      </li>
      <li className="list-item">
        <label className="list-item-label">
          <input type="checkbox" checked data-list-item-checkbox />
          <span data-list-item-text>Item 2</span>
        </label>
        <button data-button-delete>Delete</button>
      </li>
    </>

  )
}
