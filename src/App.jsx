/* eslint-disable react/jsx-key */
import { useState } from 'react';
import './App.css';

function App() {
  const[toDos,setToDos]=useState([])
  const[toDo,SetToDo]=useState('')

  
  return (
    <div className="app">
    <div className="mainHeading">
      <h1>ToDo List</h1>
    </div>
    <div className="subHeading">
      <br />
      <h2>Whoop, its Wednesday 🌝 ☕ </h2>
    </div>
    <div className="input">
      <input type="text" value={toDo} onChange={(e)=>SetToDo(e.target.value)}  placeholder="🖊️ Add item..." />
      <i onClick={()=>setToDos([...toDos,{id:Date.now(), text:toDo,status:false}]) & SetToDo('')}  className="fas fa-plus"></i>
    </div>
    <div className="todos">
      {toDos.map((obj)=>{
        return(<div className="todo">
        <div className="left">
          <input onChange={(e)=>{
             console.log(e.target.checked)
             console.log(obj)
             setToDos(toDos.filter(obj2=>{
              if(obj2.id===obj.id){
                obj2.status=e.target.checked
              }
              return obj2
         

             }))
 

          }}
          value={obj.status} type="checkbox" name="" id="" />
          <p>{obj.text}</p>
        </div>
        <div className="right">
        
          <i className="fas fa-times" onClick={()=>{
                setToDos(toDos.filter(obj2 => {
                  let temp;
                  if (obj2.id != obj.id){
                    temp = obj2
                  }
                  return temp;
                }));
              }} ></i>
        </div>
      </div>)
      })}
      
    </div>
  </div>
);
}

export default App;