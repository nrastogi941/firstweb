import React, { useState } from "react";
import Serviceinfo from "./Api/Serviceinfo";

const Service = () => {

    const [servicedata, setservicedata] = useState(Serviceinfo);
    console.log(Serviceinfo);

    return (
        <>
            <section className="service-main-container">
                <div className="container service-container">
                    <h1 className="main-heading text-center fw-bold">How to send money</h1>
                    <div className="row">
                        {servicedata.map((currElem) => {

                            const { id, logo, heading, info } = currElem;

                            return (
                                <>
                                    <div className="col-lg-4 col-11 col-xxl-4 work-container-subdiv">

                                        <i className={`fontawesome-style ${logo}`}></i>
                                        <h2 className="sub-heading">{heading}</h2>
                                        <p className="main-hero-para">{info}</p>
                                    </div>
                                </>
                            )

                        })}
                    </div>
                </div>
            </section>
        </>
    );
};

export default Service;