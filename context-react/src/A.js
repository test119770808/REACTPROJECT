import React from 'react';
import UserContext from './ContextAPI2';

const A = () => {
  //useRef 훅
  const input1 = React.useRef(null);
  const input2 = React.useRef(null);

  // useContext 훅을 이용해서 값 조회 또는 값 변경
  const {state, action} = React.useContext(UserContext);

  const handleClick = () => {
    action.setUser({
      id: input1.current.value,
      name: input2.current.value
    });
    input1.current.value = '';
    input2.current.value = '';
  }

  return (
    <div>
      <h3>A컴포넌트</h3>
      <input type='text' ref={input1} />
      <input type='text' ref={input2} />
      <button onClick={handleClick}>데이터 변경</button>

      <div>
        {state.id}<br />
        {state.name}<br />
      </div>
    </div>
  );
}

export default A;