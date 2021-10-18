//useReducer accepts two arguments reducer function and initial state.
//reducer function accepts two arguments state and action and returns newstate
//useReducer is similar to reduce() in javascript 
//we can maintain both state and action as objects
// import React, { useReducer } from "react";

// const initialState = 0;
// const reducer =(state,action) =>{
//     switch(action){
//         case "increment": 
//         return state + 1
//         case "decrement":
//         return state -1
//         case "reset":
//         return initialState
//         default:
//         return state
//     }
// }
// function HookReducer(){
//    const [count ,dispatch ] = useReducer(reducer,initialState);
//     return(
//         <div>
//             <div>Count : {count}</div>
//         <button onClick={()=> dispatch('increment')}>increment</button>
//         <button onClick={()=>dispatch('decrement')}>decrement</button>
//         <button onClick={()=>dispatch('reset')}> reset</button>
//         </div>
//     )
// }
// export default HookReducer;

// import React, { useReducer } from "react";

// const initialState = {
//     firstCounter: 0,
//     secondCounter:10
// };
// const reducer =(state,action) =>{
//     switch(action.type){
//         case "increment": 
//         return {...state, firstCounter:state.firstCounter + action.value}
//         case "decrement":
//         return {...state, firstcounter:state.firstCounter - action.value}
//         case "increment2": 
//         return {...state,secondCounter:state.secondCounter + action.value}
//         case "decrement2":
//         return {...state,seconcounter:state.secondCounter - action.value}
//         case "reset":
//         return initialState
//         default:
//         return state
//     }
// }
// function HookReducer(){
//    const [count ,dispatch ] = useReducer(reducer,initialState);
//     return(
//         <div>
//             <div>FirstCounter : {count.firstCounter}</div>
//             <div>SecondCounter : {count.secondCounter}</div>
//         <button onClick={()=> dispatch({type:'increment',value:1})}>increment</button>
//         <button onClick={()=>dispatch({type:'decrement',value:1})}>decrement</button>
//         <button onClick={()=> dispatch({type:'increment',value:5})}>increment 5</button>
//         <button onClick={()=>dispatch({type:'decrement',value:5})}>decrement 5 </button>
//         <button onClick={()=> dispatch({type:'increment2',value:1})}>incrementCounter2 </button>
//         <button onClick={()=>dispatch({type:'decrement2',value:1})}>decrementCounter2</button>
//         <button onClick={()=>dispatch({type:'reset'})}> reset</button>
//         </div>
//     )
// }
// export default HookReducer;
import React, { useReducer } from "react";

const initialState = 0;
const reducer =(state,action) =>{
    switch(action){
        case "increment": 
        return state + 1
        case "decrement":
        return state -1
        case "reset":
        return initialState
        default:
        return state
    }
}
function HookReducer(){
   const [count ,dispatch ] = useReducer(reducer,initialState);
   const [countTwo,dispatchTwo] = useReducer(reducer,initialState);
    return(
        <>
        <div>
            <div>Count : {count}</div>
        <button onClick={()=> dispatch('increment')}>increment</button>
        <button onClick={()=>dispatch('decrement')}>decrement</button>
        <button onClick={()=>dispatch('reset')}> reset</button>
        </div>

         <div>
         <div>CountTwo : {countTwo}</div>
     <button onClick={()=> dispatchTwo('increment')}>increment</button>
     <button onClick={()=>dispatchTwo('decrement')}>decrement</button>
     <button onClick={()=>dispatchTwo('reset')}> reset</button>
     </div>
     </>
    )
}
export default HookReducer;


