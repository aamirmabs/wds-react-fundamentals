import { v4 as uuid_v4 } from 'uuid';
import { useState } from 'react';


import { Form } from './Form'
import { ListItem } from './ListItem'

import "./styles.css"

function App() {

  // setting state to manage
  const [tasksArray, setTasksArray] = useState([{
    id: uuid_v4(),
    text: "Task 1 - NOT Complete",
    completed: false
  },
  {
    id: uuid_v4(),
    text: "Task 2 - Complete",
    completed: true
  }])

  // HANDLERS

  // handler to complete task
  const handleCompleteTask = (index) => {
    console.log("handleCompleteTask() executed.");

    // Create a new array with the updated task
    const updatedTasks = tasksArray.map((task, i) => {
      if (i === index)
        return { ...task, completed: !task.completed }
      else
        return task
    }
    );

    // Update the state with the new array
    setTasksArray(updatedTasks);
  }

  return (
    <div>
      <ul id="list">
        {tasksArray.map((task, index) => {
          return (
            <ListItem
              key={task.id}
              checkedStatus={task.completed}
              handleCompleteTask={() => handleCompleteTask(index)}
            >
              {task.text} - {task.id}
            </ListItem>);
        })}
      </ul>

      <Form handlerAddTask={handlerAddTask}></Form>
    </div>
  );
}

export default App
