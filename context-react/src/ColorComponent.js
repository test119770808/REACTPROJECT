import React from 'react';
import ColorContext from './ContextAPI';

function ColorComponent() {
  return (
    <ColorContext.Consumer>
    {/* ColorContext 안에 Consumer를 사용하고 JSX자리에 
    함수로  return을 처리하는 구분 작성 */}
      {
        (value) => (
          <div style={{background: value.color}}>
            ContextAPI사용<br />
            값 : {value.color}
          </div>
        )
      }
    </ColorContext.Consumer>
  );
}

export default ColorComponent;