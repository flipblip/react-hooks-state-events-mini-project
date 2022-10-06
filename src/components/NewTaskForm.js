import React, {useState} from "react";

function NewTaskForm({categories, onTaskFormSubmit }) {
  const [formData, setFormData] = useState({text: "", category: "code"})

  function updateFormData(event){
    setFormData({...formData, [event.target.name]: event.target.value})
  }

  const categoryList = categories.filter(category => category !== "All").map(category => {return <option key={category}>{category}</option>})

  function handleTaskFormSubmit(event){
    event.preventDefault()
    onTaskFormSubmit(formData)
  }

  return (
    <form className="new-task-form" onSubmit={handleTaskFormSubmit}>
      <label>
        Details
        <input type="text" name="text" onChange={updateFormData}/>
      </label>
      <label>
        Category
        <select name="category" onChange={updateFormData}>
          {categoryList}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
