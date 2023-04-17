import React from 'react'
import TodoForm from './components/TodoForm'
import { useState } from 'react'
import TodoList from './components/TodoList'
import {ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import TodoFilter from './components/TodoFilter'

const App = () => {
  const [todos, setTodos] = useState(["İkbal", "İkbal Boztepe"])

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo, index) => index !== id))
  }

  return (
    <>
    <ToastContainer/>
    <TodoForm setTodos={setTodos} todos={todos}/>
    <TodoList todos={todos} deleteTodo={deleteTodo} />
    {/* <TodoFilter /> */}
    </>
    
  )
}

export default App
