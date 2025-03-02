import React from "react";
import { FaTrashCanArrowUp } from "react-icons/fa6";
import { IoIosCheckmarkCircle } from "react-icons/io";

const TodoItem = ({ todo, toggleTodo, deleteTodo }) => {
  return (
    <li className="mt-2 flex items-center justify-between bg-[#ffffff22] px-3 py-3 rounded-xl">
      <div className="flex items-center gap-4">
        <button
          onClick={() => toggleTodo(todo.id)}
          className="border-2  border-[#ffffff44] rounded-full h-6 w-6"
        >
          {todo.completed ? (
            <IoIosCheckmarkCircle className="h-full w-full text-[#02BC7D]" />
          ) : (
            ""
          )}
        </button>
        <span>{todo.text}</span>
      </div>
      <button onClick={() => deleteTodo(todo.id)}>
        <FaTrashCanArrowUp className="h-10 text-[#E63946]" />
      </button>
    </li>
  );
};

export default TodoItem;
  