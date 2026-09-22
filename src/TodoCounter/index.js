import { TodoContext } from '../TodoContext';
import './TodoCounter.css';
import React from 'react';

function TodoCounter() {

  const {
    completedTodos,
    totalTodos,
  } = React.useContext(TodoContext);

  return (
    <h1>
      Haz completado {completedTodos} de {totalTodos} ToDo's</h1>

  );
}

export { TodoCounter };