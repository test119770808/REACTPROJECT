import React from "react";
import { Link, Outlet } from "react-router-dom";

function Board() {

  return (
    <div>
      <h3>게시글 목록</h3>
      <ul>
        <li><Link to='/board/1'>글1</Link></li>
        <li><Link to='/board/2'>글2</Link></li>
        <li><Link to='/board/3'>글3</Link></li>
      </ul>
      <hr />
      {/* <Outlet>을 사용하여 하위 컴포넌트를 출력 */}
      <Outlet />
    </div>
  );
}

export default Board;