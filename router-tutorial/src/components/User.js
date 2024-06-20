import React from "react";
import { Link, useLocation, useParams, useSearchParams } from "react-router-dom";
import Header from "./Header";

const profileData = {
  testuser: {
      name: '홍길동',
      age: '미상',
      description:
          '동해번쩍 서해번쩍 .... 신출귀몰 도적....'
  },
  testuser2: {
      name: '이순신',
      age: '46',
      description:
          '세계사에 유래없는 해군제독... 왜란 종결자~~~'
  }
}

function User() {

  //useLocation() 사용
  const location = useLocation();
  console.log(location);
  console.log(location.search); // 문자열로 해당 값을 추려냄. 

  //useSearchParams() 사용
  const [obj, setObj] = useSearchParams();
  let id = obj.get('id');
  /* let key = obj.get('key');
  console.log('obj : ');
  console.log(obj);
  console.log('id : '+id);
  console.log('key : '+key);
  console.log(id);
  obj.forEach(i => console.log(i));
  obj.set("id","test1111");
  console.log("obj.set 처리 후 : "+obj.get("id")); */

  // useParams()사용
  const param = useParams();
  console.log(param);
  const {username} = param;
  const profile = profileData[username];

  return (
    <div>
      <Header />
      <hr />
      <Link to="/">홈으로</Link>
      <h2>User 페이지</h2>
      <p>이 페이지는 사용자의 정보를 처리하여 보여주는 페이지입니다.</p>
      <div>
        {obj.get('id') && <h1>{id}</h1>}
        <h3>Profile : </h3>
        {profile 
          ?
          <div>
            <h4>{username}({profile.name})</h4>
            <h5>나이는 : {profile.age}</h5>
            {profile.description && <p>{profile.description}</p>}
          </div>
          :
          <div>존재하지 않는 유저입니다.</div>
        }
      </div>
    </div>
  )

}
export default User;