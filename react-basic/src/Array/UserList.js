import React from "react";

// User 컴포넌트
function User({user}) {
  return (
    <div>
        <b>{user.username}</b> <span>({user.email})</span>
    </div>
  );
}


function UserList() {
  const users = [
    {
      id: 1,
      username: '홍길동',
      email: 'hong@naver.com'
    },
    {
      id: 2,
      username: '이순신',
      email: 'leeSS@naver.com'
    },
    {
      id: 3,
      username: '유관순',
      email: 'Youks@naver.com'
    }
  ];

  return (
    <div>
      {/* array.map() 함수를 이용한 컴포넌트 반복 */}
      {/* {users.map(user => (
        <User user={user} key={user.id} />
      ))} */}
      {users.map((user, index) => (
        <User user={user} key={index} />
      ))}
    </div>
  );
}
export default UserList;