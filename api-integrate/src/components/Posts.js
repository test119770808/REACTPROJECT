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

  useEffect(() => {
    // postTest 함수 정의 
    const postTest = async () => {
      try{
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts1'); //결과?
        // response.data.filter(t => t.id <= 20);
        setPosts(response.data.filter(t => t.id <= 20));  
        setLoading(true);
      }catch(e) {
        console.log(e.message);
      }
      
    }
    //함수 실행
    postTest();    
  }, []);
  // console.log(posts);
  return (
    <div>
      {loading && posts.map(post => (
        <Post key={post.id} id={post.id} title={post.title} userId={post.userId} />
      ))}
    </div>
  );

}

export default Posts;