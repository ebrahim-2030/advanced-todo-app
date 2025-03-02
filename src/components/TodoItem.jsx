import React from "react";
import { FaTrashCanArrowUp } from "react-icons/fa6";
import { IoIosCheckmarkCircle } from "react-icons/io";

const TodoItem = ({ todo, toggleTodo, deleteTodo }) => {
  return (
    <li className="mt-2 flex items-center justify-between dark:bg-[#ffffff22] shadow border border-[#ccc8] dark:border-[#ffffff44] px-3 py-3 rounded-xl">
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
        <FaTrashCanArrowUp className="h-10 text-[#ef233c]" />
      </button>
    </li>
  );
};

export default TodoItem;
