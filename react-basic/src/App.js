import logo from './logo.svg';
import './App.css';
import React from 'react';

function App() {
  return (
    <>
      <div>
        <WelcomeFunction name="Sara" />
        <WelcomeClass name="Cahal" />
        <WelcomeFunction name="Edite" />
        <br />  {/* or <br></br>  태그는 닫아야 합니다.*/}
      </div>
      <div>Hello World!! </div> {/* 하나의 태그로 묶여야 합니다....  */}
    </>
  );
}

// 함수형 컴포넌트 
function WelcomeFunction(props) {
  return <h1>Hello, {props.name}</h1>;
}

// 클래스형 컴포넌트
class WelcomeClass extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}</h1>;
  }
}


export default App;
