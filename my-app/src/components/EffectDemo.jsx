import { useState, useEffect } from "react";

function EffectDemo() {
  const [count, setCount] = useState(0);

 
  useEffect(() => {
    console.log("Count changed:", count);
  }, [count]); 

  return (
    <div>
      <h2>Count: {count}</h2>
      <button onClick={() => setCount(count + 1)}>Increase</button>
    </div>
  );
}

export default EffectDemo;
