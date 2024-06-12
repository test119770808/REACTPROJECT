import React, { useRef, useState } from "react";
// useRef 확인.... 

function InputSample2() {

  const [inputs, setInputs] = useState({
    name:'',
    nickname:''
  });

  // useRef 
  const nameInput = useRef();
  console.log('초기화 버튼 클릭 전')
  console.log(nameInput);

  const {name, nickname} = inputs;
  const onChange = e => {
    const { value, name} = e.target;
    setInputs({
      ...inputs,
      [name]:value
    });
  };

  const onReset = () => {
    setInputs({
      name: '',
      nickname: ''
    });
    // nameInput의 현재 Ref에 포커스 동작
    nameInput.current.focus();
    console.log(nameInput);
  }

  return(
    <div>
      <input 
        name="name" 
        placeholder="이름" 
        onChange={onChange} 
        value={name}
        ref={nameInput}
      />
      <input name="nickname" placeholder="닉네임" onChange={onChange} value={nickname}/>
      <button onClick={onReset}>초기화</button>
      <div>
        <b>값 : </b>
        {name} ({nickname})
      </div>
    </div>
  );
}

export default InputSample2;