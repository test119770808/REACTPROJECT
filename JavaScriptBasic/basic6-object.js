// 객체
const dog = {
  name: '돌쇠',
  age: 17
};
console.log(dog.name);
console.log(dog.age);
// 키에 해당하는 부분은 공백이 없어야 함.... 
// 만약에 공백을 사용해야 하는 경우.... ''("")로 묶어주세요.
const sample = {
  'key with space': true
};
console.log(sample);
console.log(sample["key with space"]);
console.log(dog['name']);

// 함수에서 객체를 파라미터로 받기... 
const ironMan = {
  name: '토니 스타크',
  actor: '로버트 다우니 주니어',
  alias: '아이언맨'
};

const captainAmerica = {
  name: '스티븐 로저스',
  actor: '크리스 에반스',
  alias: '캡틴 아메리카'
};

function print(hero) {
  const text = `${hero.alias}(${hero.name}) 역할을 하는 배우는 ${
    hero.actor
  } 입니다.`
  console.log(text);
}

print(ironMan);
print(captainAmerica);

// 객체 비구조화 할당... 
// hero 객체 값을 추출하여 상수로 선언(//1 에서)
function print2(hero) {
  const { alias, name, actor} = hero; //1
  const text = `${alias}(${name}) 역할을 하는 배우는 ${actor} 입니다.`;
  console.log(text);
}
console.log('객체 비구조화 할당');
print2(ironMan);

function print3({alias, name, actor}) {
  const text = `${alias}(${name}) 역할을 하는 배우는 ${actor} 입니다.`;
  console.log(text);
}
print3(captainAmerica);

// 객체 안에 함수 넣기... 
const dog2 = {
  name: '멍멍이',
  sound: '멍멍!',
  say: function say() {
    console.log(this.sound);  // this는 dog2를 가리킴.
  }
};

dog2.say();

const dog3 = {
  name: '멍멍이',
  sound: '멍멍!',
  say: () => {
    console.log(this.sound); // 타입에러... sound에 대한 undefined
  }
};

dog3.say()

// Getter 함수와 Setter 함수.... 
// 객체 생성 후 객체 안의 값을 수정하거나 불러올 때 사용하는 함수.. 
const numbers = {
  a: 1, 
  b: 2, 
  get sum() { // Getter 함수... 특정값을 조회시... 설정한 함수로 연산된 결과 반환
    console.log('sum 함수를 실행합니다.');
    return this.a + this.b;
  }
};
console.log(numbers)
console.log(numbers.sum);
numbers.a = 5;
console.log(numbers.sum);

// setter
const numbers2 = {
  _a: 1,
  _b: 2,
  sum: 3,
  calculate() {
    console.log('calculate');
    this.sum = this._a + this._b;
  },
  get a() {
    return this._a;
  }, 
  get b() {
    return this._b;
  }, 
  set a(value) {
    console.log('a값이 바뀝니다.');
    this._a = value;
    this.calculate();
  },
  set b(value) {
    console.log('b값이 바뀝니다.');
    this._b = value;
    this.calculate();  // sum을 변경... 
  }
};
console.log('1:'+numbers2.sum)  // sum: 3으로 초기화... 
numbers2.a = 5;                 // setter 동작... 
numbers2.b = 7;                   
numbers2.a = 9;
console.log('2:'+numbers2.sum)
console.log('3:'+numbers2.sum)
console.log('4:'+numbers2.sum)



