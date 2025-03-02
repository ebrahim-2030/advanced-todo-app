import React, { useState } from "react";

const TodoForm = ({ addTodo }) => {
  const [todo, setTodo] = useState("");

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
        className="border-2 flex items-centers p-1 rounded-xl mb-5"
      >
        <input
          type="text"
          placeholder="add your new todo"
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
          className="flex-1 bg-transparent px-2 outline-none"
        />
        <button className="bg-[#C9184A] px-5 py-2 rounded-lg">ADD</button>
      </form>
    </div>
  );
};

export default TodoForm;
