import React, { useContext } from "react";
import {TodostateContext, TodoDispatchContext} from '..TodoContext';

function Sample() {
  /* Context사용시에는 useContext를 사용하여 적용. */
  const state = useContext(TodostateContext);
  const dispatch = useContext(TodoDispatchContext);
  return <div>Sample</div>
}