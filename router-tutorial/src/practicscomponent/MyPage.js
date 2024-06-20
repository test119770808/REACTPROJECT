import React from "react";
import { Navigate } from "react-router-dom";

function MyPage(props) {

  // Navigate 컴포넌트
  // console.log(props);
  const {login, name, age, description} = props.login;
  if(!login) {
    return <Navigate to='/' replace={true} />
  }  

  return (
    <div>
      여기는 로그인한 사용자만 접근 가능합니다.... 
      <h2>로그인 사용자 : {name}</h2>
      <h4>나이 : {age}</h4>
      <h4>설명 : {description}</h4>
    </div>
  );

}
export default MyPage;