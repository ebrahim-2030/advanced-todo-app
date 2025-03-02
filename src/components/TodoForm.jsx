import React, { useState } from "react";

const TodoForm = ({ addTodo }) => {
  // State to manage the input field value
  const [todo, setTodo] = useState("");

  // Handles form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    if (todo.trim() === "") return;
    addTodo(todo);
    setTodo("");
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className="border-[2px] dark:border-white border-[#444] flex items-center p-1 rounded-xl mt-6"
      >
        {/* Input field for entering new todos */}
        <input
          type="text"
          placeholder="Add your new todo..."
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
          className="flex-1 bg-transparent px-2 outline-none placeholder:text-sm"
        />

        {/* Button to add the todo */}
        <button className="bg-[#C9184A] px-5 py-2 rounded-lg text-white">
          ADD
        </button>
      </form>
    </div>
  );
};

export default TodoForm;
