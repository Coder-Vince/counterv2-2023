import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";

const Counter = ({ counters, setCounters }) => {
  const counter = counters.map((count, index) => {
    const increment = () => {
      const newCounter = [...counters];
      newCounter[index]++;
      setCounters(newCounter);
    };
    const decrement = () => {
      const newCounter = [...counters];
      newCounter[index]--;
      setCounters(newCounter);
    };
    const reset = () => {
      const newCounter = [...counters];
      newCounter[index] = 0;
      setCounters(newCounter);
    };

    let align = "center";
    if (count < 0) {
      align = "start";
    } else if (count >= 10) {
      align = "end";
    }

    return (
      <div className="main" key={index}>
        <div className="buttons">
          {count >= 0 && (
            <button className="signs" onClick={decrement}>
              <FontAwesomeIcon icon={faMinus} size="2xl" />
            </button>
          )}
          <button className="count">{count}</button>
          {count < 10 && (
            <button className="signs" onClick={increment}>
              <FontAwesomeIcon icon={faPlus} size="2xl" />
            </button>
          )}
        </div>
        <div className="reset" style={{ justifyContent: align }}>
          <button className="resetButton" onClick={reset}>
            Reset
          </button>
        </div>
      </div>
    );
  });
  return <div className="counter"> {counter}</div>;
};

export default Counter;
