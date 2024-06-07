// 배열 내장함수(built in function)
// 배열을 다룰 때 알고 있으면 너무나 유용한 내장함수..

// forEach : 가장 쉬운 배열 내장함수. for문을 대체
const superHeros = ['아이언맨','캡틴 아메리카','토르','닥터 스트레인지','캡틴 마블']
for (let i = 0 ; i < superHeros.length ; i ++) {
  console.log(superHeros[i]);
}
console.log('----------------------------------------')
// -> 
superHeros.forEach(hero => {
  console.log(hero);
});

// map : 배열 안의 각 원소를 변환할 때 사용. 
const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// 해당 배열 안의 모든 숫자를 제곱해서 새로운 배열로 만들고 싶어요.
// 어떻게 해야 할까요? 
const squared = [];
for (number of array) {
  squared.push(number * number);
}
console.log(squared);
// forEach -> 
const squared2 = []
array.forEach(n => {
  squared2.push(n * n);
});
console.log(squared2);

// map ->   // map을 사용할 때 변환함수를 사용함으로 새로운 배열 생성.
const square = n => n * n;  // 화살함수... 
const squared3 = array.map(square);
// const squered3 = array.map(n => n * n);
console.log(squared3)

// indexOf 원하는 항목이 몇 번째 원소인지 찾아주는 함수... 
const superHeros1 = ['아이언맨','캡틴 아메리카','토르','닥터 스트레인지','캡틴 마블']
const index = superHeros1.indexOf('토르');
console.log(index);

// findIndex : 배열 안에 값이 기본 자료형이면 IndexOf를 사용하여 값을 찾을 수 있음.
//    만약에 배열 안에 있는 값이 객체이거나, 배열이라면? indexOf로 찾을 수 없습니다. 
//    객체에 있는 값을 찾아내는 내장함수
const todo = [
  {
    id: 1,
    text: '자바스크립트입문',
    done: true
  },
  {
    id: 2,
    text: '자바입문',
    done: true
  },
  {
    id: 3,
    text: '함수와 메서드',
    done: true
  },
  {
    id: 4,
    text: '객체와 배열의 내장함수',
    done: false
  }
];
// 객체 배열에서 객체의 멤버 값 중에 id가 3인 객체가 몇번째 인지 알려면 어떻게 해야 할까?
const objectIndex = todo.findIndex(todo => todo.id === 3);
console.log(objectIndex);


// find : findIndex와 비슷하지만, 데이터가 몇번째인지 알아내는 것이 아닌 그 값 자체를 반환
const todos = [
  {
    id: 1,
    text: '자바스크립트입문',
    done: true
  },
  {
    id: 2,
    text: '자바입문',
    done: true
  },
  {
    id: 3,
    text: '함수와 메서드',
    done: true
  },
  {
    id: 4,
    text: '객체와 배열의 내장함수',
    done: false
  }
];

const todo1 = todos.find(todo => todo.id === 3);
console.log(todo1);

// filter : 배열에서 특정 조건을 만족하는 값들만 따로 추출하여 새로운 배열을 만듬.
//     위에 있는 todos배열에서 done값이 false인 항목만 따로 추출
const tasksNotDone = todos.filter(todo =>todo.done === false);
const tasksNotDone2 = todos.filter(todo => !todo.done);
console.log(tasksNotDone);
console.log(tasksNotDone2);

// splice : 배열의 특정 항목을 제거할 때 사용함.... 
const numbers4 = [1, 2, 3, 4, 5, 6];
const indexNumber = numbers4.indexOf(5);
numbers4.splice(indexNumber, 1);  // splice(idx, 삭제할 글자 수)
console.log(numbers4);

// slice : 배열을 잘라낼 때 사용. 중요 포인트는 기존 배열을 수정하지 않음.
const sliced = numbers4.slice(0, 2) // 0부터 2전까지... 
console.log(sliced);
console.log(numbers4);

// shift와 pop
// shift는 첫번째 원소를 배열에서 추출
// pop은 배열의 마지막 원소를 추출
const numbers5 = [10, 20, 30, 40, 50];
const value = numbers5.shift();
console.log(value);              // 10
console.log(numbers5);           // [20, 30, 40, 50]

const valuePop = numbers5.pop();
console.log(valuePop);           // 50
console.log(numbers5);           // [20, 30, 40]

// unshift : shift의 반대... 배열의 맨 앞에 새 원소를 추가
numbers5.unshift(5);
console.log(numbers5)

// concat : 여러개의 배열을 하나의 배열로 합칠 때 사용... 
//    arr1과 arr2에 변화는 없습니다.
const arr1 = [10, 20, 30];
const arr2 = [40, 50, 60];
const concated = arr1.concat(arr2);
console.log(concated);

// join : 배열 안에 값들을 문자열 형태로 합쳐줍니다. 
const arrayJoin = [1, 2, 3, 4, 5];
console.log(arrayJoin.join());  // 
console.log(arrayJoin.join(' '));  // 
console.log(arrayJoin.join(', '));  // 
console.log(typeof((arrayJoin.join())));
// split : 문자열을 배열 형태로 반환
console.log(arrayJoin.join(' ').split(' '));

// reduce : 주어진 값을 통한 처리할 수 있는 함수
// 예로 총합 구하기... 
const numbers6 = [1, 2, 3, 4, 5];
let sum = 0;
numbers6.forEach(n => {
  sum += n
});
console.log(sum);
// -> reduce사용하기... 
sum = numbers6.reduce((pre, current) => {
  console.log({pre, current});
  return pre + current;
}, 0);  // 0은 초깃값을 의미함... 
console.log(sum);

// 평균값 구하기... 
const numbers7 = [ 10, 20, 30, 40, 50, 60, 70];
let sum2 = numbers7.reduce((previous, current, index, array) => {
  if (index === array.length - 1) { //마지막 인덱스 인 경우... 
    return (previous + current) / array.length;
  }
  return previous + current;  
}, 0);

console.log(sum2);


// 지금까지 내용을 토대로 퀴즈~~~
// 숫자 배열이 주어졌을 때 10보다 큰 숫자의 갯수를 반환하는 함수를 만드세요. 
function countBiggerThanTen(numbers) {
  //forEach, filter, reduce.... 
}

const count = countBiggerThanTen([1, 2, 3, 5, 10, 20, 30, 40, 50, 60]);
console.log(count);

