// write a code to create a toggle button when the user clicks on the button image1 should appear and when clicks on the 
// that same button image2 should appear and the image1 gets hidden.
import React, { useState } from 'react';

import './App.css';


function App() {

const [show,setShow] = useState(true);
function handleClick(){
  setShow(false);
}

  return(
    <div>
     
  {show?<img src="https://images.pexels.com/photos/1170986/pexels-photo-1170986.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt ="cat"/>:<img src="https://ichef.bbci.co.uk/news/976/cpsprodpb/12A9B/production/_111434467_gettyimages-1143489763.jpg" alt="cat1"/>} 

  <button onClick={handleClick}>Toggle</button>
    </div>
  )
}

export default App;

