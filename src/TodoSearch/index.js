import React from 'react';


function TodoSearch({searchValue, setSearchValue}) {

  return (
    <input 
    value={searchValue}
    onChange={(event) => {
      setSearchValue(event.target.value);
    }}
    placeholder="Filtrar tareas..." 
    style={{
      padding:10,
      fontSize: 15,
      backgroundColor: "black",
      color: "aliceblue",
    }}/>

  );
}

export { TodoSearch };