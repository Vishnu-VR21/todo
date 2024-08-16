import React from 'react'

function InputContainer({input , writeInput , addTodos}) {
  return (
    <div className='input_container'>
        <input type="text" value={input} onChange={writeInput}/>
        <button onClick={addTodos}>+</button>
    </div>
  )
}

export default InputContainer
