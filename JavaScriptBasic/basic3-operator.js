// 연산자
// 1. 산술 연산자
// => +, -, *, / ...
let a = 1 + 1
console.log(a)
a = 1 + 2 - ( 3 * 4) / 4;
console.log(a)
let b = 1;
b++;  // 후위
++b;  // 전위
console.log(b);      // 3
console.log(b++);    // 3
console.log(++b);    // 5

b = 1;
b--;
console.log(b);

// 2. 복합 대입연산자
let c = 1;
c = c + 1;
// 이 코드를 복합 대입 연산자로 ... 
c = 1;
c += 1;
// 다른 연산자도 가능함.... 
let d = 1;
d %= 10;
console.log(d)

// 3. 논리 연산자.... 
// 논리 연산자는 Boolean을 위한 연산자... 
// 반환 결과는 true 또는 false 입니다...
// ! : NOT, && : AND, || : OR
const e = !true;
console.log(e);

const f = true && true;
console.log(f);
const g = true && false;
console.log(g);

let h = true || true;
console.log(h);
h = true || false;
console.log(h);
h = false || true;
console.log(h);
h = false || false;
console.log(h);

// 연산 순서.... 
//  논리연산자 순서.... NOT -> AND -> OR의 순서를 가짐
const value = !((true && false) || (true && false) || !false);
console.log(value);

// 4. 비교 연산자
//  ==(타입검사x), ===(타입검사O)
const x = 1;
const y = '1';
const equal = x == y;
console.log(equal);
const equal2 = x === y;
console.log(equal2);

// !=(타입검사x), !==(타입검사O)
const notEqual = 'a' !== 'b';
console.log(notEqual);
console.log(1 != '1');
console.log(1 !== '1');
// <, >, <=, >=

// 문자열 붙이기... "+"
const t1 = '안녕';
const t2 = '하세요';
console.log(t1 + t2);


