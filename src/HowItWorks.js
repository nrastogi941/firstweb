import React, { useState } from "react";
import workApi from "./Api/WorkApi";

const HowItWorks = () => {

    const [workdata, setworkdata] = useState(workApi);

    return (
        <>
            <section>
                <div className="work-container container">
                    <h1 className="main-heading text-center">How does it work</h1>
                    <div className="row">
                        {workdata.map((curElem) => {
                            const {id,logo,title,info}=curElem;
                            return (
                                <>
                                    <div className="col-lg-4 col-12 text-center work-container-subdiv">
                                        <i class={`fontawesome-style ${logo}`}></i>
                                        <h2 className="sub-heading">{title}</h2>
                                        <p className="main-hero-para w-100">{info}</p>
                                    </div>
                                </>
                            );
                        })}
                    </div>
                </div>
            </section>
        </>
    );
};

export default HowItWorks;