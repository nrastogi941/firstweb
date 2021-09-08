import React from "react";
import { NavLink } from "react-router-dom";
import { useState } from "react";



const Navbar = () => {

 const [show, setshow] = useState(false);

  const toggler=()=>{
    setshow(!show)
  };

  return (
    <>
      <section className="navbar-bg">
        <nav className="navbar navbar-expand-lg navbar-light ">
          <div className="container">
            <a className="navbar-brand" href="#">first web</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"
            onClick={toggler}>
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className={`collapse navbar-collapse ${show ? "show" : ""}`} >
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                <li className="nav-item">
                <NavLink exact   to="/">Home</NavLink>
                </li>
                <li className="nav-item">
                <NavLink exact to="/service">Service</NavLink>
                </li>
                <li className="nav-item">
                <NavLink exact to="/contact">Contact</NavLink>
                </li>
                <li className="nav-item">
                <NavLink exact to="/about">About</NavLink>
                </li>
              </ul>
              <form className="d-flex resposive-nav-btn">
                <NavLink exact to="/signup">
                <button className="btn   btn_style" type="submit">Sign Up</button>
                </NavLink>
                <NavLink exact to="/login">
                <button className="btn  btn_style" type="submit">Log In</button>
                </NavLink>
              </form>
            </div>
          </div>
        </nav>
      </section>
    </>
  );

};

export default Navbar;