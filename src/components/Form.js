import React, { useEffect } from "react";

const Form = ({ setInputValue, inputValue, setTodos, todos }) => {
  const submitHandler = e => {
    e.preventDefault();

    setTodos([
      ...todos,
      {
        text: inputValue,
        completed: false,
        id: Math.floor(Math.random() * 1000),
      },
    ]);
    setInputValue("");
  };

  return (
    <form>
      <input
        value={inputValue}
        onChange={e => setInputValue(e.target.value)}
        id="todo"
        type="text"
        placeholder="Add task to do..."
      />
      <button onClick={submitHandler} type="submit">
        <i className="fas fa-plus"></i>
      </button>
      <div className="select">
        <select name="todos" className="filter-todo">
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="uncompleted">Uncompleted</option>
        </select>
      </div>
    </form>
  );
};

export default Form;
