import React, { useEffect, useState } from "react";
import styled, { css, keyframes } from "styled-components";
import Button from "./Button";

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const fadeOut = keyframes`
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
`;

const slideUp = keyframes`
  from {
    transform: translateY(200px);
  }
  to {
    transform: translateY(0px);
  }
`;

const slideDown = keyframes`
  from {
    transform: translateY(0px);
  }
  to {
    transform: translateY(200px);
  }
`;

const DarkBackground = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.8);

  animation-duration: 0.5s;
  animation-timing-fuction: ease-out;
  animation-name: ${fadeIn};
  animation-fill-mode: forwards;

  /* props에 사라지는 옵션 disappear 확인 */
  ${props =>
    props.disappear && 
    css`
      animation-name: ${fadeOut};
    `
  }
`;

const DialogBlock = styled.div`
  width: 320px;
  padding: 1.5rem;
  background: white;
  border-radius: 2px;
  h3 {
    margin: 0;
    font-size: 1.5rem;
  }
  p {
    font-size: 1.125rem;
  }

  animation-duration: 0.5s;
  animation-timing-fuction: ease-out;
  animation-name: ${slideUp};
  animation-fill-mode: forwards;

  /* props에 사라지는 옵션 disappear 확인 */
  ${props =>
    props.disappear && 
    css`
      animation-name: ${slideDown};
    `
  }
`;

const ButtonGroup = styled.div`
  margin-top: 2rem;
  display: flex;
  justify-content: flex-end;
`;

function Dialog({
  title, 
  children, 
  confirmText = '확인', 
  cancelText = '취소', 
  onConfirm, 
  onCancel, 
  visible
}) {

  // Dialog가 사라지는 효과를 구현하기... 
  // 이를 위해서 Dialog 컴포넌트에서는 2개의 로컬 상태를 관리해야 함. 
  // 1. 트랜지션 효과를 보여주고 있는 중이라는 상태 : animate
  // 2. 컴포넌트가 사라지는 시점의 지연 : localVisible
  // 3. useEffect() -> visible 값이 true에서 false로 바뀌는 시점을 감지.
  //          animate 값을 true, setTimeout 함수를 사용. 250ms 이후 false처리.

  const [animate, setAnimate] = useState(false);
  const [localVisible, setLocalVisible] = useState(visible);

  useEffect(() => {
    // visible값이 true -> false가 되는 것을 감지
    if (localVisible && !visible) {  
      setAnimate(true);
      setTimeout(() => setAnimate(false), 500);
    }
    setLocalVisible(visible);
  }, [localVisible, visible]);

  if (!animate && !localVisible) return null;  //false일 때 실행... 

  return(
    <DarkBackground disappear={!visible}>
      <DialogBlock disappear={!visible}>
        <h3>{title}</h3>
        <p>{children}</p>
        <ButtonGroup>
          <Button color='gray' onClick={onCancel}>{cancelText}</Button>
          <Button color='pink' onClick={onConfirm}>{confirmText}</Button>
        </ButtonGroup>
      </DialogBlock>
    </DarkBackground>
  );
}


export default Dialog;