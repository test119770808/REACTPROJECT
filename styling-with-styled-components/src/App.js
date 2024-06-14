import logo from './logo.svg';
import './App.css';
import Circle from './styled-components/sample';


function sample(texts, ...fns) {
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
}

function App() {
  return (
    <div className="App">
      <Circle color='orange' />
      {sample`
        제목: ${props => props.title}
        내용: ${props => props.body}
      `}
    </div>
  );
}

export default App;
