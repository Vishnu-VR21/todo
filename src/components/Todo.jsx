import React from 'react'

function Todo({todo , index , deleteTask}) {
    return (
        <div className='todo'>
            <p>{todo}</p>
            <div className='action'>
                <input type="checkbox" />
                <button onClick={()=> deleteTask(index)}>delete</button>
            </div>
        </div>
)}

export default Todo
