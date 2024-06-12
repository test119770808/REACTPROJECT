import React, { useState } from "react";

function EventComponent() {
  const [name, setName] = useState('');
  let handleName = (e) => { /* 2. 이벤트 객체 활용 */
    console.log(e.target.value);
    setName(e.target.value); /* 3. state변경 및 input value변경 */
  }

  return(
    <div>
      <h3>리액트 이벤트 핸들링</h3>
      <input type="text" name="name" onChange={handleName}
      value={name} /><br />  {/* 1. 이벤트 연결 */}
      <h3>체인지 된 결과 : {name}</h3>
    </div>
  );
}

export default EventComponent;