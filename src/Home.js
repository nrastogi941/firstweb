import React from "react";
import Navbar from "./Navbar";
import Header from "./Header";
import HowItWorks from "./HowItWorks";
import About from "./About";
import Service from "./Service";
import Contact from "./Contact";
import Footer from "./Footer";

const Home=()=>{
  return(
    <>
    <Navbar/>
    <Header/>
    <HowItWorks/>
    <About/>
    <Service/>
    <Contact/>
    <Footer/>
    </>
  )
}

export default Home;