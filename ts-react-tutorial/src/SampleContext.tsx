import React, { Dispatch, createContext, useContext, useReducer } from "react";

// 필요한 타입들 선언... 
type Color = 'red'|'orange'|'blue';

// 상태를 위한 타입
type State = {
  count: number;
  text: string;
  color: Color;
  isGood: boolean;
};

// 액션 타입
type Action = 
  | {type: 'SET_COUNT'; count: number}
  | {type: 'SET_TEXT'; text: string}
  | {type: 'SET_COLOR'; color: Color}
  | {type: 'TOGGLE_GOOD'};

// 디스패치를 위한 타입
type SampleDispatch = Dispatch<Action> // Action에 지정된 타입만 가능

// Context
const SampleStateContext = createContext<State | null>(null);
const SampleDispatchContext = createContext<SampleDispatch | null>(null);

// 리듀서
function reducer(state: State, action: Action): State {
  switch(action.type) {
    case 'SET_COUNT':
      return {
        ...state,
        count: action.count
      };
    case 'SET_TEXT':
      return {
        ...state,
        text: action.text
      };
    case "SET_COLOR":
      return {
        ...state,
        color: action.color
      };
    case "TOGGLE_GOOD":
      return {
        ...state,
        isGood: !state.isGood
      };
    default:
      throw new Error('Unhandled Action');
  }
}

// SampleProvider에서 useReducer를 사용하고, SampleStateContext.Provider와 
// SampleDispatchContext.provider로 children을 감싸서 반환... .
export function SampleProvider({children}: {children: React.ReactNode}) {
  const [state, dispatch] = useReducer(reducer, {
    count: 0,
    text: 'hello, react',
    color: 'orange',
    isGood: true
  });
  return(
    <SampleStateContext.Provider value={state}>
      <SampleDispatchContext.Provider value={dispatch}>
        {children}
      </SampleDispatchContext.Provider>
    </SampleStateContext.Provider>
  );
}

// state와 dispatch를 쉽게 사용하기 위한 커스텀 hooks
export function useSampleState() {
  const state = useContext(SampleStateContext);
  if (!state) throw new Error('Cannot find SampleProvider');
  return state;
}

export function useSampleDispatch() {
  const dispatch = useContext(SampleDispatchContext);
  if (!dispatch) throw new Error('Cannot find SampleProvider');
  return dispatch;
}
