// 변수와 상수
// 자바스크립트 변수 : var(옛날부터), let, const
//   var -> let, const 권장... 이유 호이스팅...
//  let, const는 블럭 변수... 
// { 
//   let a = 1;
//   function A () {
//     console.log(a);
//   }
// } 
//

// let
// 변수 선언. 바뀔 수 있는 값을 지정할 때 사용... 
//           재할당이 가능... 재선언은 안됨... 
// 재할당... 
let value = 1;
console.log(value);
value = 2;
console.log(value);
// 재선언 안됨... 
// let value2 = 1;
// let value2 = 2;

// const - 상수 선언... 
// const는 한번 선언하고 바뀌지 않는 값
// 재할당과 재선언이 안됨.... 
// const a = 1;
// a = 2;
// console.log(a)

// 데이터 타입
// 1. 숫자(Number)
// 2. 문자열(String)
//  작은 따옴표 혹은 큰 따옴표를 사용하여 표현
let text = 'Hello';
let name = "홍길동";
// 3. 참/거짓(Boolean)
let good = true;
let loading = false;
// 4. null과 undefined
// 데이터가 없음을 의미함.... 하지만 용도가 다름... 
// null => 값이 없음... 
// undefined => 값이 설정되지 않음을 의미
let friend = null;      // 고의적인 설정...  
console.log(friend);
let testUndefined;      // 설정하지 않았음을 의미함.
console.log(testUndefined);
