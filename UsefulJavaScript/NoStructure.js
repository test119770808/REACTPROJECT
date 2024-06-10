//비구조화 할당(구조분해) 문법
const object = {a:1};

const {a , b} = object;

console.log(a);
console.log(b);

console.log('함수파라미터에서의 비구조화');
function print({a, b}) {
  console.log(a);
  console.log(b);
}
print(object);

// 만약에 위 함수에 전달할 값 중에 b가 주어지지 않는 경우
// b 값에는 undefined가 나옴... 
console.log('비구조화 할당시 기본값 설정');
// 비구조화 할당시 기본값 설정
function print2({a, b = 2}) {
  console.log(a);
  console.log(b);
}
print2(object);

const object2 = {a2 : 1};
const {a2, b2 = 20} = object2
console.log(a2);
console.log(b2);

// 비구조화 할당시 이름 바꾸기
// 비구조화 할당하는 과정에서 선언 할 값의 이름을 변경
const animal = {
  name: '멍멍이',
  type: '개'
};
const nickname = animal.name;
console.log(nickname);

// 비구조화 할당에서 값의 이름은 할당에 중요한 역할을 함
// { 키 : 변경할 이름} => 키를 변경할 이름으로 선언하겠다는 의미
const {name: nickname2} = animal;
console.log(nickname2);

// 배열의 비구조화 할당.... 
console.log('배열의 비구조화 할당');
const array = [ 1, 2];
const [one, two] = array;
console.log(one);
console.log(two);

// 깊은 값 비구조화 할당
// 객체의 깊숙한 곳에 들어있는 값을 꺼내는 방법
const deepObject = {
  state: {
    information: {
      name : 'testuser',
      languages : ['korean','english','chinese']
    }
  },
  value: 5
}
// 1. 비구조화 할당을 두번 사용.
// const {name, languages} = deepObject.state.information;
// const {value} = deepObject;

// const extracted = {
//   name,
//   languages,
//   value
// };
// console.log(extracted);

// 2. 한번에 모두 추출하는 방법
const {
  state: {
    information: {name, languages}
  },
  value
} = deepObject;

const extracted = {
  name,
  languages,
  value
};
console.log(extracted);