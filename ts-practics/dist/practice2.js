"use strict";
// 함수 타입 정의하기
function sum(x, y) {
    return x + y;
}
console.log(sum(10, 20));
function sumArray(numbers) {
    return numbers.reduce(function (acc, current) { return acc + current; }, 0);
}
var total = sumArray([10, 20, 30, 40, 50]);
console.log(total);
function nonReturnFunction() {
    console.log('반환값 없는 함수... ');
}
var Circle = /** @class */ (function () {
    // implements 키워드를 통해서 interface를 구현하는다는 것을 명시.
    // radius: number; // 멤버변수 선언
    function Circle(radius) {
        this.radius = radius;
        this.radius = radius;
    }
    // 너비를 가져오는 함수
    Circle.prototype.getArea = function () {
        return this.radius * this.radius * Math.PI;
    };
    return Circle;
}());
// 사각형... 
var Rectangle = /** @class */ (function () {
    // width: number;
    // height: number;
    function Rectangle(width, height) {
        this.width = width;
        this.height = height;
        this.width = width;
        this.height = height;
    }
    Rectangle.prototype.getArea = function () {
        return this.width * this.height;
    };
    return Rectangle;
}());
var shape = [new Circle(5), new Rectangle(10, 20)];
shape.forEach(function (shape) { return console.log(shape.getArea()); });
var circle = new Circle(8);
var reactangle = new Rectangle(100, 200);
console.log(circle.radius); // radius를 public으로 접근 제한 설정... 
var person = {
    name: '홍길동',
    age: 100
};
var expert = {
    name: '빌게이츠',
    skills: ['C', 'C++', 'React']
};
var people = [person, expert];
var expert2 = {
    name: '이순신',
    skills: ['거북선', 'Go', 'MarkDown']
};
var people2 = [person, expert2];
var color2 = 'red';
var colors = ['red', 'yellow'];
