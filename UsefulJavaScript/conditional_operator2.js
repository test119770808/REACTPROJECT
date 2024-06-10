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

