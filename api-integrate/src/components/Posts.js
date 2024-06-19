import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Post = ({id, title, userId}) => {
  return (
    <div>
      <span style={{color:'red',marginRight: 30, width:'20px'}}>{id}</span> 
      <span style={{marginRight: 30}}>{title}</span> 
      <span style={{color:"orange"}}>{userId}</span>
    </div>
  );
};

function Posts() {

  const [posts, setPosts] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // postTest 함수 정의 
  const postTest = async () => {
    try{
      const response = await axios.get('https://jsonplaceholder.typicode.com/posts'); //결과?
      // response.data.filter(t => t.id <= 20);
      console.log(response.status);    //응답 코드
      setPosts(response.data.filter(t => t.id <= 20));  
      setLoading(true);
    }catch(e) {
      setError(e)
      console.log(e);
      console.log(e.message);          // 에러 메시지
      console.log(e.response.status);  // 응답 코드 
    }
  };

  useEffect(() => {
    //함수 실행
    postTest();
  }, []);

  // console.log(posts);
  if (error) return (
    <div>
      <h1>에러발생했습니다.</h1>
      <p>{error.message}</p>
    </div>
  );

  if (!loading) return <h1>로딩중입니다...</h1>;

  return (
    <div>
      <button onClick={() => postTest()}>다시불러오기</button>
      <hr/>
      {console.log(loading)}
      {loading && posts.map(post => (
        <Post key={post.id} id={post.id} title={post.title} userId={post.userId} />
      ))}
    </div>
  );

}

export default Posts;