import { useState } from "react";

import { Header } from "./Header";
import { TodoForm } from "./TodoForm";
import { Todos } from "./Todos";

const todos = [
  { task: "Wash the dishes", completed: false, id: Date.now() + 1 },
  { task: "Do the laundry", completed: false, id: Date.now() + 2 },
  { task: "Practise programming", completed: false, id: Date.now() + 3 },
  { task: "Work on project", completed: false, id: Date.now() + 4 },
];

export default function App() {
  const [todoList, setTodoList] = useState(todos);

  function handleAddTodo(newTodo) {
    if (newTodo === "") return;
    else {
      setTodoList((todos) => [
        ...todos,
        { task: newTodo, completed: false, id: Date.now() },
      ]);
    }
  }

  function handleToggleComplete(id) {
    setTodoList((todos) =>
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  }

  function handleDelete(id) {
    setTodoList((todos) => todos.filter((todo) => todo.id !== id));
  }

  const setUpdate = (updatedTask, id) => {
    setTodoList((todos) =>
      todos.map((todo) => {
        if (todo.id === id) {
          todo.task = updatedTask;
        }
        return todo;
      })
    );
  };

  return (
    <div className="App">
      <Header />
      <TodoForm onAddTodo={handleAddTodo} todoList={todoList} />
      <Todos
        todoList={todoList}
        onToggle={handleToggleComplete}
        onDelete={handleDelete}
        setUpdate={setUpdate}
      />
    </div>
  );
}
