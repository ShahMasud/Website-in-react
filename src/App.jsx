import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { Switch, Route, Redirect } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Service from "./Services";
import Navbar from "./Navbar";
import Footer from './Footer';

const App = () =>{
  return(
    <>
    <Navbar/>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/About" component={About} />
      <Route exact path="/Service" component={Service} />
      <Route exact path="/Contact" component={Contact} />
      <Redirect to="/"/>
    </Switch>
    <Footer/>


    </>
  );



}
export default App;
