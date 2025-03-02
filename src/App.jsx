import { useState, useEffect } from "react";

import { loadTodos, saveTodos } from "./utils/LocalStorage.js";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

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
    <div className="min-h-screen  bg-[#0C161A] text-white">
      <div className="max-w-[425px]  mx-auto p-5">
        <h1 className="text-4xl font-bold mt-10 mb-5">Todo</h1>
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
