import React from "react";


/* 
props.children 
  -> 컴포넌트 태그 사이에 넣은 값을 조회하고 싶을 때, props.children을 조회해서 사용... 
*/
function Wrapper(props) {
  const style = {
    border: '2px solid black',
    padding: '16px',
  };

  // console.log(props);

  return (
    <div style={style}>
      {props.children}  {/* children으로 들어온 컴포넌트를 랜더링에 추가함... */}
    </div>
  );
}

export default Wrapper;