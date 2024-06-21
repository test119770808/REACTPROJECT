// Generics
// 타입스크립트에서 함수, 클래스, interface, type alias를 사용할 때 
// 여러 종류의 타입에 대해서 호환을 맞춰야 하는 상황에서 사용하는 문법

// 함수에서 Generics 사용하기

// 객체와 객체를 합쳐주는 함수.. 
function merge(a:any, b:any):any {   //any는 어떤 타입이든 상관없음. 
  return {
    ...a,
    ...b
  }; 
}

const merged = merge({name:'홍길동'}, {age:100});
console.log(merged);

// 이런 경우 Generics를 사용
function merge2<A, B>(a: A, b: B): A & B {
  return {
    ...a,
    ...b
  }
}
const merged2 = merge2({name:'홍길동2'}, {age: 1000});
console.log(merged2);

function wrap<T>(param: T) {
  return {
    param
  };
}

const wraped = wrap(10);
const wraped2 = wrap('hello');
// const wraped3 = wrap<string>(1);

// interface에서 Generics 사용
interface Items<T> {
  list: T[];
}
const items: Items<string> = {
  list: ['a','b','c','d']
};
console.log(items);

// type에서 Generics 사용
type TypeItems<T> = {
  list2: T[];
}
const typeItems: TypeItems<number> = {
  list2: [10, 20, 30, 40, 50]
};
console.log(typeItems.list2);

// 클래스에서 Generics 사용
class Queue<T> {

  list: T[] = [];
  // 배열의 길이 반환
  getLength() {
    return this.list.length;
  }

  enqueue(item: T) {
    this.list.push(item);
  }

  dequeue() {
    return this.list.shift();
  }
}

const queue = new Queue<number>();
queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());
