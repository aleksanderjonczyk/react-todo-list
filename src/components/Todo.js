import React from "react";

const Todo = ({ todos, setTodos, taskFilter }) => {
  const renderTodoList = taskFilter.map(({ text, completed, id }) => {
    const deleteHandler = e => {
      setTodos(todos.filter(todo => todo.id !== id));
    };

    const completeHandler = () => {
      setTodos(
        todos.map(todo => {
          if (todo.id === id) {
            return {
              ...todo,
              completed: !completed,
            };
          }
          return todo;
        })
      );
    };

    return (
      <div className={`todo ${completed ? "completed" : ""}`} key={id}>
        <li className="todo-item">{text}</li>
        <button onClick={completeHandler} className="complete-btn">
          <i className="fas fa-check"></i>
        </button>
        <button onClick={deleteHandler} className="delete-btn">
          <i className="fas fa-xmark"></i>
        </button>
      </div>
    );
  });

  return renderTodoList;
};

export default Todo;
