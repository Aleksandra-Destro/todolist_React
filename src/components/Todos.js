import { Todo } from "./Todo";

export function Todos({ todoList, onToggle, onDelete, setUpdate }) {
  return (
    <ul className="todolist">
      {todoList.map((todo) => (
        <Todo
          completed={todo.completed}
          todo={todo}
          onToggle={onToggle}
          key={todo.id}
          onDelete={onDelete}
          setUpdate={setUpdate}
        />
      ))}
    </ul>
  );
}
