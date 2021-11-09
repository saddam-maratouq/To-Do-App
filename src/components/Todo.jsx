import React from "react"; 
import Result from './Result'


export default function Todo({mission,SetMisson}) { 

    const deleteHandler = (e,clickedId) => { 

      const Delete =   mission.filter((item,id) => clickedId !== id  ) 

      SetMisson(Delete) 
    } 



  return (
    <div>
      {mission.map(({ tasks }, id) => ( 

        <Result tasks={tasks} id={id} key={id}  deleteHandler={deleteHandler} />
      ))}
    </div>
  );
}
