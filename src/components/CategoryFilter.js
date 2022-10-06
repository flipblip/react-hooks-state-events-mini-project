import React from "react";

function CategoryFilter({categories, allTasks, setDisplayTasks}) {

  function handleCategoryClick(event){
    const category = event.target.textContent
    event.target.parentElement.querySelectorAll('button').forEach(btn => btn.classList.remove("selected"))
    event.target.classList.add("selected")

    if (category === "All"){
      setDisplayTasks(allTasks)
    }else{
      const newTasksToShow = allTasks.filter(task => {
        return task.category === category
      })

      setDisplayTasks(newTasksToShow)
    }
  }

  const buttons = categories.map(category => {
    return <button onClick={handleCategoryClick}>{category}</button>
  })

  return (
    <div className="categories">
      <h5>Category filters</h5>
      {buttons}
    </div>
  );
}

export default CategoryFilter;
