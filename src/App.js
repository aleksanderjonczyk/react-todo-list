import React, { useEffect, useState } from "react";
import "./style.css";

import Form from "./components/Form";
import TodoList from "./components/TodoList";

const App = () => {
  const [inputValue, setInputValue] = useState("");
  const [todos, setTodos] = useState([]);
  const [taskStatus, setTaskStatus] = useState("all");
  const [taskFilter, setTaskFilter] = useState([]);

  useEffect(() => {
    getTodosFromLocal();
  }, []);

  useEffect(() => {
    filterTodos();
    saveTodos();
  }, [todos, taskStatus]);

  const filterTodos = () => {
    switch (taskStatus) {
      case "completed":
        setTaskFilter(todos.filter(todo => todo.completed === true));
        break;
      case "uncompleted":
        setTaskFilter(todos.filter(todo => todo.completed === false));
        break;
      default:
        setTaskFilter(todos);
        break;
    }
  };

  const saveTodos = () => {
    if (localStorage.getItem("todos") == null) {
      localStorage.setItem("todos", JSON.stringify([]));
    } else {
      localStorage.setItem("todos", JSON.stringify(todos));
    }
  };

  const getTodosFromLocal = () => {
    let localTodos = JSON.parse(localStorage.getItem("todos"));
    setTodos(localTodos);
  };

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
        setTaskStatus={setTaskStatus}
      />
      <TodoList todos={todos} setTodos={setTodos} taskFilter={taskFilter} />
    </React.Fragment>
  );
};

export default App;
