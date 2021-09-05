import React, { useState } from "react";
import footerdata from "./Api/Footerdata";

const Footer = () => {

    const [footdata, setfootdata] = useState(footerdata);
    console.log(footerdata);


    return (
        <>
            <footer>
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-lg-10 mx-auto">
                            <div className="row">
                                {footdata.map((currElem) => {
                                    const {id,title,first,second,third,fourth}=currElem;
                                    return (
                                        <>
                                            <div className="col-lg-3 col-6">
                                                <h2>{title}</h2>
                                                <ul>
                                                    <li><a href="#">{first}</a></li>
                                                    <li><a href="#">{second}</a></li>
                                                    <li><a href="#">{third}</a></li>
                                                    <li><a href="#">{fourth}</a></li>
                                                </ul>
                                            </div>
                                        </>
                                    )
                                })}
                                <div className="col-lg-3 col-6">
                                    <h2>Follow Us</h2>
                                    <div className="row">
                                        <div className="col-3 mx-auto">
                                            <a className="col-3 mx-auto">
                                                <i className="fab fa-instagram fontawesome-style footer-font"></i>
                                            </a>
                                        </div>
                                        <div className="col-3 mx-auto">
                                            <a className="col-3 mx-auto">
                                                <i className="fab fa-facebook fontawesome-style footer-font"></i>
                                            </a>
                                        </div>
                                        <div className="col-3 mx-auto">
                                            <a className="col-3 mx-auto">
                                                <i className="fab fa-github fontawesome-style footer-font"></i>
                                            </a>
                                        </div>
                                        <div className="col-3 mx-auto">
                                            <a className="col-3 mx-auto">
                                                <i className="fab fa-twitter fontawesome-style footer-font"></i>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <hr/>
                    <div className="mt-5">
                    <p className="main-hero-para text-center w-100">Copyright @ 2021 FirstWeb . All Rights Reserved</p>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default Footer;