import React, { useEffect, useReducer, useState } from 'react';
import axios from 'axios';
import useAsync from './useAsync';
import { postsFetch, usePostsDispatch, usePostsState } from '../PostsContext';

const Post = ({id, title, userId}) => {
  return (
    <div>
      <span style={{color:'red',marginRight: 30, width:'20px'}}>{id}</span> 
      <span style={{marginRight: 30}}>{title}</span> 
      <span style={{color:"orange"}}>{userId}</span>
    </div>
  );
};


// reducer 생성
// useState에서 상태 값을 보는 것, posts, loading, error
// 이것으로 생각할 수 있는 상태... .
// 1. LOADING -> posts값 완료X, LOADING중이면서, Error는 없는 상태
// 2. POSTS(SUCCESS) -> posts값 완료, LOADING 끝, Error 없는 상태
// 3. ERROR -> posts값 X, LOADING X, Error가 있는 상태.
/* function reducer(state, action) {
  switch(action.type) {
    case 'LOADING':
      return {
        loading: true,
        posts: null,
        error: null
      };
    case 'SUCCESS':
      return {
        loading: false,
        posts: action.posts,
        error: null
      };
    case 'ERROR':
      return {
        loading: false,
        posts: null,
        error: action.error
      };
    default:
      throw new Error(`Unhandled action type : ${action.type}`);
  }
} */
async function postsFunction() {
  const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
  return response.data;
}

function Posts() {

  // const [posts, setPosts] = useState(null);
  // const [loading, setLoading] = useState(false);
  // const [error, setError] = useState(null);

  // 리듀서를 사용!
  /* const [state, dispatch] = useReducer(reducer, {
    loading: false,
    posts: null,
    error: null
  }); */

  // postTest 함수 정의 
  /* const postTest = async () => {
    dispatch({type:'LOADING'});
    try{
      const response = await axios.get('https://jsonplaceholder.typicode.com/posts'); //결과?
      // response.data.filter(t => t.id <= 20);
      // console.log(response.status);    //응답 코드
      // console.log(response.data);
      // setPosts(response.data.filter(t => t.id <= 20));  
      // setLoading(true);
      dispatch({type:'SUCCESS', posts: response.data.filter(t => t.id <= 20) });
    }catch(e) {
      // console.log(e);
      // console.log(e.message);          // 에러 메시지
      // console.log(e.response.status);  // 응답 코드 
      dispatch({type:'ERROR', error:e});
    }
  }; */

/*   useEffect(() => {
    //함수 실행
    postTest();
  }, []); */

  /* ContextAPI 를 활용해서 동작하게 만들어 주세요.... : PostsContext.js
     createContext를 사용하여  PostsStateContext, PostsDispatchContext
     1. reducer 생성
     2. 초기값 설정
     3. Context API생성
     4. provider 생설 및 설정
     5. useContext사용하여 불러오기... 
  */
  // const [state, refetch] = useAsync(postsFunction, []);
  const state = usePostsState();
  const dispatch = usePostsDispatch();

  const {loading, posts, error} = state.posts;

  console.log(loading, posts, error);

  useEffect( () => {
    postsFetch(dispatch);
  }, [dispatch]);
    
  

  // console.log(posts);
  if (error) return (
    <div>
      <h1>에러발생했습니다.</h1>
      <p>{error.message}</p>
    </div>
  );

  if (loading) return <h1>로딩중입니다...</h1>;
  if (!posts) return null;  

  return (
    <div>
      <button   >다시불러오기</button>
      <hr/>
      {posts.map(post => (
        <Post key={post.id} id={post.id} title={post.title} userId={post.userId} />
      ))}
    </div>
  );

}

export default Posts;