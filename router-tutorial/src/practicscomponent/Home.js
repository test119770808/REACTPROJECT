import React, { useState } from "react";
import { Link, Route, Routes } from "react-router-dom";
import Header from "./Header";
import Board from "./Board";
import BoardContent from "./BoardContent";
import MyPage from "./MyPage";


const users = {
  testuser: {
    login: false,
    name: '홍길동',
    age: '미상',
    description:
      '동해번쩍 서해번쩍 .... 신출귀몰 도적....'
  },
  testuser2: {
    login: false,
    name: '이순신',
    age: '46',
    description:
      '세계사에 유래없는 해군제독... 왜란 종결자~~~'
  }
}

function Home() {

  const [user, setUser] = useState(users);
  const [login, setLogin] = useState(null);
  console.log(user);

  const loginFunction = (username) => {
    setUser({...user,
      [username]: { ...user[username],
        login : true
       }
     })
    setLogin(user[username]);
    
  }; 

  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={
          <div>
            <h2>홈 페이지</h2>
            <p>지금 보여지는 곳은 홈입니다. 사이트 대문이죠!!!</p>
            {}
            <li onClick={() => loginFunction('testuser')}>
              testuser 로그인 처리
            </li>
            <li onClick={() => loginFunction('testuser2')}>
              testuser2 로그인 처리
            </li>
          </div>
        }/>
        <Route path="/board" element={<Board />}>
          <Route path=":num" element={<BoardContent />} />
        </Route>
        {login ? 
        <Route path="/mypage" element={<MyPage login={login}/>} />
        :
        <Route path="/mypage" element={<MyPage login={false}/>} />
        }
      </Routes>
      
    </div>
  );
}

export default Home;