import {React,useState} from 'react'
import ToDoList from './components/ToDoList'

export default function App() {

  const [mission,SetMisson] = useState('')

   
  
  


  const AddHanler = (data) => { 

    console.log(mission);

    SetMisson(() => (
      SetMisson(data) 
    ))
} 


  return (
    <div> 
      <ToDoList mission={mission} SetMisson={SetMisson} AddHanler={AddHanler} /> 
    </div>
  )
}
