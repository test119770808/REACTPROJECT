import axios from "axios";
import React, { createContext, useContext, useReducer } from "react";

const initialState = {
  posts: {
    loading: false,
    posts: null,
    error: null
  }  
};


function postsReducer(state, action) {
  console.log(state);
  switch(action.type) {
    case 'LOADING':
      console.log('loading');
      return {
        posts: {
          loading: true,
          posts: null,
          error: null
        }
      };
    case 'SUCCESS':
      console.log('success');
      return {
        posts: {
          loading: false,
          posts: action.posts,
          error: null
        } 
      };
    case 'ERROR':
      console.log('error');
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

const PostsStateContext = createContext(null);
const PostsDispatchContext = createContext(null);

export function PostsProvider({children}) {
  const [state, dispatch] = useReducer(postsReducer, initialState);
  // console.log(state);
  return (
    <PostsStateContext.Provider value={state}>
      <PostsDispatchContext.Provider value={dispatch}>
        {children}
      </PostsDispatchContext.Provider>
    </PostsStateContext.Provider>
  );
}

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
    const response = await axios.get('https://jsonplaceholder.typicode.com/posts1');
    console.log('axios');
    console.log(response);
    dispatch({type:'SUCCESS', posts: response.data.filter(t => t.id <= 20) });
  }catch(e) {
    dispatch({type:'ERROR', error:e});
  }
};

