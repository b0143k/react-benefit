import React, { useEffect, useState } from 'react';
import './todo.css';
import AddTask from './addtask';
import ListTasks from './listTasks';

function Todo(){
  const [tasks, setTasks] = useState([])
  useEffect(()=>{
    document.title = `You have ${tasks.length} pending tasks.` 
  })

  const addTask =(title)=>{
    const newTask = [...tasks, {title}];
    setTasks(newTask);
  }

  const removeTask = (index)=>{
    const newTask = [...tasks]
    newTask.splice(index, 1)
    setTasks(newTask)
  }
   return(
    <>
    <div className='Todo-container'>
      <div className='Header'>Todo App</div>
      <div className='Add-task'>
        <AddTask addTask={addTask}/>
      </div>
      <div className='List-tasks'>
     
      {
        tasks.map((task, index)=>(
          <ListTasks task={task} removeTask={removeTask} index={index} key={index}/>
        ))
      }
      
      </div>
    </div>
    </>

)
  
}

export default Todo;