import {useState,useEffect} from 'react'
import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'
import "./App.css"

function App() {

  const [newTodo,setNewTodo] = useState([])

  useEffect(() => {
    localStorage.setItem("Todo",JSON.stringify(newTodo))
  },[newTodo])

  const todo = JSON.parse(localStorage.getItem("Todo"))

  useEffect(() => {
    setNewTodo(todo)
  },[])

  return (
    <>

    <section className="todoapp">
    <Header setNewTodo={setNewTodo} newTodo={newTodo}/>
    <Main newTodo={newTodo} setNewTodo={setNewTodo}/>
    <Footer newTodo={newTodo}/>
    </section>

    </>
  )
}

export default App