import React, { useState } from "react";
import "./TodoApp.css";

function TodoApp() {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);

  const handleInput = (e) => {
    setInputText(e.target.value);
  };

  const addTodo = (e) => {
    e.preventDefault();
    setTodos([...todos, inputText]);
    setInputText("");
  };

  return (
    <div className="todo-app">
      <h1>My Todo List</h1>
      <form className="todo-form">
        <input
          type="text"
          placeholder="Enter a task"
          value={inputText}
          onChange={handleInput}
        />
        <button type="submit" onClick={addTodo}>
          Submit
        </button>
      </form>
      <ul className="todo-list">
        {todos.map((todo, index) => (
          <li key={index}>{todo}</li>
        ))}
      </ul>
    </div>
  );
}

export default TodoApp;
