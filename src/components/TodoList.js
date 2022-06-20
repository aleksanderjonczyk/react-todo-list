import React from "react";
import Todo from "./Todo";

const TodoList = ({ todos, setTodos, taskFilter }) => {
  return (
    <div className="todo-container">
      <ul className="todo-list">
        <Todo todos={todos} setTodos={setTodos} taskFilter={taskFilter} />
      </ul>
    </div>
  );
};

export default TodoList;
