import React from "react";

type GreetingsProps = {
  name: string;
  mark: string;           
  optional?: string;        // 옵셔널 체이닝
  onClick: (name: string) => void;  
  // 매개변수 name(문자열)을 받고, 반환값 없어요
  // ! : non-null Assertion(논 널 어서션)
};
/* React.FC 사용시 특징
  1. children 값이 props에 기본적으로 들어가 있음. 
  2. defaultProps, propTypes, contextTypes 등 설정시 자동완성 처리
  하지만, children이 옵션널로 들어가 있는 상황에서 props 타입이 명백하지 않음
  때문에 React.FC 사용시에 Props 타입 안에 children 설정해야 함. 
  그리고, defaultProps가 제대로 동작하지 않음. 
*/
/* const Greetings: React.FC<GreetingsProps> = ({name}) => (
  <div>Hello, {name}</div>
); */

const Greetings = ({name, mark, optional, onClick}:GreetingsProps) => {
  const handleClick = () => onClick(name);
  return(
    <div>
      Hello, {name}{mark}
      {optional && <p>{optional}</p>}
      <div>
        <button onClick={handleClick}>ClickMe!</button>
      </div>
    </div>
  );
}

/* function Greetings2 ({name,mark}:GreetingsProps) {
  return(
    <div>Hello, {name}{mark}</div>
  );
} */

Greetings.defaultProps = {
  mark: '!!!'
};



export default Greetings;