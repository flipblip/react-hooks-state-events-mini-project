import React from "react";
import Task from "./Task.js";

function TaskList({tasks, setDisplayTasks}) {
  
  function handleDelete(event){
    const taskText = event.target.parentElement.querySelector('.text').textContent

    const newTasksToShow = tasks.filter(task => {
      return task.text != taskText
    })

    setDisplayTasks(newTasksToShow)
  }

  const taskList = tasks.map(task => {
    return <Task key={task.text} text={task.text} category={task.category} handleDelete={handleDelete} />
  })
  return (
    <div className="tasks">
      {taskList}
    </div>
  );
}

export default TaskList;
