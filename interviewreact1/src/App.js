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

  const white = require('./images/white.png')
const black = require('./images/black.png')
const shirts = { white, black }
//Now bind the selected T-Shirt to a state's property and pass it as src:

const Shirts = () =>{
    const [selected, setSelected] = useState(shirts.white)

   return(
       <>
           <img src={selected} alt='shirt' />
           <button onClick={() => setSelected(shirts.black)}> Click</button>
       </>
   )
}
//   const [display , setDisplay] = useState(true);
//   const [hide,setHide] = useState(false);

// const handleClick = ()=>{
// }
//   return (
//     <div className="App">
//      <img src=""/>
    
//      <button onClick={handleClick}>Toggle</button>
//     </div>
//   );
   
}
var MyIconButton= React.createClass({
  render: function(){
      var pic= this.props.pressed? this.props.onpic : this.props.offpic
      return <img 
          src={pic} 
          onClick={this.props.tuggleSelection}  //updateFilter is wierd name
      />
  }
})

export default App;
