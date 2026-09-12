function CreateTodoBtn() {
  return (
    <button 
    onClick={(event) => {console.log('Click')
      console.log(event)
      console.log(event.target)
    }}
    style={{
      padding: 10,
      margin: 10,
      textAlign: "center",
      background: "black",
      color: "aliceblue",
      fontWeight: "bold",
    }}
    >+</button>
  );
}

export { CreateTodoBtn };