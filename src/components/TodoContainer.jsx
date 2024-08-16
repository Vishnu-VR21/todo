import React from 'react'
import Todo from './Todo'

function TodoContainer({todos , deleteTask}) {
  return (
    <div className='output_container'>
        {todos.map((todo , index)=>{
            return (
                <Todo todo={todo} index={index} deleteTask={deleteTask}/>
            )
        })}
    </div>
  )
}

export default TodoContainer
