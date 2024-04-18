import React, { useState } from "react";

function TaskList() {
  const [tasks, setTasks] = useState(['']);
  const [input, setInput] = useState('')

  // add tasks
  const handleSubmit = (e) => {
    e.preventDefault()
    const addTask = {
      id: Math.floor(Math.random() * 1000),
      text: input,
      completed: false
    }
    setTasks([...tasks, addTask])
    setInput('')
  }

  // delete tasks
  const deleteTask =(id) => {
    let filteredTasks = [...tasks].filter((tasks) => tasks.id !== id)
    setTasks(filteredTasks)
  }

  return (
    <div className="task">
      <div className="container">
        <h1>Tasklist</h1>

        <form onSubmit={handleSubmit}>
          <input 
          value={input}
          onChange={e => setInput(e.target.value)}
          placeholder="Enter a task" 
          type="text" />
        </form>


        <div>
            {tasks.map(task => (
                <div key={task.id}>
                    <p>{task.text}<button onClick={() => deleteTask(task.id)}>delete</button></p>
                </div>
            ))}
        </div>
      </div>
    </div>
  );
}

export default TaskList;
