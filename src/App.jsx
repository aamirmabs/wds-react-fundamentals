import { NameFunc } from "./NameFunc"
import { TodoListItem } from "./TodoListItem";

function App() {
  return (
    <div>
      <TodoListItem isComplete>
        Todo Item 1
      </TodoListItem>
      <TodoListItem isComplete={false}>
        Todo Item 2
      </TodoListItem>
    </div>
  );
}

export default App
