import React from "react";
import { useParams } from "react-router-dom";
import Header from "./Header";

function Info() {

  // useParams() 훅
  let param = useParams();
  console.log(param);

  return(
    <div>
      <Header />
      <hr />
      <h2>{param.num}번 Info 페이지</h2>
      <p>이 페이지는 React Router를 이용한 페이지 처리 결과 입니다.</p>
    </div>
  );

}

export default Info;