import { useState } from "react";

export function TodoForm({ onAddTodo, todoList }) {
  const [newTask, setNewTask] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    onAddTodo(newTask);
    console.log(todoList);

    setNewTask("");
  }

  return (
    <form onSubmit={handleSubmit} className="submit-form">
      <label>Start typing the task</label>
      <input
        type="text"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
      />
      <button className="add-btn">Add</button>
    </form>
  );
}
