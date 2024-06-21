let count = 0; // 숫자
count += 1;
// count = '갑자기 문자열... '  // 에러 발생!... count


const message: string = 'Hello World';

const done: boolean = true;  // 블리언 값
// const done2 = true; 
// done2 = 'false';

const numbers: number[] = [1, 2, 3, 4];
const messages: string[] = ['hello','world'];

numbers.push(5);
// messages.push(3);     // 문자열 배열에 숫자 X

// undefined 와 null 허용
let mightBeUndefined: string | undefined = undefined;  // string 또는 undefined
let nullableNumber: number | null = null;
// let count2: number = null;

let color : 'red'|'yellow'|'orange' = 'red'; // red, yellow, orange
color = 'yellow';
// color = 'white';


console.log(message);