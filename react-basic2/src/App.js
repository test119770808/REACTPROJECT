import React,{ useCallback, useMemo, useReducer, useRef } from 'react';
import './App.css';
// import Counter from './Hooks/Counter';
import CreateUser from './Hooks/CreateUser';
import UserList from './Hooks/UserList';
import useInputs from './Hooks/useInputs';
/* 모듈 디자인 로드 */
import styled from './css/App.module.css'; //css모듈 디자인

function countActiveUsers(users) {
  console.log('활성 사용자 수를 세는 중....');
  return users.filter(user => user.active).length;
}

const initialState = {
  //inputs : CreateUser에서 inputs 작업시 사용부분
  // inputs: {      // custom hook작업을 제외
  //   username: '',
  //   email: ''
  // },
  users: [
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
  ]
}

// reducer 함수
function reducer(state, action) {
  // action에 따른 state값 반화 로직 구현... 
  switch(action.type) {
    // custom hook 사용시 제외. 왜? useInputs훅에서 구현..
    // case 'CHANGE_INPUT':   
    //   return {
    //     ...state,
    //     inputs: {
    //       ...state.inputs,
    //       [action.name]: action.value
    //     }
    //   };
    case 'CREATE_USER':
      return {
        inputs: initialState.inputs,
        users: state.users.concat(action.user)
      };
    case 'TOGGLE_USER':
      return {
        ...state,
        users: state.users.map(user =>
          user.id === action.id ? {...user, active: !user.active}:user
        )
      };
    case 'REMOVE_USER':
        return {
          ...state,
          users: state.users.filter(user => user.id !== action.id)
        };
    default: 
      return state;
  }
}

// 24.06.17 
// 1. UserDispatch 라는 이름으로 Context를 내보내기
export const UserDispatch = React.createContext(null);
// 내보낸 것을 사용하고 싶은 경우... import { UserDispatch } from './App';


function App() {

  const [state, dispatch] = useReducer(reducer, initialState);
  const {users} = state;
  // custom hooks 구현으로 다음을 바꿔서 사용.
  // const {username, email} = state.inputs;  
  const [{username, email}, onChange, reset] = useInputs({
    username: '',
    email: ''
  });


  const nextId = useRef(4);

  // useInputs에 구현되어 있어서 주석 처리... 
  // const onChange = useCallback(e => {
  //   const {name, value} = e.target;
  //   dispatch({
  //     type: 'CHANGE_INPUT',
  //     name,
  //     value
  //   })
  // }, []);

  const onCreate = useCallback(() =>{
    dispatch({
      type: 'CREATE_USER',
      user: {
        id: nextId.current,
        username,
        email
      }
    });
    reset();
    nextId.current += 1;
  }, [username, email, reset]);

  // 24.06.17 ContextAPI 사용을 위해서 주석 처리... 
  /* const onToggle = useCallback(id => {
    dispatch({
      type: 'TOGGLE_USER',
      id
    });
  },[]);

  const onRemove = useCallback(id => {
    dispatch({
      type: 'REMOVE_USER',
      id
    });
  },[]); */

  const count = useMemo(() => countActiveUsers(users), [users])

  return (
    <UserDispatch.Provider value={dispatch}> 
    {/* 24.06.17 ContextAPI를 사용...
    const [state, dispatch*] = useReducer(reducer, initialState);에 dispatch를 의미함. */}

      {/* <section className={styled.app_wrap}>
        <p className='title'>CSS모듈 디자인!</p>
      </section>
      <br/>
      <hr /> */}
      {/* <Counter /> */}
      <CreateUser 
        username={username} 
        email={email} 
        onChange={onChange}
        onCreate={onCreate}
      />
      {/* 24.06.17 -> UserList에 onRemove, onToggle 제거 */}
      <UserList users={users} />
      <div>활성사용자 수 : {count}</div>
    </UserDispatch.Provider>
  );
}

export default App;