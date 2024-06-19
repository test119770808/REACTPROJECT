import axios from "axios";
import React, { createContext, useContext, useReducer } from "react";

//2. 초기값 설정
const initialState = {
  posts: {
    loading: false,
    posts: null,
    error: null
  }  
};

// 1. reducer 생성
function postsReducer(state, action) {
  // console.log(state);
  switch(action.type) {
    case 'LOADING':
      return {
        posts: {
          loading: true,
          posts: null,
          error: null
        }
      };
    case 'SUCCESS':
      return {
        posts: {
          loading: false,
          posts: action.posts,
          error: null
        } 
      };
    case 'ERROR':
      return {
        posts: {
          loading: false,
          posts: null,
          error: action.error
        }
      };
    default:
      throw new Error(`Unhandled action type : ${action.type}`);
  }
}

// 3. Context API생성
const PostsStateContext = createContext(null);
const PostsDispatchContext = createContext(null);

// 4. provider 생설 및 설정
export function PostsProvider({children}) {
  const [state, dispatch] = useReducer(postsReducer, initialState);
  return (
    <PostsStateContext.Provider value={state}>
      <PostsDispatchContext.Provider value={dispatch}>
        {children}
      </PostsDispatchContext.Provider>
    </PostsStateContext.Provider>
  );
}

// 5. useContext사용하여 불러오기
export function usePostsState() {
  const state = useContext(PostsStateContext);
  if (!state) {
    throw new Error('Cannot find PostsProvider');
  }
  return state;
}

export function usePostsDispatch() {
  const dispatch = useContext(PostsDispatchContext);
  if (!dispatch) {
    throw new Error('Cannot find PostsProvider');
  }
  return dispatch;
}

export async function postsFetch (dispatch){
  dispatch({type:'LOADING'});
  try{
    const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
    // console.log('axios');
    // console.log(response);
    dispatch({type:'SUCCESS', posts: response.data.filter(t => t.id <= 20) });
  }catch(e) {
    dispatch({type:'ERROR', error:e});
  }
};

