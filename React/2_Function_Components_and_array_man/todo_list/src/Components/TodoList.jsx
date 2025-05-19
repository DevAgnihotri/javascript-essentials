import React, { useState } from 'react';
import './TodoList.css';

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [headingInput, setHeadingInput] = useState('');
  const [listInputs, setListInputs] = useState({});

  // Function to handle adding a new todo item
  const handleAddTodo = () => {
    // Define a function named `handleAddTodo` using an arrow function syntax.
    // This function will handle adding a new todo item to the list.

    if (headingInput.trim() !== '') {
        // Check if the `headingInput` (a state variable) is not empty after removing any leading or trailing whitespace.
        // `trim()` removes whitespace, and `!== ''` ensures the input is not an empty string.

        setTodos([...todos, { heading: headingInput, lists: [] }]);
        // Update the `todos` state (likely managed by a React useState hook).
        // Use the spread operator (`...todos`) to copy the existing `todos` array.
        // Add a new object to the array with:
        // - `heading`: the current value of `headingInput`.
        // - `lists`: an empty array (likely for sub-items or tasks under this heading).

        setHeadingInput('');
        // Clear the `headingInput` state by setting it to an empty string.
        // This resets the input field in the UI.
    }
};
  return (
    <>
      <div className="todo-container">
        <h1 className="title">My Todo List</h1>
        <div className="input-container">
          <input
            type="text"
            className="heading-input"
            placeholder="Enter heading"
            value={headingInput}
            onChange={(e) => {setHeadingInput(e.target.value);}}
          />
          <button className="add-list-button" onClick={handleAddTodo}>Add Heading</button>
        </div>
      </div>
      <div className="todo_main">
      {todos.map((todo, index) => (
    <div key={index} className="todo-card">
      <div className="heading_todo">
        <h3>{todo.heading}</h3> {/* Display the heading here */}
        <button className="delete-button-heading" onClick={() => handleDeleteTodo(index)}>Delete Heading </button>
      </div>
    </div>
  ))}
      </div>
    </>
  );
};

export default TodoList;
