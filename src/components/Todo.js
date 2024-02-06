import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";

export function Todo({ todo, completed, onToggle, onDelete, setUpdate }) {
  const [editing, setEditing] = useState(false);
  const [updateInput, setUpdateInput] = useState(todo.task);

  let viewMode = {};
  let editMode = {};

  if (editing) {
    viewMode.display = "none";
  } else {
    editMode.display = "none";
  }

  function handleEdit() {
    setEditing(true);
  }

  function handleUpdatedDone(updateInput, id) {
    setUpdate(updateInput, id);
    setEditing(false);
  }

  return (
    <div className="container">
      <div className="todo-container " style={viewMode}>
        {" "}
        <input type="checkbox" onChange={() => onToggle(todo.id)} />
        <span className="todo">
          <li className={completed ? "completed" : ""}>{todo.task}</li>
        </span>
        <button className="edit-btn" onClick={handleEdit}>
          <FontAwesomeIcon icon={faPenToSquare} className="icon" />
        </button>
        <button className="delete-btn" onClick={() => onDelete(todo.id)}>
          <FontAwesomeIcon icon={faTrash} className="icon" />
        </button>
      </div>

      <div className="edit-form" style={editMode}>
        <input
          type="text"
          value={updateInput}
          id={todo.id}
          className="edit-form"
          onChange={(e) => setUpdateInput(e.target.value)}
        />
        <button
          className="save-btn"
          onClick={() => handleUpdatedDone(updateInput, todo.id)}
        >
          Save
        </button>
      </div>
    </div>
  );
}
