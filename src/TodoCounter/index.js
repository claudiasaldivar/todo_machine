import React, {useContext} from 'react';
import { TodoContext } from '../TodoContext';
import './TodoCounter.css';

function TodoCounter() {
  const value = useContext(TodoContext)
  const {totalTodos, completedTodos} = value
    return (
      <h2 className="TodoCounter">Has completado {completedTodos} de {totalTodos} TODOs</h2>
    );
  }
  
  export { TodoCounter };