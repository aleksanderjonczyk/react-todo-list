import React, { useState } from "react";
import "./style.css";

import Form from "./components/Form";
import TodoList from "./components/TodoList";

const App = () => {
  const [inputValue, setInputValue] = useState("");
  const [todos, setTodos] = useState([]);

  return (
    <React.Fragment>
      <header>
        <h1>Todo List</h1>
      </header>
      <Form
        setInputValue={setInputValue}
        inputValue={inputValue}
        setTodos={setTodos}
        todos={todos}
      />
      <TodoList todos={todos} />
    </React.Fragment>
  );
};

export default App;
