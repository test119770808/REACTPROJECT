// spread와 rest
// ES6에서 도입된 문법
// 1. spread 
//  객체 혹은 배열을 펼칠 수 있는 문법
// const slime = {
//   name: '슬라임'
// };
// const cuteSlime = {
//   name: '슬라임',
//   attribute: 'cute'
// };
// const purpleCuteSlime = {
//   name: '슬라임',
//   attribute: 'cute',
//   color: 'purple'
// };

// spread문법 사용
const slime = {
  name: '슬라임'
};
const cuteSlime = {
  ...slime,
  attribute: 'cute'
};
const purpleCuteSlime = {
  ...cuteSlime,
  color: 'purple'
}

console.log(slime);
console.log(cuteSlime);
console.log(purpleCuteSlime);

// 배열에서 spread
const animals = ['개','고양이','참새'];
const anotherAnimals = [...animals, '비둘기'];
console.log(animals);
console.log(anotherAnimals);

const numbers = [1, 2, 3, 4, 5];
const spreadNumbers = [...numbers, 1000, ...numbers];
console.log(spreadNumbers);

// 2. rest 
//  사용방식은 비슷해 보이지만, 역할이 매우 다릅니다.
//  객체, 배열 그리고 함수의 파라미터에서 사용이 가능

// const purpleCuteSlime = {
//   name: '슬라임',
//   attribute: 'cute',
//   color: 'purple'
// }

const {color, ...rest } = purpleCuteSlime;
console.log(color);
console.log(rest);
const {color:color2, ...cuteSlime2 } = purpleCuteSlime;
console.log(color2);
console.log(cuteSlime2);

// 배열의 rest
const numbers2 = [0, 1, 2, 3, 4, 5, 6];
const [one, ...rest2] = numbers2;
// const [...rest, last] = numbers2;  // rest는 앞에 사용X
console.log(one);
console.log(rest2);

// 함수 파라미터에서의 rest
function sum(...rest) {
  return rest.reduce((acc, current) => acc + current, 0);
}
const result = sum(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
console.log(result);

// 함수 인자와 spread
const numbers3 = [1, 2, 3, 4, 5, 6];
const result2 = sum(
  // numbers3
  // numbers3[0],
  // numbers3[1],
  // numbers3[2],
  // numbers3[3],
  // numbers3[4],
  // numbers3[5]
  ...numbers3
);
console.log(result2);

// 퀴즈... 
// 함수 n개의 숫자들이 파라미터로 주어졌을 때, 
// 그중에 가장 큰 값을 알아는 코드를 작성... 
function max(...rest) {
  return rest.reduce((acc, current) => acc < current ? current: acc);
}

const resultQuiz = max(1, 2, 3, 4, 10, 5, 6, 7);
console.log(resultQuiz); // 10
