import React from "react";

const Error404=()=>{
    return(
        <>
        <div id="not-found">
            <div className="not-found">
                <div className="not-found-404">
                <h1>404</h1>
                </div>
                <h2>We are sorry ,page not found</h2>
                <p>the page you are looking might not found</p>
                <button className="btn_style">Back to home</button>
            </div>
        </div>
        </>
    )
}

export default Error404;