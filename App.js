import React from "react";
import AppNavigator from "./src/navigation/AppNavigator";
import { TodoProvider } from "./src/context/TodoContext"; 
 
export default function App() {
  return (
   <TodoProvider> 
      <AppNavigator />
    </TodoProvider> 
  );
}

