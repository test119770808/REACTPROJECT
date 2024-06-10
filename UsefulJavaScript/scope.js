// 자바스크립트 Scope

// 1. Global(전역) Scope : 코드의 모든 범위에서 사용이 가능
// 2. Function(함수) Scope : 함수 안에서만 사용이 가능
// 3. Block(블록) Scope : 특정 블록 내에서만 사용이 가능

const value = 'hello';   // Global Scope

function myFunction() {
  console.log('myFunction');
  console.log(value);    // Global Scope의 값... 
}

function otherFunction() {
  console.log('otherFunction');
  const value = 'bye~~!!';    // Function Scope
  console.log(value);
}

function myFunction2() {
  const value = 'bye!';
  const anotherValue = 'world';
  function functionInside() {
    console.log('functionInside:');
    console.log(value);
    console.log(anotherValue);
  }
  functionInside();
}

function myFunction3() {
  const value = 'Bye!';
  if(true) {
    const value = 'world';
    console.log('block scope : ');
    console.log(value);
  }
  console.log('function scope : ');
  console.log(value);
}

myFunction()
otherFunction()
console.log('-----------myFunction2---------------')
myFunction2()
console.log('-----------myFunction3---------------')
myFunction3()
console.log('global scope : ');
console.log(value);
// console.log(anotherValue);

