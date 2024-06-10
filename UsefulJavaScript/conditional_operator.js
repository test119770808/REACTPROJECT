// 삼항연산자 연습
const array = [];
// let text = '';
// if (array.length === 0) {
//   text = '배열이 비어 있습니다.';
// }else {
//   text = '배열이 비어있지 않습니다.';
// }
// 삼항 연산자의 사용법
//    조건 ? true일경우 : false일 경우
let text = array.length === 0 
  ? '배열이 비어있습니다.'
  : '배열이 비어있지 않습니다.';

console.log(text);

// 삼항 연산자 중첩 사용 예시
const condition1 = false;
const condition2 = false;

const value = condition1 
  ? '와우!!!'
  : condition2 
    ? '비비디' 
    : '바비디 부~~';
console.log(value);

