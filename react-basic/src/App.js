// import logo from './logo.svg';
import './App.css';
import React, { Fragment } from 'react';
import Wrapper from './Wrapper';
import PropTypes from 'prop-types';  // prop 타입 검증을 모듈... 
import StateComponent from './useState/StateTest';
import Counter from './useState/Counter';
import MyComponent2 from './useState/MyComponent2';
import EventComponent from './Event/EventComponent';
import InputSample from './Event/InputSample';
import EventComponent2 from './Event/EventComponent2';

function App() {

  const name = 'React';

  const style = {
    backgroundColor: 'red',  //카멜표기법... 
    color: 'white',
    fontSize: 24,
    padding: '1rem'
  }

  return (
    <>
      {/*2nd Day : useState 테스트 */}
      <StateComponent />
      <MyComponent2 name={'홍길동'} age={20} />
      <Counter />
      <hr />
      {/* 2nd Day : event */}
      <EventComponent />
      <EventComponent2 />
      <InputSample />
      


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
