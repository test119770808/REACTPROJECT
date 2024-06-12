// useState를 하나로 관리하기... 
import React, { useState } from "react";

const EventComponent2 = () => {
  const [form, setForm] = useState({name: '',topic: ''}); // 객체 state

  let handleChange = (e) => {

  }

  let handleClick = () => {
    
  }
  return(
    <div>
      <h3>리액트 이벤트 핸들링(객체로 핸들링)</h3>
      <input 
        type="text" 
        name="name" 
        onChange={handleChange} 
        value={form.name} 
      /><br/>
      <h3>변화된 값 : {form.name}</h3>
      <input 
        type="text"
        name="topic"
        onChange={handleChange} 
        value={form.topic}
      /><br />
      <h3>체인지 된 결과 : {form.topic}</h3>
      <button type="button" onClick={handleClick}>클릭미</button>
    </div>
  );

}

export default EventComponent2;