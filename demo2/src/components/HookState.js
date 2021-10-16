import React, { useState } from "react";

const HookState = ()=>{
    
    const [count,setCount] = useState(0);
    const handleClickIncrement =()=>{
        setCount(prevState => prevState + 1);
    }
    const handleClickDecrement =()=>{
        setCount(prevState => prevState - 1);
    }
    const handleClickReset =()=>{
        setCount(0);
    }
    return (
        <div>
            Count :{count}
           <button onClick={handleClickIncrement}>Increment</button>
           <button onClick={handleClickDecrement}>Decrement</button>
           <button onClick={handleClickReset}>Reset</button>
        </div>
    )
}
export default HookState;