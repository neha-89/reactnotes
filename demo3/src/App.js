import React,{useReducer}  from 'react';
import ComponentA from './components/ComponentA';
import ComponentB from './components/ComponentB';
import ComponentC from './components/ComponentC';
import './App.css';

export const CounterContext = React.createContext();

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

function App() {
  const [count ,dispatch ] = useReducer(reducer,initialState);
  return (
  
    <CounterContext.Provider value ={{counterState:count ,counterDispatch:dispatch}}>
   <div className="App">
     Count: {count}
     <ComponentA />
     <ComponentB />
     <ComponentC />
     </div>
     </CounterContext.Provider>
  );
}

export default App;
