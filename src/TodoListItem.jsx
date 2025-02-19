export function TodoListItem(props) {
  const { children, isComplete } = props;

  return (
    <div>
      <label className="list-item">
        <input className="list-item-checkbox" type="checkbox" checked={isComplete} />
        {children}
      </label>
    </div>
  );
}
