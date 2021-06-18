import React from "react";
import TodoItem from "../TodoItem/TodoItem";
import "./TodoList.css";

function TodoList(props) {
  return (
    <div>
      <ul>
        {props.todos.map((todo) => {
          return (
            <li className="list-group-item">
              <TodoItem lineText={props.lineText} deleteTodo={props.deleteTodo} {...todo} key={todo.id} />
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default TodoList;
