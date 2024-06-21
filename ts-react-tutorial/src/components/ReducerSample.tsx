// 값이 다양한 경우.... 
import React, { useReducer } from "react";

// type 설정
type Color = 'red'|'orange'|'Indigo';

type State = {
  count: number;
  text: string;
  color: Color;
  isGood: boolean;
};

// action type 설정
type Action = 
  | {type: 'SET_COUNT'; count: number}
  | {type: 'SET_TEXT'; text: string}
  | {type: 'SET_COLOR'; color: Color}
  | {type: 'TOGGLE_GOOD'};

// reducer 생성(함수)
function reducer(state: State, action: Action): State {
  switch(action.type) {
    case "SET_COUNT":
      return {
        ...state,
        count: action.count 
      }
    case "SET_TEXT":
      return {
        ...state,
        text: action.text
      }
    case "SET_COLOR":
      return {
        ...state,
        color: action.color
      }
    case "TOGGLE_GOOD":
      return {
        ...state,
        isGood: !state.isGood
      }
  }
} 

function ReducerSample() {
  const [state, dispatch] = useReducer(reducer, {
    count: 0,
    text: 'hello',
    color: 'red',
    isGood: true
  });

  const setCount = () => dispatch({type: 'SET_COUNT', count: 5});
  const setText = () => dispatch({type: 'SET_TEXT', text: 'Tim!'});
  const setColor = () => dispatch({type: 'SET_COLOR', color: 'Indigo'});
  const toggleGood = () => dispatch({type: 'TOGGLE_GOOD'});

  return (
    <div>
      <p>
        <code>count : </code> {state.count}
      </p>
      <p>
        <code>text : </code> {state.text}
      </p>
      <p>
        <code>color : </code> {state.color}
      </p>
      <p>
        <code>isGood : </code> {state.isGood ? 'true':'false'}
      </p>
      <div>
        <button onClick={setCount}>SET_COUNT</button>
        <button onClick={setText}>SET_TEXT</button>
        <button onClick={setColor}>SET_COLOR</button>
        <button onClick={toggleGood}>TOGGLE_GOOD</button>
      </div>
    </div>
  )

}

export default ReducerSample;