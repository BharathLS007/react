import React from "react";

function Take({opt,index,deltodo}) {
  return (
    <div>
      <div className="Task">
        <p>{opt}</p>
        <div className="action">
          <input type="checkbox" />
          <button onClick={()=>deltodo(index)}>Delete</button>
        </div>
      </div>
    </div>
  );
}

export default Take;
