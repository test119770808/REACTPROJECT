// 배열
// 배열은 여러개의 항목들이 들어있는 리스트와 같은 자료

const array = [1, 2, 3, 4, 5, 6];
// 배열을 선언할 때에 []로 안을 감싸주면 되고, 배열 안에는
// 어떤 값이던지 넣을 수 있음. 
const objects = [{name:'멍멍이'}, {name:'돌쇠'}];
// 조회하고 싶은 경우
console.log(objects);
console.log(objects[0]);

console.log('배열의 크기(push전) : '+objects.length);
// 배열에 새 항목 추가... 
objects.push({
  name:'찡이'
});
console.log(objects);

// 배열의 크기 ... 
console.log('배열의 크기(push후) : '+objects.length);

