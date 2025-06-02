import React, { useState } from 'react';

export default function TextForm(props) {
  const [text, setText] = useState("Enter text here");
  let [count,setCount] = useState(0);  
  //console.log(setText('New text'));
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
    setCount(count++);
  }

  const handleOnChange = (event) => {
    console.log("On Change")
    setText(event.target.value)
  }
  
  return (
    <div>
      <h1>{props.heading}</h1>
      <div className="mb-3">
        <textarea id="myBox" value={text}  className="form-control" row="8" onChange={handleOnChange}></textarea>
        <button className="btn btn-primary" onClick={handleUpClick}>Convert to Uppercase</button>
        <button className="btn btn-primary" onClick={handleDownClick}>Convert to Lowercase</button>
        <button className="btn btn-primary" onClick={numInc}>Clicked {count} times</button>
      </div>
    </div>
  );
}
