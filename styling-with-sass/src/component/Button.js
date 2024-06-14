// Button
import React from 'react';
import classNames from 'classnames';
import './Button.scss';
//1. 버튼 생성... 
//2. 버튼 사이즈 조정하기... (large, medium, small)
function Button({children, size}) {
  // className='Button large'
  // ['Button',size].join(' ')  or `Button ${size}`
  // 클래스에 관련된 처리를 쉽게하는 라이브러리.... classnames
  return <button className={classNames('Button', size)}>{children}</button>;
}

Button.defaultProps = {
  size: 'medium'
};

export default Button;