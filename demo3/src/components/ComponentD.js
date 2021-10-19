import React,{useContext} from "react";
import { CounterContext } from "../App";

function ComponentD (){
    const counterContext = useContext(CounterContext);
    return(
        <div>
            ComponentD
         <div>Count : { counterContext.counterState}</div>
         <button onClick={()=> counterContext.counterDispatch('increment')}>increment</button>
         <button onClick={()=>counterContext.counterDispatch('decrement')}>decrement</button>
         <button onClick={()=>counterContext.counterDispatch('reset')}> reset</button>
        </div>
    )
}
export default ComponentD;