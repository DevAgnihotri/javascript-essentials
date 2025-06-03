import React, { useState } from 'react';

export default function TextForm(props) {
  const [text, setText] = useState("Enter text here");
  let [count,setCount] = useState(0);
  
  const handleUpClick = () => {
    console.log("Uppercase button was Clicked")
    let upText = text.toUpperCase()
    setText(upText)
  }

  const handleDownClick = () => {
    // let downText = text.toLowerCase();
    setText(text.toLowerCase())
  }
  const numInc = () => {
    setCount(count + 1);
  }

  const handleOnChange = (event) => {
    console.log("On Change")
    setText(event.target.value)
  }
    return (
      <>
      <div className="container" style={{backgroundColor: props.mode === 'dark' ? '#343a40' : '#f8f9fa', color: props.mode === 'dark' ? 'white' : 'black'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea id="myBox" value={text} className="form-control" rows="8" onChange={handleOnChange} style={{backgroundColor: props.mode === 'dark' ? '#495057' : 'white', color: props.mode === 'dark' ? 'white' : 'black'}}></textarea>
          <button className="btn btn-primary" onClick={handleUpClick}>Convert to Uppercase</button>
          <button className="btn btn-success mx-1" onClick={handleDownClick}>Convert to Lowercase</button>
          <button className="btn btn-danger" onClick={numInc}>Clicked {count} times</button>
        </div>
      </div>
      <div className="container" style={{color: props.mode === 'dark' ? 'white' : 'black'}}>
      <p>Your text has {text.length} characters and {text.split(" ").length} words</p>
      <p>Reading time = {text.split(" ").length * 0.008} mins</p>
      <h2>Preview</h2>
      <p>{text}</p>
      </div>
    </>
  );
}
