// Class 컴포넌트를 이용한 State 사용
import React from "react";

class MyComponent2 extends React.Component {

  // 생성자에서 props 받기
  constructor(props) {
    super(props);
    this.state = {
      a : 1,
      b : props.age
    }
  }

  // 클래스 컴포넌트에서는 render() 안에 리턴을 작성합니다. 
  render() {
    // props 받기
    let myName = '이순신';
    let {name, age} = this.props;

    return (
      <div>
        {myName}의 클래스형 컴포넌트<br />
        프로퍼티 1 : {name} <br />
        프로퍼티 2 : {age} <br />
        state의 사용 1 : {this.state.a} <br />
        state의 사용 2 : {this.state.b} <br />
      </div>
    );
  }
}

export default MyComponent2;