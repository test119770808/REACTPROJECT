import React from "react";
import styled from "styled-components";
import {MdDelete, MdDone} from 'react-icons/md'

// 삭제
const Remove = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #dee2e6;
  font-size: 24px;
  cursor: pointer;
  &:hover {
    color: #ff6b6b;
  }
  display: none;
`

// dotoitem
const TodoItemBlock = styled.div`
  display: flex;
  align-items: center;
  padding-top: 12px;
  padding-bottom: 12px;
  &:hover {
    ${Remove} {
      display: initial;
    }
  }
`

// checkbox
const CheckCircle = styled.div`

`

// text 영역
const Text = styled.div`

`

function TodoItem({id, done, text}){
  return(
    <TodoItemBlock>
    <CheckCircle done={done}>{done && <MdDone />}</CheckCircle>
    <Text done={done}>{text}</Text>
    <Remove>
      <MdDelete />
    </Remove>
  </TodoItemBlock>
  );
}
export default TodoItem;