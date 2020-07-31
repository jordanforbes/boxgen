import React, { useState } from 'react';
import './App.css';
import Form from "./components/Form"

// const [color, setColor] = useState("")
function App() {
const [box, setBox] = useState([]);

const createBox = data => {
  console.log(data)
  setBox([...box, data])
  console.log(box);
}

  return (
    <div className="App">
      <Form createBox ={createBox} box={box}/>
        {box.map((color, i)=>(
          <div key={i} className="Box" style={{backgroundColor:color}}></div>
        ))}
    </div>
  );
}

export default App;
