import React, { useState } from 'react'

const EditTodoForm = ({editTask,task}) => {
   
    const [value,setValue] = useState(task.task);

    const handleSubmit = (event) => {
        event.preventDefault();
    
        editTask(value,task.id);
        
    }

  return (
    <div>
        <form className='TodoForm' onSubmit={handleSubmit}>
            <input
              type='text'
              className='todo-input'
              placeholder='Update your task'
              onChange={(event)=>setValue(event.target.value)}
              value={value}
            />
            <button type='submit' className='todo-btn'>Update Task</button>
        </form>
    </div>
  )
}

export default EditTodoForm
