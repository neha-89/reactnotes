import React,{useContext} from "react";
import { CounterContext } from "../App";

function ComponentF (){
    const counterContext = useContext(CounterContext);
    return(
        <div>
            ComponentF
         <div>Count : { counterContext.countState}</div>
         <button onClick={()=> counterContext.counterDispatch('increment')}>increment</button>
         <button onClick={()=>counterContext.counterDispatch('decrement')}>decrement</button>
         <button onClick={()=>counterContext.counterDispatch('reset')}> reset</button>
        </div>
    )
}
export default ComponentF;