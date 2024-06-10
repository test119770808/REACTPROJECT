// 함수의 기본 파라미터
function calculateCircleArea(r) {
  const radius = r || 1;            //ES5이전... 
  return Math.PI * radius * radius;
}

const area = calculateCircleArea(); // NaN
console.log(area);

// ES6 이후에서 처리
function calculateCircleArea2(r=1) {
  return Math.PI * r * r;
}
// 화살표 함수
const calculateCircleArea3 = (r = 1) => Math.PI * r *r;
const area3 = calculateCircleArea3();
console.log(area3);