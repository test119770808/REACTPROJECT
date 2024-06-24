import React from "react";
import styled from "styled-components";

const TodoTemplateBlock = styled.div`
  width: 512px;
  height: 768px;
  
  position: relative; /* 추후에 박스 하단에 버튼을 위치시키기 위해서 사용. */
  background: white;
  border-radius: 16px;
  box-shadow: 0 0 8px 0 rgba(0,0,0,0.04);

  margin: 0 auto; /* 페이지 중앙에 나타남 */
  margin-top: 96px;
  margin-bottom: 32px;
  display: flex;
  flex-direction: column;
`;

function TodoTemplate({children}:{children:React.ReactNode}) {
  return <TodoTemplateBlock>{children}</TodoTemplateBlock>
}

export default TodoTemplate;