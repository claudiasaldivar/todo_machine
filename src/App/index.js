//import './App.css';
import React from "react";
import { TodoProvider } from "../TodoContext";
import { AppUI } from './AppUi';

// const todosDefault = [
//   { text:'cortar cebolla', completed: true },
//   { text:'tomar curso', completed: false },
//   { text:'cortar codigo', completed: false }
// ]

function App() {
  return (
  <TodoProvider>
    <AppUI />
  </TodoProvider>
  );
}

export default App;
