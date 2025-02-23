import { v4 as uuid_v4 } from 'uuid';
import { useState } from 'react';

import { Form } from './Form'
import { ListItem } from './ListItem'

import "./styles.css"

function App() {

  // setting state to manage
  const [tasksArray, setTasksArray] = useState([])
  const [newTaskText, setNewTaskText] = useState('');


  // HANDLERS
  // handler to manage new task text
  const handleNewTaskText = (e) => {
    // console.log(e.target.value);
    setNewTaskText(e.target.value);
  }

  // handler input button click to complete task
  const handleCompleteTask = (index) => {

    // Create a new array with the updated task
    const updatedTasks = tasksArray.map((task, i) => {
      if (i === index)
        return { ...task, completed: !task.completed }
      else
        return task
    });

    // Update the state with the new array
    setTasksArray(updatedTasks);
  }

  // handle add new task to list
  const handleAddNewTask = () => {

    const newTask = {
      id: uuid_v4(),
      text: newTaskText,
      completed: false
    };

    setTasksArray(oldTasks => {
      return [...oldTasks, newTask]
    });
  }

  // handle delete task
  const handleDeleteTask = (index) => {
    // console.log("LOG: handleDeleteTask() executed");

    const pre = tasksArray.slice(0, index);
    const post = tasksArray.slice(index + 1);

    setTasksArray(pre.concat(post));
  }

  return (
    <div>
      <ul id="list">
        {tasksArray.map((task, index) => {
          return (
            <ListItem
              key={task.id}
              checkedStatus={task.completed}
              handleCompleteTask={() => handleCompleteTask(index)
              }
              handleDeleteTask={() => handleDeleteTask(index)}
            >
              {task.text}
            </ListItem>
          );
        })}
      </ul>

      <Form
        handleAddNewTask={handleAddNewTask}
        newTaskText={newTaskText}
        handleNewTaskText={handleNewTaskText}
      />
    </div >
  );
}

export default App
