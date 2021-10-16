import React, { useState } from "react" ;

const HookStateArray = ()=>{
   const [items,setitems] =useState([]);

   const addItem = ()=>{

    
   }
    return(
        <div>
            <button onClick={addItem}>Add Number</button>
          <ul><li></li></ul>
        </div>
    )
}
export default HookStateArray;