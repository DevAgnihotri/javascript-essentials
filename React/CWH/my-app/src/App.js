import { useState } from 'react';
import './App.css';
import About from './Components/About';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';

function App() {

  const [mode, setMode] = useState('dark');

  let toggleMode = () => {
    if(mode === 'dark')
    {
      setMode('light');
    }
    else
    {
      setMode('dark');
    }
  }
  
  return (
    <>
     <Navbar title= "TestUtils" mode={mode} toggleMode={toggleMode}/>
    <div className="container my-3">
    <TextForm heading="Enter text below" mode={mode}/>
    <About mode={mode} toggleMode={toggleMode}/>
    </div>
    </>
  );
}

export default App;
