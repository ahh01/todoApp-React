import React, { createContext, useContext, useState } from "react";

// Skapa TodoContext
const TodoContext = createContext();

// Hook för att använda contextet
export const useTodos = () => useContext(TodoContext);

// Provider-komponent
export const TodoProvider = ({ children }) => {
  const [todos, setTodos] = useState([]);

  return (
    <TodoContext.Provider value={{ todos,setTodos }}>
      {children}
    </TodoContext.Provider>
  );
};