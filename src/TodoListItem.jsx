export function TodoListItem(props) {
  const { children, isComplete } = props;

  return (
    <div>
      <label>
        <input type="checkbox" checked={isComplete} />
        {children}
      </label>
    </div>
  );
}
