import {useState, useEffect} from "react";
import { v4 as uuidv4 } from 'uuid';

function Header({setNewTodo,newTodo}) {

    const [addTodo,setAddTodo] = useState("")

    const onChangeHandle = (e) => {
        setAddTodo(e.target.value)
    }

    const onSubmitHandle = (e) => {
      console.log(newTodo)
        e.preventDefault()
        setNewTodo([...newTodo,{value:addTodo,id:uuidv4(),completed:false}])   
    }

    useEffect(() => {
        setAddTodo("")
    },[newTodo])

  return (
    <div className="header">
      <h1>todos</h1>
      <form onSubmit={onSubmitHandle}>
        <input
        onChange={onChangeHandle}
        value={addTodo}
          className="new-todo"
          placeholder="What needs to be done?"
          autoFocus
          required
        />
      </form>
    </div>
  );
}

export default Header;
