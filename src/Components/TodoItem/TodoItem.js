import './TodoItem.css'
function TodoItem(props) {
  return (
    <li 
      className="todoList-todoItem">
      <div 
        className="todoList-todoItem-container">
        <span 
          className={`icon icon-check ${props.completed && "icon-check--active"}`} 
          onClick={props.onComplete}>
          <i 
            className="fa-solid fa-check"></i>
        </span>
        <p className={`todoItem-text ${props.completed && "todoItem-text--complete"}`}>
          {props.text}
        </p>
      </div>

      <span 
      className="icon icon-deleted icon-deleted"
      onClick={props.onDelete}>
        <i 
        className="fa-solid fa-square-minus"></i>
      </span>
    </li>
  );
}
export { TodoItem };
