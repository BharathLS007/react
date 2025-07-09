import React from "react";

function Todo({inputvalue, write,hanadletask}) {
  return (
    <div className="container">
      <div className="ToDo">
        <input type="text" placeholder="Enter your Task" value={inputvalue} onChange={write}/>
      </div>
      <button onClick={hanadletask}>+</button>
    </div>
  );
}

export default Todo;
