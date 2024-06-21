// useState 사용하는 카운터... 
import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState<number>(0);
  // 어떨때 사용하지? 
  type Infomation = {name: string; description: string};
  const [info, setInformation] = useState<Infomation|null>(null);

  const onIncrease = () => setCount(count + 1);
  const onDecrease = () => setCount(count - 1);

  return (
    <div>
      <h1>{count}</h1>
      <div>
        <button onClick={onIncrease}>+1</button>
        <button onClick={onDecrease}>-1</button>
      </div>
    </div>
  );
}

export default Counter;