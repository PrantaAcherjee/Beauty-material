import logo from './logo.svg';
import './App.css';
import { useEffect } from 'react';
import Header from './Components/Header/Header';
import Display from './Components/Display/Display';

function App() {

  return (
    <div>
      <Header></Header>
      <Display></Display>
    </div>
  );
}

export default App;
