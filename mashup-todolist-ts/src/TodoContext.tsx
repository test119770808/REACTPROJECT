import React, { Dispatch, MutableRefObject, createContext, useContext, useReducer, useRef } from "react";

// 사용할 타입 설정.... 
type Todo = {
  id: number;
  text: string;
  done: boolean;
}

type State = Todo[];

type Action = 
| {type: 'CREATE'; todo: Todo}
| {type: 'TOGGLE'; id: number}
| {type: 'REMOVE'; id: number}


// 초기값 설정
const initialTodos = [
  {
    id: 1,
    text: '프로젝트 생성하기',
    done: true
  },
  {
    id: 2,
    text: '컴포넌트 스타일링하기',
    done: true
  },
  {
    id: 3,
    text: 'Context 만들기',
    done: false
  },
  {
    id: 4,
    text: '기능 구현하기',
    done: false
  }
];

// 리듀서 
function todoReducer(state:State, action: Action) : State {
  switch (action.type) {
    case 'CREATE':
      return state.concat(action.todo);
    case 'TOGGLE':
      return state.map(todo =>
        todo.id === action.id ? { ...todo, done: !todo.done } : todo
      );
    case 'REMOVE':
      return state.filter(todo => todo.id !== action.id);
    default:
      throw new Error('Unhandled Action');
  }
}

// Dispatch 타입 설정
type TodoDispatch = Dispatch<Action>

// Context 설정
const TodoStateContext = createContext<State | null>(null);
const TodoDispatchContext = createContext<TodoDispatch | null>(null);
const TodoNextIdContext = createContext<MutableRefObject<number> | null>(null);


// Provider 설정
export function TodoProvider({ children }:{children: React.ReactNode}) {
  const [state, dispatch] = useReducer(todoReducer, initialTodos);
  const nextId = useRef<number>(5);
  return (
    <TodoStateContext.Provider value={state}>
      <TodoDispatchContext.Provider value={dispatch}>
        <TodoNextIdContext.Provider value={nextId}>
          {children}
        </TodoNextIdContext.Provider>
      </TodoDispatchContext.Provider>
    </TodoStateContext.Provider>
  );
}

//커스텀 훅
export function useTodoState() {
  const state = useContext(TodoStateContext);
  if (!state) throw new Error('Cannot find Provider');
  return state;
}

export function useTodoDispatch() {
  const dispatch = useContext(TodoDispatchContext);
  if (!dispatch) throw new Error('Cannot find Provider');
  return dispatch;
}

export function useTodoNextId() {
  const nextId = useContext(TodoNextIdContext);
  if (!nextId) throw new Error('Cannot find Provider');
  return nextId;
}