import React from "react";

function Counter() {
  //  useState를 사용해서 +1이면 값을 1씩 증가... 
  //   -1 버튼 클릭이면 1씩 감소 처리...


  return (
    <div>
      <h1>0</h1>
      <button>+1</button>
      <button>-1</button>
    </div>
  );
}

export default Counter;