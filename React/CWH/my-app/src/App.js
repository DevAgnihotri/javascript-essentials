import { useState } from 'react';
import './App.css';
import About from './Components/About';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

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
    <Router>
     <Navbar title= "TestUtils" mode={mode} toggleMode={toggleMode}/>
    <div className="container my-3">
    <Routes>
          <Route path="/about" element={<About mode={mode} toggleMode={toggleMode}/>} />
          <Route path="/" element={<TextForm heading="Enter text below" mode={mode}/>} />
    </Routes>
    </div>
    </Router>
  );
}

export default App;
