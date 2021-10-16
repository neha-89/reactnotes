import React, { useState } from "react";

function HookStateObject(){
    const [name , setName] =useState({
        firstName:"",
        lastName:""
           }
        )
//in class components the object automatically merg and update the objects but herein functional compoenets needs to be updated manually
    return(
        <form>
            <input type="text" value={name.firsName} onChange={e =>setName({...name,firstName:e.target.value}) }/>
            <input type="text" value={name.lastName} onChange={e =>setName({...name,lastName:e.target.value})}/>
           <h2>firstName is :{name.firstName}</h2>
           <h2>lastName is :{name.lastName}</h2>
        </form>
    )
} 

export default HookStateObject;
