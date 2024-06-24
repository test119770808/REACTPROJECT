import React from "react";
import { useSampleDispatch, useSampleState } from "../SampleContext";

function ReducerSample2() {

  // context에 지정된 값을 호출... 커스텀 훅 사용!
  const state = useSampleState();
  const dispatch = useSampleDispatch();

  const setCount = () => dispatch({type: 'SET_COUNT', count: 5});
  const setText = () => dispatch({type: 'SET_TEXT', text: 'Tim!'});
  const setColor = () => dispatch({type: 'SET_COLOR', color: 'red'});
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
  );

}

export default ReducerSample2;