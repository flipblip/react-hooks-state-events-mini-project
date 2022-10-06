import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {
  const [allTasks, setAllTasks] = useState(TASKS)
  const [showTasks, setDisplayTasks] = useState(allTasks)

  function onTaskFormSubmit(newTask){
    setDisplayTasks([...showTasks, newTask])
  }

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories={CATEGORIES} allTasks={allTasks} setDisplayTasks={setDisplayTasks}/>
      <NewTaskForm categories={CATEGORIES} onTaskFormSubmit={onTaskFormSubmit}/>
      <TaskList tasks={showTasks} setDisplayTasks={showTasks}/>
    </div>
  );
}

export default App;
