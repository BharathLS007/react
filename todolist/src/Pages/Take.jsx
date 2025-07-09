import React from "react";

function Take({opt}) {
  return (
    <div>
      <div className="Task">
        <p>{opt}</p>
        <div className="action">
          <input type="checkbox" />
          <button>Delete</button>
        </div>
      </div>
    </div>
  );
}

export default Take;
