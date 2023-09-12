import React from "react";

const AddCounter = ({ addButton, counters }) => {
  return (
    <div className="addCounter">
      {counters.length < 3 && <button onClick={addButton}>Add Counter</button>}
    </div>
  );
};

export default AddCounter;
