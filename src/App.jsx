import { NameFunc } from "./NameFunc"
import { TodoListItem } from "./TodoListItem";
import task from "./Tasks.json"

import "./App.css"

function App() {

  const taskText = JSON.stringify(task.task);
  const isComplete = JSON.stringify(task.isComplete);

  return (
    <div>
      <TodoListItem isComplete={isComplete}>
        {taskText}
      </TodoListItem>
    </div>
  );
}

export default App
