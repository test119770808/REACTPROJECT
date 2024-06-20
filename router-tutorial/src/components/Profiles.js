import React from "react";
import { Link, Outlet, Route, Routes } from "react-router-dom";
import User from "./User";
import Header from "./Header";

function Profiles () {

  return(
    <div>
      <Header />
      <hr />
      <h3>사용자 목록 : </h3>
      <ul>
        <li>
          <Link to="/profiles/testuser">testuser</Link>
        </li>
        <li>
          <Link to="/profiles/testuser2">testuser2</Link>
        </li>
      </ul>

      {/* <Outlet /> */}
      {/* 하위 경로 설정...  */}
      <Routes>
        <Route 
          path="/"
          element={<div>유저를 선택하세요.</div>}
        />
        <Route path=":username" element={<User />} />
      </Routes>
    </div>
  );

}

export default Profiles;