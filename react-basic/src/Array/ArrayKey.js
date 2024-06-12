import React from "react";

function ArrayKey() {

  const test = ['a','b','z','c','d','e'];
  const test2 = [
    {
      id: 0,
      text: 'a'
    },
    {
      id: 1,
      text: 'b'
    },
    {
      id: 5,
      text: 'z'
    },
    {
      id: 2,
      text: 'c'
    },
    {
      id: 3,
      text: 'd'
    },
  ]

  return(
    <>
      {/* test.map(item => (
      <div>{item}</div>
      )) */}
      {test2.map(item => 
        <div key={item.id}>{item.text}</div>
      )}
    </>
  );
}

export default ArrayKey;