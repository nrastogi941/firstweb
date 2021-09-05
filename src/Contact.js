import React, { useState } from "react";


const Contact = () => {

    const [userdata, setuserdata] = useState({
        firstname: "",
        lastname: "",
        phone: "",
        email: "",
        address: "",
        message: "",
    });

    let name, value;
    const postUserData = (event) => {
        name = event.target.name;
        value = event.target.value;

        setuserdata({ ...userdata, [name]: value });
    };

    const submitdata = async (event) => {
        event.preventDefault();
        const { firstname, lastname, phone, email, message, address } = userdata;
        if(firstname && lastname && phone && email && message && address ){
        const res =await fetch('https://firstweb-d7efc-default-rtdb.firebaseio.com/userdatabase.json',
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({

                    firstname, lastname, phone, email, message, address,
                }),
            }
        );

        if (res) {
            setuserdata({
                firstname: "",
                lastname: "",
                phone: "",
                email: "",
                address: "",
                message: "",
            })
            alert("data stored");
        }
        else {
            alert("please fill the data");
        }
    }
    else {
        alert("please fill the data");
    }

    }

    return (
        <>
            <section className="contactus-section">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-10 col-12 mx-auto">
                            <div className="row">
                                <div className="col-lg-5 col-12 contact-left-side">
                                    <h1 className="main-heading fw-bold">Connect With Our <br /> Sales Team</h1>
                                    <p className="main-hero-para">
                                        This is my first Website, which i build from the scratch with the help of react-js and firebase ,hope you liked it and support me,if you see any mistake then correct it using github if  in future not made the project private",
                                    </p>
                                    <figure>
                                        <img src="./images/first_img.jpg" alt="contact_img" className="img-fluid" />
                                    </figure>
                                </div>


                                <div className="col-lg-7 col-12 contact-right-side">

                                    <form method="POST">
                                        <div className="container">
                                            <div className="row">
                                                <div className="col-lg-6 col-12 contact-input-field">
                                                    <input type="text" name="firstname" value={userdata.firstname} onChange={postUserData} placeholder="First Name" className="form-control" />
                                                </div>
                                                <div className="col-lg-6 col-12 contact-input-field">
                                                    <input type="text" name="lastname" value={userdata.lastname} onChange={postUserData} placeholder="Last Name" className="form-control" />
                                                </div>
                                            </div>


                                            <div className="row">
                                                <div className="col-lg-6 col-12 contact-input-field">
                                                    <input type="text" name="phone" value={userdata.phone} onChange={postUserData} placeholder="Phone Number" className="form-control" />
                                                </div>
                                                <div className="col-lg-6 col-12 contact-input-field">
                                                    <input type="text" name="email" value={userdata.email} onChange={postUserData} placeholder="Email Id" className="form-control" />
                                                </div>
                                            </div>
                                        </div>


                                        <div className="row">
                                            <div className="col-12 contact-input-field">
                                                <input type="text" name="address" value={userdata.address} onChange={postUserData} placeholder="Add Address" className="form-control" />
                                            </div>
                                        </div>

                                        <div className="row">
                                            <div className="col-12 ">
                                                <input type="text" name="message" value={userdata.message} onChange={postUserData} placeholder="Enter Your Message" className="form-control" />
                                            </div>
                                        </div>

                                        <div class="form-check form-checkbox-style">
                                            <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
                                            <label class="form-check-label" className="main-hero-para">
                                                I agree to the terms and condition.
                                            </label>
                                        </div>

                                        <button type="submit" className="btn btn_style w-100" onClick={submitdata}>Submit</button>

                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Contact;