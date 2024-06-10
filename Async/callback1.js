// 콜백은 함수 파라미터로 함수를 전달하여, 비동기 처리가 끝났을 때
// 전달된 함수를 실행. 콜백은 가독성이 좋지 못해서 유지보수 및 디버깅이 
// 힘듬.

// 회원 가입 단계 
// 1. 회원 가입 API를 호출하면서 데이터베이스 저장
// 2. 이메일을 보내고
// 3. 성공메시지를 보여주게 처리

const DB = [];

// 회원 가입 API 함수
function register(user) {   // 회원 처리 함수
  return saveDB(user, function(user) {          // DB에 저장 콜백
      return sendEmail(user, function(user){    // 메일 발송 콜백
        return getResult(user);                 // 결과 콜백
      });
  });
}

// 콜백 정의
function saveDB(user, callback) {  // DB에 저장 후 콜백 실행... 
  DB.push(user);
  console.log(`save ${user.name} to DB`);
  return callback(user);
}

// 이메일 발송 로그만 남기는 코드... 실행후 콜백
function sendEmail(user, callback) {
  console.log(`email to ${user.email}`);
  return callback(user);
}

// 결과 반환하는 함수 
function getResult(user) {
  return `success register ${user.name}`;
}

const result = register({
  email:'testuser@test.com',
  password:'test1234',
  name:'testuser'});
  
console.log(result);