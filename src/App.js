import React from "react";
import Home from "./Home";
import Service from "./Pages/Service";
import Contact from "./Pages/Contact";
import About from "./Pages/About";
import Error from "./Pages/Error";
import { Route,Switch } from "react-router-dom";

const App=()=>{
    return(
        <>
        <Switch>
      <Route exact path="/" component={Home}/>
      <Route exact path="/service" component={Service}/>
      <Route exact path="/contact" component={Contact}/>
      <Route exact path="/about" component={About}/>
      <Route  component={Error}/>
    </Switch>
        </>
    );
};

export default App;