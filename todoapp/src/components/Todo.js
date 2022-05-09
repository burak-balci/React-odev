
function Todo({ todo, text, newTodo, setNewTodo,}) {

 const completed = () => {
   setNewTodo(newTodo.map((item) => {
     if (item.id === todo.id) {
       return{...item,completed: !item.completed}
     }
     return item
   }))
 }

  const onClickDelete = () => {
    setNewTodo(newTodo.filter((item) => item.id !== todo.id));
  };

  return (
    <>
      <li id="key" className={`${todo.completed ? "completed" : ""} `}>
        <div className="view">
          <input onChange={completed} checked={todo.completed} className="toggle" type="checkbox" />
          <label>{text}</label>
          <button onClick={onClickDelete} className="destroy"></button>
        </div>
      </li>
    </>
  );
}

export default Todo;
