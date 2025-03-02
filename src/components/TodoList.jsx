import { useState } from "react";
import TodoItem from "./TodoItem";

const TodoList = ({ todos, toggleTodo, deleteTodo }) => {
  // Controls how many todos are visible
  const [visibleCount, setVisibleCount] = useState(5);

  // Toggle between showing all todos or limiting to 5
  const handleToggle = () =>
    setVisibleCount(visibleCount === todos.length ? 5 : todos.length);

  return (
    <div className="mt-10">
      <h2 className="mb-1">Todo List</h2>

      <div className="flex flex-col gap-5 ">
        <ul className="w-full">
          {/* Display limited or full list based on visibleCount */}
          {todos.slice(0, visibleCount).map((todo) => (
            <TodoItem
              key={todo.id}
              todo={todo}
              toggleTodo={toggleTodo}
              deleteTodo={deleteTodo}
            />
          ))}
        </ul>

        {/* Show toggle button only if there are more than 5 todos */}
        {todos.length > 5 && (
          <button
            onClick={handleToggle}
            className="m-auto text-[#fff] bg-[#ffffff22] rounded-md px-3 py-1"
          >
            {visibleCount === todos.length ? "See Less" : "See All"}
          </button>
        )}
      </div>
    </div>
  );
};

export default TodoList;
