import React from 'react';
import './App.css';
import Greetings from './components/Greetings';
import Counter from './components/Counter';
import MyForm from './components/MyForm';
import CounterReducer from './components/CounterReducer';

function App() {
  const onClick = (name: string) => {
    console.log(`${name} say hello`);
  }

  const onSubmit = (form: {name:string, description:string}) => {
    console.log(form);
  };

  return (
    <div>
      <Greetings name="tim" onClick={onClick} />
      <hr />
      <Counter />
      <hr />
      <MyForm onSubmit={onSubmit}/>
      <hr />
      <CounterReducer />
    </div>
  );
}

export default App;
