//useEffect is use to handle sideeffects in functional components.
//In class components componentDidMount componentDidUpdate componentWillUnmount is used which is the replacement for useEffect 
//useeffect runs after every render (ofcourse,also at first render )
//useEffect takes callback function and a dependency.
//useEffect is writtern inside the functional component so that we can easily access the props and state without having to write the extra code.
// conditionaly run effect so that it won't create a performance problem and to do so pass the second parameter to useeffect which can be prop or state.
//run effect only once and to do so we pass an empty array as second parameter or to the dependency array but actually we are telling it to ignore it for further render.
//useEffect is to use fectch data from an API(use axios for get request)
import React, { useEffect, useState } from "react";



const HookEffect = ()=>{
 const [count,setCount] = useState(0);
 const [name,setName] = useState('');

 useEffect(() =>{
     console.log("useeffect-updating documen title")
       document.title = `You clicked ${count} times`;
 },[count])//conditional run example
 //,[] //empty dependancy array to mimic componentDidMount from class component       

    return(
        <>
        <input type="text" value={name} onChange={e => setName(e.target.value)}/>
       <button onClick={()=>setCount(count + 1) }>Click {count} times</button>
       </>
    )
}
export default HookEffect;
