import React from 'react';
import './App.css';
import Greetings from './components/Greetings';
import Counter from './components/Counter';
import MyForm from './components/MyForm';
import CounterReducer from './components/CounterReducer';
import ReducerSample from './components/ReducerSample';
import { SampleProvider } from './SampleContext';
import ReducerSample2 from './components/ReducerSample2';

function App() {
  const onClick = (name: string) => {
    console.log(`${name} say hello`);
  }

  const onSubmit = (form: {name:string, description:string}) => {
    console.log(form);
  };

  return (
    <div>
      {/* <Greetings name="tim" onClick={onClick} />
      <hr />
      <Counter />
      <hr />
      <MyForm onSubmit={onSubmit}/>
      <hr />
      <CounterReducer />
      <hr />
      <ReducerSample /> */}
      <SampleProvider>
        <ReducerSample2 />
      </SampleProvider>
    </div>
  );
}

export default App;
