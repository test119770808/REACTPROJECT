// import logo from './logo.svg';
import './App.css';
import React, { Fragment, useCallback, useMemo, useRef, useState } from 'react';
// import Wrapper from './Wrapper';
import PropTypes from 'prop-types';  // prop 타입 검증을 모듈... 
// import StateComponent from './useState/StateTest';
// import Counter from './useState/Counter';
// import MyComponent2 from './useState/MyComponent2';
// import EventComponent from './Event/EventComponent';
// import InputSample from './Event/InputSample';
// import EventComponent2 from './Event/EventComponent2';
import UserList from './Array/UserList';
// import ArrayKey from './Array/ArrayKey';
// import InputSample2 from './Array/InputSample2';
import CreateUser from './Array/CreateUser';
import HookEffect from './Hooks/HookEffect';
import HookRef from './Hooks/HookRef';

// active가 활성화된 사용자를 세는 함수. 
function countActiveUsers(users) {
  console.log('활성 사용자 수를 세는 중....');
  return users.filter(user => user.active).length;
}

function App() {

  // const name = 'React';

  // const style = {
  //   backgroundColor: 'red',  //카멜표기법... 
  //   color: 'white',
  //   fontSize: 24,
  //   padding: '1rem'
  // }

  // users 배열객체를 useState로 변경... 
  const [users, setUsers] = useState([
    {
      id: 1,
      username: '홍길동',
      email: 'hong@naver.com',
      active: true
    },
    {
      id: 2,
      username: '이순신',
      email: 'leeSS@naver.com',
      active: false
    },
    {
      id: 3,
      username: '유관순',
      email: 'Youks@naver.com',
      active: false
    }
  ]);

  // useState 입력값 처리를 위해서... 
  const [inputs, setInputs] = useState({
    username: '',
    email: ''
  });
  const {username, email} = inputs;

  const onChange = e => {
    const {name, value} = e.target;
    setInputs({
      ...inputs,
      [name]: value
    });
  }

  // useRef를 이용한 컴포넌트에서 사용할 변수 지정
  // - useRef로 관리하는 변수는 값이 바뀐다고해서 컴포넌트가 리렌더링되지 않음
  // - 때문에 useRef로 관리하고 있는 변수는 설정 후 바로 조회 가능함. 
  // - setTimeout, setInterval 을 통해서 만들어진 id
  // - 외부 라이브러리를 사용하여 생성된 인스턴스
  // - scroll 위치
  const nextId = useRef(4); 
  // useCallback()을 이용한 함수 재사용 처리...  
  const onCreate = useCallback(() => {
    // 나중에 구현 할 배열에 항목 추가 로직... 
    const user = {
      id: nextId.current,  //현재 useRef로 설정된 값을 호출
      username,
      email
    };
    // 추가
    setUsers([...users,user]);
    // setUsers(users.concat(user)); 를 사용해됨.

    // 입력값 정리
    setInputs({
      username: '',
      email: ''
    });

    nextId.current += 1;   // onCreate가 동작하면, useRef에 현재값에 +1 처리
  }, [users, username, email]); // 함수 안에서 사용하는 상태(state), props를 지정

  // 사용자 삭제... 
  // useCallback()을 이용한 함수 재사용 처리...  
  const onRemove = useCallback(id => {
    // user.id가 파라미터로 일치하지 않는 원소만 추출해서 새로운 배열 만듬.
    // user.id가 파라미터로 전달된 id인 것만 제거한 새로운 배열 생성
    setUsers(users.filter(user => user.id !== id));
  },[users]);

  // useCallback()을 이용한 함수 재사용 처리...  
  // const onToggle = useCallback(id => {
  //   setUsers(
  //     users.map(user => 
  //       user.id === id ? {...user, active: !user.active} : user
  //     )
  //   );
  // },[users]);
  // useCallback과 같은 기능을 useMemo()로 구현.... 
  const onToggle = useMemo(id => id => {
    setUsers(
      users.map(user =>
        user.id === id ? {...user, active: !user.active} : user
      )
    );
  }, [users]);
  // const onToggle = id => {
  //   setUsers(
  //     users.map(user => 
  //       user.id === id ? {...user, active: !user.active} : user
  //     )
  //   );
  // }
  
  // useMemo --- input으로 생기는 리렌더링에는 실행하지 않아요.
  // const count = countActiveUsers(users); 인 경우에는 리렌더링 시에 
  // 지속적으로 사용되면서 메모리를 낭비. 
  // useMemo를 사용하면 users에 변화가 있는 경우에만 동작을 합니다. 
  const count = useMemo(() => countActiveUsers(users),[users]);
  // useMemo()의 첫번째 파라미터는 어떻게 연산할지 정의하는 함수
  // useMemo()의 두번째 파라미터는 deps 배열(의존성 배열)을 정의합니다.

  return (
    <>
      {/*2nd Day : useState 테스트 */}
      {/* <StateComponent />
      <MyComponent2 name={'홍길동'} age={20} />
      <Counter />
      <hr /> */}
      {/* 2nd Day : event */}
      {/* <EventComponent />
      <EventComponent2 />
      <InputSample />
      <hr /> */}
      {/* 2nd Day : 컴포넌트 배열 */}
      {/* <ArrayKey />
      <InputSample2 /> */}
      <hr />
      <CreateUser 
        username={username}
        email={email}
        onChange={onChange}
        onCreate={onCreate}
      />
      <hr />
      <UserList users={users} onRemove={onRemove} onToggle={onToggle}/> {/* 등록 사용자 출력 */}
      <div>활성사용자 수 : {count}</div>
      <hr />
      {/* 3rd Day : useEffect */}
      {/* <HookEffect /> */}
      {/* <hr /> */}
      {/* 3rd Day : useRef */}
      {/* <HookRef /> */}

      {/* 1st Day :  */}
      {/* <Wrapper>
        <MyComponent name={"홍길동"} age={20} email={"aaa@bbb.com"} isSpecial />
        <div className='test-box'>
          <WelcomeClass name="Cahal" />
          <WelcomeFunction name={name} />
          <br /> */}  {/* or <br></br>  태그는 닫아야 합니다.*/}
      {/*   </div>
        <div style={style}>Hello World!! </div> */} {/* 하나의 태그로 묶여야 합니다....  */}
      {/* </Wrapper> */}
    </>
  );
}

// 함수형 컴포넌트 
function WelcomeFunction(props) {
  // console.log(props);
  return <h1>Hello, {props.name}</h1>;
}

// 클래스형 컴포넌트
class WelcomeClass extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}</h1>;
  }
}

// 화살표 함수를 이용한 컴포넌트
const MyComponent = (
  { name, 
    age, 
    addr='서울시 신촌2',  //구조화된 할당을 통한 기본값 설정. 
    email, 
    isSpecial}
) => {  //isSpecial을 통한 조건부 랜더링
  return (
    <>
      { isSpecial &&  // 3항 연산식
      <div>
        나의 첫번째 MyComponent입니다.<br/>
        프로퍼티 1 : {name}<br/>
        프로퍼티 2 : {age}<br/>
        기본값 프로퍼티 3 : {addr}<br />
      </div>
      }
    </>
  );
}

// props 기본값 설정하기... 중요* 대소문자를 구분함. 
//   컴포넌트에 props를 지정하지 않았을 때 기본적으로 사용할 값을 설정하는 경우에 사용함. 
//   syntax : 컴포넌트.defaultProps = {}
// MyComponent.defaultProps = {
//   addr : '서울시 신촌',
//   age : 0
// }

//props 타입검증(주의 사항-대소문자를 정확하게 구분함)
// npm install prop-types   
// 컴포넌트명.propTypes = {}  
// PropType이 기대하는 값을 가지는지 여부를 확인!
MyComponent.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number,
  email: PropTypes.string.isRequired   // 필수 값(상위 컴포넌트에서 반드시 전달)
}

export default App;
