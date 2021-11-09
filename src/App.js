import {React,useState} from 'react'
import ToDoList from './components/ToDoList'

export default function App() {

  const [mission,SetMisson] = useState([])

   
  
  


  const AddHanler = (data) => { 

    console.log(data);

   SetMisson([...mission,data]) 
} 


  return (
    <div> 
      <ToDoList  AddHanler={AddHanler} mission={mission} SetMisson={SetMisson} />  
    </div>
  )
}
