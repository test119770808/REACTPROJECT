import logo from './logo.svg';
import './App.css';
import Button from './component/Button';

function App() {
  return (
    <div className="App">
      <div className='button'>
        <Button size="large">Button</Button>
        <Button>Button</Button>
        <Button size={"small"}>Button</Button>
      </div>
      <div className='button'>
        <Button size="large" color="gray">Button</Button>
        <Button color="gray">Button</Button>
        <Button size={"small"} color="gray">Button</Button>
      </div>
      <div className='button'>
        <Button size="large" color="pink">Button</Button>
        <Button color="pink">Button</Button>
        <Button size={"small"} color="pink">Button</Button>
      </div>
      <div className='button'>
        <Button size="large" color="blue" outline>Button</Button>
        <Button color="gray" outline>Button</Button>
        <Button size={"small"} color="pink" outline>Button</Button>
      </div>
      <div className='button'>
        <Button size="large" color="blue" fullWidth>Button</Button>
        <Button size="large" color="gray" fullWidth>Button</Button>
        <Button size="large" color="pink" fullWidth>Button</Button>
      </div>
    </div>
  );
}

export default App;
