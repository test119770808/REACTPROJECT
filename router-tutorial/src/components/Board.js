import React from "react";
import { Link, NavLink, Outlet } from "react-router-dom";
import Header from "./Header";

function Board() {

  const myStyle = {
    background: "black",
    color: "white"
  };
  return (
    <div>
      <Header />
      <hr />
      <h3>게시글 목록</h3>
      <ul>
        {/* <li><Link to='/board/1'>글1</Link></li>
        <li><Link to='/board/2'>글2</Link></li>
        <li><Link to='/board/3'>글3</Link></li> */}
        {/* NavLink 사용 */}
        <li>
          <NavLink to='/board/1' style={({isActive}) => {
            return isActive ? myStyle : undefined
          }}>
            글1
          </NavLink>
        </li>
        <li><NavLink to='/board/2' 
          style={({isActive}) => {return isActive ? myStyle : undefined}}>글2</NavLink>
        </li>
        <li><NavLink to='/board/3' 
          style={({isActive}) => {return isActive ? myStyle : undefined}}>글3</NavLink>
        </li>
      </ul>
      <hr />
      {/* <Outlet>을 사용하여 하위 컴포넌트를 출력 */}
      <Outlet />
    </div>
  );
}

export default Board;