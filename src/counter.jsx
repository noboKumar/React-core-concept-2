import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);
  const handleIncrement = () => {
    setCount(count + 1);
  };
  return (
    <div className="box">
      <h3>Count: {count}</h3>
      <button onClick={handleIncrement}>increment</button>
    </div>
  );
}
export default Counter;
