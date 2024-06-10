// var 
var value = 'hello';

function myFunction() {
  var value = 'bye!';
  if(true) {
    var value = 'world';
    console.log('block scope : ');
    console.log(value)
  }
  console.log('function scope: ')
  console.log(value);
}

myFunction();
console.log('global scope : ');
console.log(value);

// Hoisting
//  자바스크립트에서 아직 선언되지 않은 함수/변수를 끌어올려서
// 사용할 수 있는 자바스크립트의 작동 방식을 의미함.

myFunctionHoisting();

function myFunctionHoisting() {
  console.log('hello world!');
}

console.log(number);
var number = 2;
/*
var number;
console.log(number);
number = 2;
*/

