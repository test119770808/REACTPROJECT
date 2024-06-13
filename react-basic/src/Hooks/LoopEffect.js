import React, { useState } from "react";

function LoopEffect() {
  // useState
  const [name, setName] = useState({name: '홍길동'});

  // 이하 무한 루프 발생... 
  React.useEffect(() => {
    const copy = {...name};  // 객체 전개문(spread)
    setName(copy);
  },[name]);

  return (
    <div>
      생략....
    </div>
  )
}

export default LoopEffect;