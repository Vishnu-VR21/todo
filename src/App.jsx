import './App.css'
import InputContainer from './components/inputContainer'
import TodoContainer from './components/TodoContainer'
import { useState } from 'react'

function App() {
  const [input, setInput] = useState('')
  const [todos, setTodos] = useState([])

  function writeInput(e){
    setInput(e.target.value)
  }

  function addTodos(){
    if (input!=''){
      setTodos((prevTodos)=> [...prevTodos , input])
      setInput('')
    }
  }
  
  function deleteTask(todoIndex) {
    setTodos((prevTodos) => prevTodos.filter((prevTodos , prevTodosIndex) => {
      return (
        prevTodosIndex != todoIndex
      )
    }))
  }

  return (
    <main>
      <h1>To Do List</h1>
      <InputContainer input={input} writeInput={writeInput} addTodos={addTodos}/>
      <TodoContainer todos={todos} deleteTask={deleteTask}/>
    </main>
  )
}

export default App
