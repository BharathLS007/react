import { useState } from "react";
import "./App.css";
import Todo from "./Pages/Todo";
import What from "./Pages/What";


function App() {
  const [inputvalue, setvalue] = useState('');
  const [outputvalue, outvalue] = useState([]);

  function write(e) {
    setvalue(e.target.value);
  }

  function hanadletask() {
    if (inputvalue != '') {
      outvalue((prevhanadletask) => [...prevhanadletask, inputvalue]);
      setvalue('');
    }
  }
 
   function deltodo(todoindex){
    outvalue((prevtodos)=>{
     return prevtodos.filter((prevtodos,prevtodosindex)=>{
         return prevtodosindex!=todoindex;
      })
    })
   }
  console.log(outputvalue);

  return (
    <main>
      <h1>To Do List</h1>
      <Todo inputvalue={inputvalue} write={write} hanadletask={hanadletask} />
      <What outputvalue={outputvalue} deltodo={deltodo}/>

    </main>
  );
}

export default App;