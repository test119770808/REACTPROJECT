import React from "react";

type GreetingsProps = {
  name: string;
  mark?: string;
};

/* const Greetings: React.FC<GreetingsProps> = ({name}) => (
  <div>Hello, {name}</div>
); */

const Greetings = ({name, mark}:GreetingsProps) => {
  return(
    <div>Hello, {name}{mark}</div>
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