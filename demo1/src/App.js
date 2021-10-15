import React, { useState } from "react";
import {BrowserRouter,Redirect,Route,Switch} from "react-router-dom";
import './App.css';
import Header from "./components/Header"; 
import Home from "./Pages/Home";
import About from "./Pages/About";
import Profile from "./Pages/Profile";
import Post from "./Pages/Post";
import Notfound from "./components/Notfound";

function App() {
  const [login,setLogin] =useState(false);
  return (
    <BrowserRouter >
    <div className="App">
     
     <Header />
     <button onClick={() => setLogin(!login)}>
       {login?"logout" : "login"}</button>
    
    <Switch>
    <Route path='/' component ={Home} exact /> {/*basename forcerefresh getuserconfirmation{message,callaback}useParams,useLocation,match,useHistory,Redirect,nested routes */}
    <Route path='/about' component ={About} />
    <Route path='/profile' >
      <Profile login = {login}/>
      {/* {login?< Profile />:<Redirect to="/"/>} */}
      </Route> 
    <Route path='/post/:id' component={Post} />
    <Route component={Notfound} />
    </Switch>
    </div>
    </BrowserRouter>
    
  );
}

export default App;
