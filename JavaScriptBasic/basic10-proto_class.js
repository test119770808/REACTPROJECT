// 프로토 타입과 클래스..... 

// 객체 생성자... 객체 생성자는 함수를 통해 새로운 객체를 만들고 그 안에 넣고 싶은 함수들을 구현할 수 
//            있게 만들어 줍니다. 
function Animal(type, name, sound) {
  this.type = type;
  this.name = name;
  this.sound = sound;
  this.say = function() {
    console.log(this.sound);
  };
}

const dog = new Animal('개','멍멍이','멍멍');
const cat = new Animal('고양이','야옹이','야옹');

dog.say();
cat.say();


// 프로토 타입
//    프로토타입은 객체 생성자 함수 아래에 `.prototype.[원하는키] = 코드`
//   코드를 입력하여 설정
function AnimalProto(type, name, sound) {
  this.type = type;
  this.name = name;
  this.sound = sound;
}
// 각 객체에 개별적으로 생성되는 것이 아닌 공통의 값을 지정할 때 사용.
// 프로토 타입 설정... 함수
AnimalProto.prototype.say = function() {
  console.log(this.sound);
};
// 프로토 타입 설정... 변수
AnimalProto.prototype.sharedValue = 1;

const dog1 = new AnimalProto('개','멍멍이','멍멍');
const cat1 = new AnimalProto('고양이','야옹이','야옹');

dog1.say();
cat1.say();

console.log(dog1.sharedValue);
console.log(cat1.sharedValue);
console.log(typeof(dog1))

// 객체 생성자 상속받기... 
function AnimalInherit(type, name, sound) {
  this.type = type;
  this.name = name;
  this.sound = sound;
}

AnimalInherit.prototype.say = function() {
  console.log(this.sound);
};
AnimalInherit.prototype.sharedValue = 1;

// 상속 처리... 
function Dog(name, sound) {
  AnimalInherit.call(this, '개',name, sound);  //call(this,...) this로 처리... 
}
Dog.prototype = AnimalInherit.prototype;      // prototype을 공유하기 위해서 설정... 

function Cat(name, sound) {
  AnimalInherit.call(this, '고양이', name, sound);
}
Cat.prototype = AnimalInherit.prototype;

const dog2 = new Dog('멍멍이','멍멍');
const cat2 = new Cat('야옹이','야옹');
dog2.say();
cat2.say();

// 클래스
// ES5 이전에는 클래스 문법이 없었기 때문에 위에서 처럼 객체 생성자 함수를 이용했습니다. 
// ES6 에서부터는 class라는 문법이 추가되었음... 
class AnimalClass {
  constructor(type, name, sound) {
    this.type = type;
    this.name = name;
    this.sound = sound;
  }

  say() {  // prototype으로 자동 등록... 
    console.log(this.sound);
  }
}

const dogClass = new AnimalClass('개','멍멍이','멍멍');
const catClass = new AnimalClass('고양이','야옹이','야옹');

dogClass.say()
catClass.say()

// 상속.... 
class Dog extends Animal {
  constructor(name, sound){
    super('개', name, sound);
  }
}


