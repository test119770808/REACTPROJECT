// 함수 타입 정의하기
function sum(x :number, y: number): number {
  return x + y;
}

console.log(sum(10,20));

function sumArray(numbers:number[]):number {
  return numbers.reduce((acc, current) => acc + current, 0);
}

const total = sumArray([10, 20, 30, 40, 50]);
console.log(total);

function nonReturnFunction():void {    //반환값 없는 타입의 함수. 타입지정
  console.log('반환값 없는 함수... ')
}

// Interface 사용해보기
// Interface는 클래스 또는 객체를 위한 타입지정 할 때 사용되는 문법. 

// Shape라는 interface를 선언
interface Shape {
  getArea(): number; // Shape interface에는 getArea는 함수가 꼭 있어야 해!
}

class Circle implements Shape {
  // implements 키워드를 통해서 interface를 구현하는다는 것을 명시.
  // radius: number; // 멤버변수 선언
  
  constructor(public radius: number) {  // public 사용으로 파라미터 쪽 생략
    this.radius = radius;
  }

  // 너비를 가져오는 함수
  getArea(): number {
    return this.radius * this.radius * Math.PI;
  }
}

// 사각형... 
class Rectangle implements Shape {
  // width: number;
  // height: number;

  constructor(private width:number, private height:number) {
    this.width = width;
    this.height = height;
  }
  getArea(): number {
    return this.width * this.height;
  }
}
const shape: Shape[] = [new Circle(5), new Rectangle(10, 20)];
shape.forEach(shape => console.log(shape.getArea()));

const circle = new Circle(8);
const reactangle = new Rectangle(100, 200);

console.log(circle.radius);  // radius를 public으로 접근 제한 설정... 
// console.log(reactangle.width);  // width, height는 private으로 접근 제한

// 클래스가 아닌 일반 객체를 interface를 사용하여 타입지정
interface Person {
  name: string;
  age?: number;  // 물음표는 설정해도 되고, 안해도 되는 값. 
}

interface Developer {
  name: string;
  age?: number;
  skills: string[];
}
// 상속 처리... 
interface Developer extends Person {
  skills: string[];
}

const person: Person = {
  name: '홍길동',
  age: 100
};

const expert: Developer = {
  name: '빌게이츠',
  skills: ['C', 'C++', 'React']
};

const people: Person[] = [person, expert];

// Type Alias
// type은 특정 타입에 별칭을 붙이는 용도. 이를 사용하여 객체를 위한 타입을
// 설정하 수 있고, 배열 또는 그 어떤 타입이든 별칭을 지을 수 있음. 

type Developer2 = Person & {  // &를 사용해서 두개 이상의 타입을 합함. 
  skills: string[];
}

const expert2 : Developer2 = {
  name: '이순신',
  skills: ['거북선','Go','MarkDown']
}

const people2:Person[] = [person, expert2];

type Color = 'red'|'orange'|'yellow';
const color2 : Color = 'red';
const colors: Color[] = ['red','yellow'];
