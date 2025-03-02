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
        className="border-[2px] dark:border-white border-[#444] flex items-centers p-1 rounded-xl mt-6"
      >
        <input
          type="text"
          placeholder="add your new todo..."
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
          className="flex-1 bg-transparent px-2 outline-none placeholder:text-sm"
        />
        <button className="bg-[#C9184A] px-5 py-2 rounded-lg text-white ">
          ADD
        </button>
      </form>
    </div>
  );
};

export default TodoForm;
