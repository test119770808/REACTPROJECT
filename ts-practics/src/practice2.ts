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
  radius: number; // 멤버변수 선언
  
  constructor(radius: number) {
    this.radius = radius;
  }

  // 너비를 가져오는 함수
  getArea(): number {
    return this.radius * this.radius * Math.PI;
  }
}


