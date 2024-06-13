import React, { useEffect } from "react";

function HookEffect() {
  /* 렌더링 시마다 동작 */
  useEffect(() => {
    console.log(`랜더링 완료`);
  });

  /* mount로 렌더링 이후에 실행 하지 않는 경우 */
  useEffect(() => {
    console.log(`처음만 실행하는 경우 입니다.`)
  }, []);

  // useState
  const [name, setName] = React.useState('');
  const handleName = (e) => {
    setName(e.target.value);
  };

  useEffect(() => {
    console.log(`name이 업데이트시 실행됩니다.`)
  }, [name]);

  return (
    <div>
      이름 : <input type="text" onChange={handleName} /><br />
      이름 : {name}
    </div>
  );
}

export default HookEffect;