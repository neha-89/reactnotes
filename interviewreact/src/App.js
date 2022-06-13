
//Following was one of the simple questions ask to freshers in react interview , the question is get 
//Que: Write a code to print the text as soon as user starts typing in the text box. 


import React, { useState }  from 'react';
import './App.css';

function App() {
 const [type , setType] = useState("");

 const handleChange = (e)=>{
   setType(e.target.value);
   console.log(type);
 }

  return (
    <div className="App">
      <input type="text" value={type} onChange={handleChange}/>
    </div>
  );
}

export default App;
