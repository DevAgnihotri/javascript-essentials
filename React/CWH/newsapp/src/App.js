import './App.css';
import LoadingBar from "react-top-loading-bar";
import React, {useState } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';

import {
  BrowserRouter as Router,
  Routes,
  Route
}  from "react-router-dom";

const App = () => {
  
  const [progress, setProgress] = useState(0)
  const [apiKey] = useState(process.env.REACT_APP_NEWS_API)
  
  return (
      <div>
        <Router>        
          <Navbar/>
          <LoadingBar
            color="#f11946"
            progress={progress}
            height={6}
            onLoaderFinished={() => setProgress(0)}
          />
         <Routes>
          <Route exact path="/" element={<News setProgress = {setProgress} apiKey ={apiKey}  key="genral" pageSize={5} country="us" category="general"/>}/>
          <Route exact path="/business" element={<News setProgress = {setProgress} apiKey ={apiKey}  key="business" pageSize={5} country="us" category="business"/>}/>
          <Route exact path="/entertainment" element={<News setProgress = {setProgress} apiKey ={apiKey}  key="entertainment" pageSize={5} country="us" category="entertainment"/>}/>
          <Route exact path="/health" element={<News setProgress = {setProgress} apiKey ={apiKey}  key="health" pageSize={5} country="us" category="health"/>}/>
          <Route exact path="/science" element={<News setProgress = {setProgress} apiKey ={apiKey}  key="science" pageSize={5} country="us" category="science"/>}/>
          <Route exact path="/sports" element={<News setProgress = {setProgress} apiKey ={apiKey}  key="sports" pageSize={5} country="us" category="sports"/>}/>
          <Route exact path="/technology" element={<News setProgress = {setProgress} apiKey ={apiKey}  key="technology" pageSize={5} country="us" category="technology"/>}/>
        </Routes>        
      </Router>
        </div>
    )
}

export default App;
