import React, { useState } from "react";
import './App.css'
const Todo = () => {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [editIndex, setEditIndex] = useState(null);

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleAddTodo = () => {
    if (inputValue.trim() !== "") {
      if (editIndex !== null) {
        // Edit existing task
        const newTodos = [...todos];
        newTodos[editIndex] = inputValue;

        console.log(newTodos)
        setTodos(newTodos);
        setInputValue("");
        setEditIndex(null);

      } else {
        // Add new task
        setTodos([...todos, inputValue]);
        setInputValue("");
      }
    }
    
  };

  const handleDeleteTodo = (index) => {
    const newTodos = todos.filter((sample, i) => i !== index);
    setTodos(newTodos);
    
  };

  const handleEditTodo = (index) => {
   
    setEditIndex(index);
    setInputValue(todos[index]);
  };

  return (
    <div>
      <h1>Todo List</h1>
      <div>
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          placeholder="Enter your todo..."
        />
        <button onClick={handleAddTodo}>{editIndex !== null ? "Save" : "Add"}</button>
      </div>
      <ol>
        {todos.map((todo, index) => (
          <li key={index}>
            {todo}
            <button onClick={() => handleEditTodo(index)}>Edit</button>
            <button onClick={() => handleDeleteTodo(index)}>Delete</button>
          </li>
        ))}
      </ol>
    </div>
  );
};

export default Todo;
