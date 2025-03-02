import { useState, useEffect } from "react";

import { loadTodos, saveTodos } from "./utils/LocalStorage.js";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import ThemeToggle from "./components/ThemeToggle.jsx";

function App() {
  // Initializing state with todos loaded from local storage
  const [todos, setTodos] = useState(loadTodos());

  // Effect hook to save todos to local storage whenever they change
  useEffect(() => {
    saveTodos(todos);
  }, [todos]);

  // Function to add a new todo item
  const addTodo = (todo) => {
    setTodos([...todos, { id: Date.now(), text: todo, completed: false }]);
  };

  // Function to toggle the completed status of a todo
  const toggleTodo = (todoId) => {
    setTodos(
      todos.map((todo) =>
        todo.id === todoId ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  // Function to delete a todo item
  const deleteTodo = (todoId) => {
    setTodos(todos.filter((todo) => todo.id !== todoId));
  };
  return (
    <div className="min-h-screen bg-slate-200 dark:bg-[#0C161A]   dark:text-white transition-all duration-500">
      <div className="max-w-[425px]  mx-auto px-5 py-10">
        <div className="flex items-center justify-between">
          <h1 className="text-4xl font-bold text-[#444] dark:text-white">
            Todo
          </h1>
          <ThemeToggle />
        </div>
        <TodoForm addTodo={addTodo} />
        <TodoList
          todos={todos}
          toggleTodo={toggleTodo}
          deleteTodo={deleteTodo}
        />
      </div>
    </div>
  );
}

export default App;
