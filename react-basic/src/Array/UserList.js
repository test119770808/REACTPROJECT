import React, { useEffect } from "react";

// User 컴포넌트
const User = React.memo(function User({user, onRemove, onToggle}) {
  /* 
    마운트 시에 하는 작업들...  
    1. props로 받은 값을 컴포넌트의 로컬 상태로 설정
    2. 외부 API요청(REACT API 등등...)
    3. 라이브러리 사용(D3, Video.js 등등... )
    4. setInterval을 통한 반복작업 혹은 setTimeout을 통한 작업 예약
    언마운트 시에 하는 작업들...
    1. setInterval, setTimeout을 사용하여 등록한 작업들 clear하기
       (clearInterval, clearTimeout)
    2. 라이브러리 인스턴스 제거
  
  useEffect(() => {
    console.log('컴포넌트가 화면에 나타남');
    return () => {  // 함수 종료시... 
      console.log('컴포넌트가 화면에서 사라짐');
    };
  }, []);
  */

  /* 
    의존성 배열에 특정 값 넣기...  
    -> 컴포넌트가 처음 마운트 될때 호출되고, 지정한 값(의존성 값)이 바뀔 때마마다
      호출됩니다. 의존성 배열에 특정 값이 있으면 언마운트 시에도 호출, 값이 바뀌기
      직전에도 호출됩니다.
  */
  // useEffect(() => {
  //   console.log('user값이 설정됨');
  //   console.log(user)
  //   return () => {
  //     console.log('user가 바뀌기 전...');
  //     console.log(user);
  //   };
  // },[user]); 
  /* 
    만약에 useEffect()안에서 사용하는 상태(state), props가 있다면. 
    useEffect()의 deps(의존성 배열)에 넣어주세요. 이게 규칙.
    왜? 의존성 배열에 넣지 ㅇ낳으면 useEffect에 등록된 함수가 실행될 때
    최신 props 또는 상태를 가리키지 못하게 됩니다. 
  */
  /* 의존성 배열을 생략하는 경우... 인자값을 삭제하는 경우는 리렌더링 시 마다
   호출이 됩니다. */

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
});


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
export default React.memo(UserList);