import React from 'react';
import './App.css';
import Greetings from './components/Greetings';
import Counter from './components/Counter';

function App() {
  const onClick = (name: string) => {
    console.log(`${name} say hello`);
  }
  return (
    <div>
      <Greetings name="tim" onClick={onClick} />
      <hr />
      <Counter />
    </div>
  );
}

export default App;
