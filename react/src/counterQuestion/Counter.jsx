import React, { useState } from "react";
import { useEffect } from "react";

const Countter = ({}) => {
  const [count, setCount] = useState(0);
  const [num, setNum] = useState(1);
  const handleClick = () => {
    // setCount(count + num);
    setCount((prevCount) => prevCount + num);
  };
  const handleDecrement = () => {
    if (count === 0) return;
    // setCount(count - num);
    // dont use this way because of closure issue, it will always refer to the initial value of count which is 0, so it will never decrement the count.
    setCount((prevCount) => prevCount - num);
  };

  useEffect(() => {
    console.log("Count updated:", count);
    setCount(count + num);
  }, [num]);

  return (
    <div>
      <h1>Counter : {count}</h1>
      <input
        type="number"
        value={num}
        onChange={(e) => setNum(Number(e.target.value))}
      />
      <button onClick={handleClick}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
      <button onClick={() => setCount(0)}>Reset</button>
    </div>
  );
};

export default Countter;
