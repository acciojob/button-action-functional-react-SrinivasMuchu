import React, {Component, useState} from "react";
import "./../styles/App.css";

function App() {
  const[para,setPara]=useState(false);
  const Btn = () =>{
    setPara(!para)
  };
  return (
    <div id="main">
      {para ? <p className="para">Hello, I've learnt to use the full-stack evaluation tool. This makes me so happy</p> : " "}
      <button className="click" onClick={Btn}>Paragraph</button>
    </div>
  );
}


export default App;
