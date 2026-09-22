import React from 'react';
import { TodoContext } from '../TodoContext';


function TodoSearch() {
  const {
    searchValue,
    setSearchValue,
  } = React.useContext(TodoContext);

  return (
    <input
      value={searchValue}
      onChange={(event) => {
        setSearchValue(event.target.value);
      }}
      placeholder="Filtrar tareas..."
      style={{
        padding: 10,
        fontSize: 15,
        backgroundColor: "black",
        color: "aliceblue",
      }} />

  );
}

export { TodoSearch };