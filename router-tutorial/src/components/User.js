import React from "react";
import { Link, useLocation, useSearchParams } from "react-router-dom";

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

  return (
    <div>
      <Link to="/">홈으로</Link>
      <h2>User 페이지</h2>
      <p>이 페이지는 사용자의 정보를 처리하여 보여주는 페이지입니다.</p>
      <div>
        {obj.get('id') && <h1>{id}</h1>}
      </div>
    </div>
  )

}
export default User;