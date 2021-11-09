import React, { useState } from 'react'
import Result from './Result'

export default function ToDoList({mission,SetMisson,AddHanler}) {  

  const[Show,SetShow] = useState(false)

    const misssionHandler = (e) => {
        const key = e.target.id

        if(key === 'mission') {
            
        SetMisson(e.target.value) 
        }
     
    } 

    const SubmitHandler = (e) => {
        console.log(mission);  
        e.preventDefault()


     

        AddHanler(

            mission 
    ) 

        SetMisson('') 

        SetShow(!Show) 

    } 
    



    return (
        <div> 
            <form onSubmit={SubmitHandler}> 
            <h1> what do you think to do today </h1>
            <input type="text" placeholder='Add Mission' id='mission' value={mission}  onChange={misssionHandler}/> 

            <button type='submit'>  Add Mission   </button>  

          

            {Show && 
          <Result mission={mission}  />

             
            }   
            </form> 
        </div>
    )
}
