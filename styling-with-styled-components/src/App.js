/* import logo from './logo.svg'; */
import styled from 'styled-components';
import './App.css';
import Circle from './styled-components/sample';
import Button from './styled-components/Button';


/* function sample(texts, ...fns) {
  const mockProps = {
    title: '안녕하세요',
    body: '내용은 내용내용 입니다.'
  };
  return texts.reduce(
    (result, text, i) => `${result}${text}${
    fns[i] ? 
      fns[i](mockProps) 
    : 
      ''}`, '');
} */

const AppBlock = styled.div`
  width: 512px;
  margin: 0 auto;
  margin-top: 4rem;
  border: 1px solid black;
  padding: 1rem;
`;


function App() {
  return (
    <div className="App">
      {/* <Circle color='orange' huge/> */}
      {/* {sample`
        제목: ${props => props.title}
        내용: ${props => props.body}
      `} */}
      <AppBlock>  {/* 자식 컴포넌트를 둘러싸고 있는 div 컴포넌트 */}
        <Button>Button</Button>
      </AppBlock>
    </div>
  );
}

export default App;
