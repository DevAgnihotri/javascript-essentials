import './App.css';
import LoadingBar from "react-top-loading-bar";
import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';

import {
  BrowserRouter as Router,
  Routes,
  Route
}  from "react-router-dom";

export default class App extends Component {
  
  state = {
    progress: 0,
    apiKey: process.env.REACT_APP_NEWS_API
  }

  setProgress = (progress) => {
    this.setState({progress: progress})
  }

  render() {
    return (
      <div>
        <Router>        
          <Navbar/>
          <LoadingBar
            color="#f11946"
            progress={this.state.progress}
            height={6}
            onLoaderFinished={() => this.setProgress(0)}
          />
         <Routes>
          <Route exact path="/" element={<News setProgress = {this.setProgress} apiKey ={this.state.apiKey}  key="genral" pageSize={5} country="us" category="general"/>}/>
          <Route exact path="/business" element={<News setProgress = {this.setProgress} apiKey ={this.state.apiKey}  key="business" pageSize={5} country="us" category="business"/>}/>
          <Route exact path="/entertainment" element={<News setProgress = {this.setProgress} apiKey ={this.state.apiKey}  key="entertainment" pageSize={5} country="us" category="entertainment"/>}/>
          <Route exact path="/health" element={<News setProgress = {this.setProgress} apiKey ={this.state.apiKey}  key="health" pageSize={5} country="us" category="health"/>}/>
          <Route exact path="/science" element={<News setProgress = {this.setProgress} apiKey ={this.state.apiKey}  key="science" pageSize={5} country="us" category="science"/>}/>
          <Route exact path="/sports" element={<News setProgress = {this.setProgress} apiKey ={this.state.apiKey}  key="sports" pageSize={5} country="us" category="sports"/>}/>
          <Route exact path="/technology" element={<News setProgress = {this.setProgress} apiKey ={this.state.apiKey}  key="technology" pageSize={5} country="us" category="technology"/>}/>
        </Routes>
        </Router>
        </div>

    )
  }
}

