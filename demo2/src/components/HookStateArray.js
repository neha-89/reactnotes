import React, { useState } from "react" ;

const HookStateArray = ()=>{
   const [items,setItems] =useState([]);

   const addItem = ()=>{
    setItems([...items, ])

   }
    return(
        <div>
            <button onClick={addItem}>Add Number</button>
          <ul><li></li></ul>
        </div>
    )
}
export default HookStateArray;