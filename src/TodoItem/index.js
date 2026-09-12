import './TodoItem.css';

function TodoItem(props) {
  return (
    <li>
      <span 
      className={`Icon Icon-check ${props.completed && "Icon-check--active"}`} 
      style={{
        color: 'green',
        fontSize: 24,
        fontWeight: 'bold'
      }}
      onClick={props.onComplete}
      >✔️</span>

      <p className={`TodoItem-p ${props.completed && "TodoItem-p--complete"}`}>{props.text}</p>

      <span className={`Icon Icon-delete`} style={{
        fontSize: 20,
        fontWeight: 'bold'
      }}
      onClick={props.onDelete}>❌</span>
    </li>
  );
}

export { TodoItem };