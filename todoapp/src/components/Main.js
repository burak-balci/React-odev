import { useState } from "react";
import Todo from "./Todo";

function Main({ newTodo, setNewTodo }) {
  const [allSelected, setAllSelected] = useState(true);
  // const [alert,setAlert] = useState(true)

  const allSelectedHandler = () => {
    setNewTodo(
      newTodo.map((item) => {
        return { ...item, completed: allSelected };
      })
    );
    setAllSelected(!allSelected);
  };

  // useEffect(() => {
  //   setTimeout(() => {
  //     setAlert(!alert)
  //   }, 6000);
  // },[])

  return (
    <section className="main">
      {/* {!allSelected && alert &&
        <div className="alert alert-success" role="alert">
        Mark all as complete
        </div>
      } */}
      <input className="toggle-all" type="checkbox" />
      <label onClick={allSelectedHandler} htmlFor="toggle-all">
      </label>

      <ul className="todo-list">
        {newTodo.map((todo) => (
          <Todo
            todo={todo}
            text={todo.value}
            key={todo.id}
            newTodo={newTodo}
            setNewTodo={setNewTodo}
          />
        ))}
      </ul>
    </section>
  );
}

export default Main;
