import React, { useState } from "react";

function InputSample() {

  const [text, setText] = useState('');

  // change이벤트 객체
  const onChange = (e) => {
    // console.log(e);
    // console.log(e.target);
    // console.log(e.target.value);
    setText(e.target.value);
  };

  // 초기화 버튼 이벤트
  const onReset = () => {
    setText('');
  }

  return(
    <div>
      <input type="text" onChange={onChange} value={text}/>
      <button onClick={onReset}>초기화</button>
      <div>
        <b>값 : {text} </b>
      </div>
    </div>
  );
}

export default InputSample;