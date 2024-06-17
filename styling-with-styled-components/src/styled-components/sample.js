import React from 'react';
import styled, { css } from 'styled-components';

const Circle = styled.div`
  width: 5rem;
  height: 5rem;
  background: ${props => props.color || 'black'};
  border-radius: 50%;
  ${props => 
    props.huge && 
    css`            /* css는 styled-components에서 불러온 모듈 */
    width: 10rem;
    height: 10rem;
    `}
`;

export default Circle;