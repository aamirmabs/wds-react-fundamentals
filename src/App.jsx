import "./styles.css"

function App() {

  return (
    <div>
      <ul id="list">
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
      </ul>

      <div id="new-todo-form">
        <label htmlFor="todo-input">New Todo</label>
        <input type="text" id="todo-input" />
        <button>Add Todo</button>
      </div>
    </div>
  );
}

export default App
