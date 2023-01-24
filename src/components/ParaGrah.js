import React, {useState} from "react";

function Paragraph() {
    const [para,setpara]=useState("");
    const handleclick=()=>{
       setpara("Hello, I've learnt to use the full-stack evaluation tool. This makes me so happy")
    }
    return (
      <div id="main div">
        <button type='submit' classname='btn' id="click" onClick={handleclick}>click</button>
        // Do not alter the main div
        <p id='para'>{para}</p>
      </div>
    );
  }
  
  
  export default Paragraph;