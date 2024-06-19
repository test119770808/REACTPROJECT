import ColorContext from './ContextAPI';
import ColorComponent from './ColorComponent';
import { UserProvider } from './ContextAPI2';
import A from './A';
import B from './B';

function App() {
  return (
    <UserProvider>
      <A />
      <B />
    </UserProvider>
  );
}

export default App;
