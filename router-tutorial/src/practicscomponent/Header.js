import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

function Header() {

  const NavigateHeader = styled.div`
    height: 100px;
    width: 100%;
    background-color: #4dabf7;
    align-content: center;    
  `;

  const NavItem = styled.button`
    display: inline-flex;
    height: 80;
    font-size: 2rem;
    align-content: center;
    justify-content: center;
    border: none;
    background-color: rgba(255, 255, 255, 0);
    color: white;
    margin: 1rem;
    &:hover {
      text-decoration: underline;
    }
  `;

  const nav = useNavigate();
  
  const goHome = () => {
    nav('/');
  }

  const goBoard = () => {
    nav('/board');
  }

  const goMyPage = () => {
    nav('/mypage');
  }

  return(
    <>
      <NavigateHeader>
        <NavItem onClick={goHome}>홈</NavItem>
        <NavItem onClick={goBoard}>게시판</NavItem>
        <NavItem onClick={goMyPage}>마이페이지</NavItem>
      </NavigateHeader>
    </>
  );

}
export default Header;