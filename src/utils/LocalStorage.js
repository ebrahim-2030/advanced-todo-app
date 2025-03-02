// Loads todos from localStorage; returns an empty array if none exist
export const loadTodos = () => {
  const savedTodos = localStorage.getItem("todos");
  return savedTodos ? JSON.parse(savedTodos) : [];
};

// Saves todos to localStorage as a JSON string
export const saveTodos = (todos) => {
  localStorage.setItem("todos", JSON.stringify(todos));
};
