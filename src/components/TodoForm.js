import React, { useState } from 'react'

const TodoForm = ({addTodo1}) => {
    const [value,setValue] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
    
        addTodo1(value);
        setValue("");
    }

  return (
    <div>
        <form className='TodoForm' onSubmit={handleSubmit}>
            <input
              type='text'
              className='todo-input'
              placeholder='Enter your task'
              onChange={(event)=>setValue(event.target.value)}
              value={value}
            />
            <button type='submit' className='todo-btn'>Add Task</button>
        </form>
    </div>
  )
}

export default TodoForm
