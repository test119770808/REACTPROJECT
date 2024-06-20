import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import User from './components/User';
import Info from './components/Info';
import Board from './components/Board';
import BoardContent from './components/BoardContent';
import Profiles from './components/Profiles';

function App() {
  return (
    <>
      <Routes>  
        <Route path='/' Component={Home} />
        <Route path='/user' element={<User />} />
        <Route path='/user/:username' Component={User} />
        <Route path='/info' element={<Info />} />
        <Route path='/info/:num' element={<Info />} />
        {/* 중첩 */}
        <Route path='/board' element={<Board />} >
          <Route path=':num' element={<BoardContent />} />
        </Route>
        {/* <Route path='/profiles' element={<Profiles />}>
          <Route path=':username' element={<User />} />
        </Route> */}
        <Route path='/profiles/*' element={<Profiles />} />
        
      </Routes>
    </>
  );
}

export default App;
