import React from "react";
import { useNavigate } from "react-router-dom";

function Header() {

  // useNavigate()훅
  let nav = useNavigate();

  const goHome = () => {
    nav('/');
  }
  const goBoard = () => {
    nav('/board');
  }
  const goUser = () => {
    nav('/user')
  }
  return (
    <div>
      <button onClick={() => nav(-1)}>Go Back</button>
      <button onClick={goHome}>홈으로 이동</button>
      <button onClick={goBoard}>게시판으로 이동</button>
      <button onClick={goUser}>사용자정보로 이동</button>
      <button onClick={() => nav(1)}>Go Forward</button>
    </div>
  )

}

export default Header;