import React, { useState } from "react";
import Aboutdata from "./Api/Aboutdata";
import Footer from "./Footer";
import Navbar from "./Navbar";

const About = () => {

    const [aboutdata, setaboudata] = useState(Aboutdata);
    console.log(aboutdata);

    return (
        <>
            <section className="common-section our-services">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-lg-5 text-center our-services-leftside-img">
                            <img src="./images/first_img.jpg" alt="aboutus_img" />
                        </div>
                        <div className="col-12 col-lg-7 our-services-list">
                            <h3 className="mini-title">--AVAILABLE @ GOOGLE AND IOS APP STORE ONLY</h3>
                            <h1 className="main-heading">How to use the App?</h1>

                            {aboutdata.map((currElem) => {
                                const { id, title, para } = currElem;
                                return (
                                    <>
                                        <div className="row our-services-info">
                                            <div className="col-1 our-services-number">1</div>
                                            <div className="col-10 our-services-data">
                                                <h2>{title}</h2>
                                                <p className="main-hero-para">
                                                    {para}
                                                </p>
                                            </div>
                                        </div>
                                    </>
                                );
                            })}
                            <br />
                            <button className="btn_style btn-style-border">learn more</button>
                        </div>
                    </div>
                </div>
            </section>

            {/* ---------------------------    2nd part   ------------------------------------------------- */}

            <section className="common-section our-services our-services-rightside">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-lg-7 our-services-rightside-content d-flex justify-content-center align-items-start flex-column">
                            <h3 className="mini-title">--Support In Any Language</h3>
                            <h1 className="main-heading">World Class Support is <br/> available 24/7</h1>

                            {aboutdata.map((currElem) => {
                                const {id,title,para}=currElem;
                                return (
                                    <>
                                        <div className="row our-services-info">
                                            <div className="col-1 our-services-number">1</div>
                                            <div className="col-10 our-services-data">
                                                <h2>{title}</h2>
                                                <p className="main-hero-para">
                                                   {para}
                                                </p>
                                            </div>
                                        </div>
                                    </>
                                );
                            })}
                            <br />
                            <button className="btn_style btn-style-border">learn more</button>
                        </div>
                        <div className="col-12 col-lg-5 text-center our-services-rightside-img">
                            <img src="./images/second_img.jpg" alt="aboutus_img" />
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default About;