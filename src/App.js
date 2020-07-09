import React, { useState } from 'react';
import Number from "./number";
import './App.css';

function App() {

  const [number,setNumber] = useState(0);
  const [color,setColor] = useState(false);

  const changeColor = () =>{
      if(color){
        document.getElementById("main").style.backgroundColor= 'blue';
        setColor(!color);
      }else{
        document.getElementById("main").style.backgroundColor= 'gray';
        setColor(!color);
      }
  }
  
    return ( 
      <div className = "App" id="back">
        <div id="main">
          <h1>Click the number to show numbers:</h1>
          <Number numbers={number}/>
          <button onClick={()=> setNumber(number+1)}>Click this</button>
          <br />
          <br />
          <button onClick={changeColor}> Change color</button>
        </div>
      </div>
    );
}

export default App;