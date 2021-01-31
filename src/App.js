import React, { useState } from 'react'
import AddTasks from './components/AddTasks';
import Header from './components/Header';
import Tasks from './components/Tasks';

const App = () => {
  const [doesFormExists, setDoesFormExists] = useState(false);
  const [tasks, setTask] = useState([
    {
        "id": 1,
        "text": "Doctors Appointment",
        "day": "Feb 5th at 2:30pm",
        "reminder": true
      },
      {
        "id": 2,
        "text": "Meeting at School",
        "day": "Feb 6th at 1:30pm",
        "reminder": true
      },
      {
        "id": 3,
        "text": "Lunch time",
        "day": "Feb 5th at 2:30pm",
        "reminder": false
      },
      {
        "id": 4,
        "text": "Meeting at My Grandma's House",
        "day": "Feb 6th at 1:30pm",
        "reminder": false
      }
  ])

  const onAdd = (task) => {
    const id = Math.floor(Math.random() * 1000 + 1);
    setTask([...tasks, { id, ...task }]);
  }

  const removeTask = (id) => setTask(tasks => tasks.filter(task => task.id !== id));

  const toggleReminder = (id) => setTask(tasks.map(task => task.id === id ? {...task, reminder: !task.reminder} : task ));

  return (
    <div className="container">
      <Header title="Task Tracker" showAddCloseLabel={doesFormExists} onClick={() => setDoesFormExists(!doesFormExists)} />
      {doesFormExists && <AddTasks isFormShown={doesFormExists} onAdd={onAdd} />}
      {tasks.length > 0 ? <Tasks tasks={tasks} onDelete={removeTask} onDoubleClick={toggleReminder} /> : <h2>No tasks to show!</h2>}
    </div>
  );
}

export default App;
