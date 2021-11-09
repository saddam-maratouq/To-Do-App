import React, { useState,useEffect } from 'react'
import Todo from './Todo'

export default function ToDoList({AddHanler,mission,SetMisson}) { 

    const [todo,SetTodo] = useState({
        id : '', 
        tasks : '' , 

    }) 


    const taskHandel = (e) => {
        SetTodo({...todo, tasks : e.target.value}) 

    }  

  

    const submitHandler = (e) => {
        e.preventDefault()  

        if (todo.tasks) {
            AddHanler({
                
                ...todo , 
                id :   Math.round(Math.random() *1000), 
              
            })
        }
       
        

    }

    return ( 
        <div>  
      <form   onSubmit={submitHandler}>
                <h1> what do you think to do today</h1> 


          <input type="text" placeholder='Add Mission' id='mission' value={todo.tasks} onChange={taskHandel} /> 
          <button  type='submit'>  Add  </button>


      </form>
      
      <Todo  mission={mission}  SetMisson={SetMisson}  />

     

      </div>
    )
}
