// 좀더 조건문을 스마트하게... 

// 1. 특정 값이 여러 값 중 하나인지 확인해야 할 때... 
// function isAnimal(text) {
  // 1.
  // return (
  //   text === '고양이' || text === '개' || text === '거북이' || text === '너구리' 
  // );
  // 2.
  // const animals = ['고양이','개','거북이','너구리'];
  // return animals.includes(text);
// }
// 3.
const isAnimal = text => ['고양이','개','거북이','너구리'].includes(text);

console.log(isAnimal('개'));      //true
console.log(isAnimal('노트북'));  //false

// 값에 따라 다른 결과물을 반환해야 할 경우... 
function getSound(animal) {
  // 1. 
  // if(animal === '개') return '멍멍!';
  // if(animal === '고양이') return '야옹~!';
  // if(animal === '참새') return '짹짹';
  // if(animal === '비둘기') return '구구~~~';
  // return '...?';

  // 2.
  // switch(animal) {
  //   case '개':
  //     return '멍멍!';
  //   case '고양이':
  //     return '야옹~!';
  //   case '참새':
  //     return '짹짹!';
  //   case '비둘기':
  //     return '구구~~~';
  //   default:
  //     return '...?';
  // }
  const sounds = {
    개: '멍멍!',
    고양이: '야옹~!',
    참새: '짹짹!',
    비둘기: '구구~~~',
  }
  return sounds[animal] || '...?';
}

console.log(getSound('개'));
console.log(getSound('비둘기'))

// 실행해야 하는 코드 구문이 다를 경우
function makeSound(animal) {
  const tasks = {
    개() {
      console.log('멍멍!!!');
    },
    고양이() {
      console.log('야옹~~~~!!!');
    },
    참새() {
      console.log('짹짹!!!');
    },
    비둘기() {
      console.log('구구구~ 구구~~~~!!!');
    }
  };
  if (!tasks[animal]) {
    console.log('...?');
    return;
  }
  tasks[animal]();
}
makeSound('개');
makeSound('비둘기');


