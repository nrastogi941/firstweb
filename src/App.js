import React from "react";
import Home from "./Home";
import Service from "./Pages/Service";
import Contact from "./Pages/Contact";
import About from "./Pages/About";
import Error from "./Pages/Error";
import Signup from "./Signup";
import Login from "./Login";
import { Route,Switch } from "react-router-dom";


const App=()=>{
    return(
        <>
    <Switch>
      <Route exact path="/" component={Home}/>
      <Route exact path="/service" component={Service}/>
      <Route exact path="/contact" component={Contact}/>
      <Route exact path="/about" component={About}/>
      <Route exact path="/signup" component={Signup}/>
      <Route exact path="/login" component={Login}/>
      <Route  component={Error}/>
    </Switch>
        </>
    );
};

export default App;