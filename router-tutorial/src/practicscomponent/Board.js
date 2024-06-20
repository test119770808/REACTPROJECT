import React from "react";
import { NavLink, Outlet } from "react-router-dom";

function Board() {

  const myStyle = {
    background: "black",
    color: "white"
  };
  return (
    <div>
      <hr />
      <h3>게시글 목록</h3>
      <ul>
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