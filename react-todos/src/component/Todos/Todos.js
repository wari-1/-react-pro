import React from "react";
import "./Todos.css";
const Todos = props => {
  const { showTodos, delTodo, changeCompleted } = props;
  const showTodosList = showTodos.map(item => (
    <li className={item.isCompleted ? "completed" : "active"} key={item.id}>
      <div className="view">
        <input type="checkbox" id="label" className="toggle" />
        <label htmlFor="label" onClick={() => changeCompleted({id:item.id,isCompleted:item.isCompleted})}>
          {item.text}
          <i
            className={item.isCompleted ? "fa fa-check show" : "fa fa-check"}
          />
        </label>
        <button className="destroy" onClick={() => delTodo(item.id)}>
          x
        </button>
      </div>
    </li>
  ));
  return (
    <section className="main">
      <ul className="todo-list">{showTodosList}</ul>
    </section>
  );
};

export default Todos;
