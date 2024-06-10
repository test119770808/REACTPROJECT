// 단축 평가 논리 계산법
true && true // true
true && false // false
true || false // true
false || true // true

const dog = {
  name : '멍멍이'
};

function getName(animal) {
  // if(animal){
  //   return animal.name;
  // }
  // return undefined;

  // && 연산자로 코드 단축 시키기 
  // 첫번째가 참인 경우, 두번째를 처리... 
  return animal && animal.name;
}
const name = getName();
console.log(name);

console.log(true && 'hello'); // hello
console.log(false && 'hello'); // false
console.log('hello' && 'bye'); // bye
console.log(null && 'hello'); // null
console.log(undefined && 'hello'); // undefined
console.log('' && 'hello'); // ''
console.log(0 && 'hello'); // 0
console.log(1 && 'hello'); // hello
console.log(1 && 1); // 1

// || 연산자로 코드 단축하기... 
const namelessDog = {
  name : ''
};

function getName2(animal) {
  const name = animal && animal.name;
  // if(!name) {
  //   return '이름이 없는 동물입니다.';
  // }
  // return name;
  return name || '이름이 없는 동물입니다.';
}

const name2 = getName2(namelessDog);
console.log(name2);