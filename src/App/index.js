import React from 'react';
import { AppUI } from './AppUI';
import './App.css';
import { useLocalStorage } from './useLocalStorage';

function App() {
  const {
    // renombradas
    item: todos,
    saveItem: saveTodos,
    loading,
    error,
  } = useLocalStorage('ToDos_v1', []);
  const [searchValue, setSearchValue] = React.useState('');

  // !! vuelve booleano todo
  const completedTodos = todos.filter(todo => !!todo.completed).length;
  const totalTodos = todos.length;


  const searchedTodos = todos.filter(
    (todo) => {
      const todoText = todo.text.toLowerCase();
      const searchText = searchValue.toLowerCase();
      return todoText.includes(searchText);
    }
  );


  const completeTodo = (text) => {
    // crear una copia de los todos con ...
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex(
      (todo) => todo.text === text);
    newTodos[todoIndex].completed = true;
    saveTodos(newTodos);
  }

  const deleteTodo = (text) => {
    // crear una copia de los todos con ...
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex(
      (todo) => todo.text === text);
    newTodos.splice(todoIndex, 1);
    saveTodos(newTodos);
  }
  return (
    <AppUI
      loading={loading}
      error={error}
      completedTodos={completedTodos}
      totalTodos={totalTodos}
      searchValue={searchValue}
      setSearchValue={setSearchValue}
      searchedTodos={searchedTodos}
      completeTodo={completeTodo}
      deleteTodo={deleteTodo}
    />
  )
}

export default App;
