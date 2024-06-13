import React from "react";

// User 컴포넌트
function User({user, onRemove, onToggle}) {
  return (
    <div>
        <b 
          style={{
            cursor: 'pointer',
            color: user.active ? 'green':'black'
          }}
          onClick={() => onToggle(user.id)}
        >{user.username}</b> <span>({user.email})</span>
        <button onClick={() => onRemove(user.id)}>삭제</button>
    </div>
  );
}


function UserList({users, onRemove, onToggle}) {
  
  return (
    <div>
      {/* array.map() 함수를 이용한 컴포넌트 반복 */}
      {/* {users.map(user => (
        <User user={user} key={user.id} />
      ))} */}
      {users.map((user) => (
        <User 
          user={user} 
          key={user.id} 
          onRemove={onRemove} 
          onToggle={onToggle}
        />
      ))}
    </div>
  );
}
export default UserList;