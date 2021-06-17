import React from "react";
import "./TodoItem.css";

function Todo(props) {
  const { content, id } = props;
  return <div onClick={props.lineText} className="d-flex align-items-center">
    <span>{content}</span>
    <button value={id} onClick={props.deleteTodo} className="btn btn-danger ml-auto">Sil
    </button>
  </div>;
}

export default Todo;
