import React from 'react';
import './App.css';
import HookState from "./components/HookState";
import HookStateObject from './components/HookStateObject';
import HookStateArray from './components/HookStateArray';
import HookEffect from "./components/HookEffect";
import HookContextA from './components/HookContextA';
import HookReducer from './components/HookReducer';


export const UserContext = React.createContext();
function App() {
  
  return (
    <div className="App">
    <HookState />
    <HookStateObject />
    <HookStateArray />
    <HookEffect/>
    <UserContext.Provider value ={'Neha'}>
      <HookContextA />
    </UserContext.Provider>
    <HookReducer />
    </div>
  );
}

export default App;
