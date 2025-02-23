import { v4 as uuid_v4 } from 'uuid';
import { useState } from 'react';


import { Form } from './Form'
import { ListItem } from './ListItem'

import "./styles.css"

function App() {

  const [tasksArray, setTasksArray] = useState([{
    text: "Task 1 - NOT Complete",
    completed: false
  },
  {
    text: "Task 2 - Complete",
    completed: true
  }])

  return (
    <div>
      <ul id="list">
        {tasksArray.map(task => {
          return (
            <ListItem
              key={uuid_v4()}
              checkedStatus={task.completed}>
              {task.text}
            </ListItem>);
        })}
      </ul>

      <Form></Form>
    </div>
  );
}

export default App
