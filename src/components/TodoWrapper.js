import React,{useState} from 'react'
import TodoForm from './TodoForm'
import Todo from './Todo';
import EditToDoForms from './EditToDoForms';
import { v4 as uuidv4 } from "uuid";

const TodoWrapper = () => {
   
  const [todos,setTodos] = useState([]);

  const addTodo = (todo)=> {
    setTodos([...todos,{id: uuidv4(), task: todo, completed: false, isEditing: false},]);
  }

  const toggleComplete = (id) => {
    setTodos(todos.map(todo => todo.id === id ? {...todo, completed:!todo.completed} : todo ))
  }

  const deleteTodo = (id) => setTodos(todos.filter((todo => todo.id !== id)))

  const editTodo = (id) =>{
    setTodos(
      todos.map((todo) => todo.id === id ? {...todo, isEditing : !todo.isEditing}: todo)
    );
  } 

  const editTask = (task,id) => {
    setTodos(todos.map(todo => todo.id === id ? {...todo,task,isEditing: !todo.isEditing} : todo))
  }

  return (
    <div className='TodoWrapper'>
        <TodoForm addTodo1={addTodo} />
        {todos.map((todo,index) => (
            todo.isEditing ? 
            ( <EditToDoForms editTask={editTask} task={todo}/> )
            :
            ( <Todo 
            task={todo} 
            key={index} 
            toggleComplete={toggleComplete} 
            deleteTodo={deleteTodo} 
            editTodo={editTodo}
            /> )
        ))}
    </div>
  )
}

export default TodoWrapper