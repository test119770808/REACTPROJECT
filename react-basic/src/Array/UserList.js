import React from "react";

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
      <div>
        <b>{users[0].username}</b> <span>({users[0].email})</span>
      </div>
      <div>
        <b>{users[1].username}</b> <span>({users[1].email})</span>
      </div>
      <div>
        <b>{users[2].username}</b> <span>({users[2].email})</span>
      </div>
    </div>
  );
}
export default UserList;