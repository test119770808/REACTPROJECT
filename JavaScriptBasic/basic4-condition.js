// 조건문.... 
// if
const a = 0;
if (a + 1 === 2){  //조건이 참인경우 블럭실행
  console.log('a + 1이 2입니다.')
}

const b = 10;
if (b > 15) {
  console.log('b가 15보다 큽니다.');
}else{
  console.log('b가 15보다 작습니다.');
}

if ( b === 5) {
  console.log('5입니다.')
}else if( b === 10) {
  console.log('10입니다.')
}else {
  console.log('5도 아니고 10도 아닙니다.')
}

// switch/case문
const device = 'iphone';
switch(device) {
  case 'iphone':
    console.log('아이폰!');
    break;
  case 'ipad':
    console.log('아이패드!');
    break;
  case 'galaxy s24':
    console.log('갤럭시 s24!');
    break;
  default:
    console.log('모르는 기종입니다.');
}


