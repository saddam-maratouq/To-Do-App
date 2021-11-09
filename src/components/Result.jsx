import React from 'react'

export default function Result({tasks,id,deleteHandler}) {
    console.log(tasks);
    return (
        <div>
            <ul>
              
                <li> {tasks}</li>    

            </ul>  
            <input type='checkbox'  /> 
            <button onClick={(e) => deleteHandler(e,id)}    >x</button>
        </div>
    )
}

