import React, {Component, useState} from "react";
import "./../styles/App.css";

function App() {
  const [para,setpara]=useState("");
  const handleclick=()=>{
     setpara("Hello, I've learnt to use the full-stack evaluation tool. This makes me so happy")
  }
  return (
    <div id="main">
      <button type='submit' classname='btn' id="click" onClick={handleclick}>click</button>
      // Do not alter the main div
      <p id='para'>{para}</p>
    </div>
  );
}


export default App;
