import React from "react";
import TodoItem from "./TodoItem";
import { useSelector } from "react-redux";
import Check from "./Checked";
import styles from "../index.css";

const TodoList = () => {
  const todos = useSelector((state) => {
    return state.tasks;
  });

  return (
    <div>
	  {todos.map((todo) => (
		  <ul className="tasks-list">
        <>
          <label id="todo-item">
            <TodoItem id={todo.id} title={todo.name} completed={todo.status}  className={todo.checked ? styles.strike : ""}/>
            <Check />
          </label>
        </>
    </ul>
      ))}
      </div>
  );
};

export default TodoList;
