// write a code to create a toggle button when the user clicks on the button image1 should appear and when clicks on the 
// that same button image2 should appear and the image1 gets hidden.
import React, { useState } from 'react';
import './App.css';


const data = [
  {
    id: "1",
    key: "1",
    title: "Title1",
    text: "Text1.",
    img: "1.jpg"
  },
  {
    id: "2",
    key: "2",
    title: "Title2",
    text: "Text2.",
    img: "2.jpg"
  }
]

function App() {
  const [display , setDisplay] = useState(true);
  const [hide,setHide] = useState(false);

const handleClick = ()=>{
}
  return (
    <div className="App">
     <img src=""/>
    
     <button onClick={handleClick}>Toggle</button>
    </div>
  );
   
}

export default App;
