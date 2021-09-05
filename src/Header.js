import React,{useState} from "react";

const Header = () => {

    const [userdata,setUSerdata]=useState({
        email:"",
    });

    let name,value;
    const useremail=(event)=>{
        name=event.target.name;
        value=event.target.value;

        setUSerdata({...userdata,[name]:value});
    };

    const postdata=async (event)=>{

        event.preventDefault();

        const {email}=userdata;

        if(email){
        const res=await fetch('https://firstweb-d7efc-default-rtdb.firebaseio.com/useremail_record.json',
        {
            method:"POST",
            headers:{
                "Content-Type":"application/json",

            },
            body:JSON.stringify({
                email,
            }),
        });

        if(res)
        {
            setUSerdata({
                email:"",
            })
            alert("email registered sucessfully");
        }
        else
        {
            alert("please fill the data");
        }
    }
    else
    {
        alert("please fill the data");
    }

    };

    return (
        <>
            <header>
                <section className="container main-hero-container">
                    <div className="row">

                               {/* ------------------------------------------Main Header Left Side -----------------------------------------------------------------*/}

                        <div className="col-lg-6 col-12  header-left-side d-flex align-content-center justify-content-center flex-column align-items-start order-lg-first order-first">
                            <h1 className="display-2">Online Payment Made <br />Easy For You</h1>
                            <p className="main-hero-para">
                                We are DELTIX. Founded in 2005, DELTIX is one of the market leaders in software development for
                                financial research and products for systematic and algorithmic trading.
                                In 2020 DELTIX joined the EPAM family.
                                Our mission is to turn promising ideas into breakthrough products fast.
                            </p>
                            <h3>Get Early Acess For You</h3>
                            <div className="input-group mt-3 ">
                            <form method="POST">
                                <input type="text" className="rounded-pill  me-3 p-2 form-control-text"  placeholder="Enter Your Email" name="email" value={userdata.email} onChange={useremail} />
                                </form>
                                <div className="input-group-button btn_style" onClick={postdata}>
                                    Get it now
                                </div>
                            </div>
                        </div>

                       {/* ------------------------------------------Main Header Right Side -----------------------------------------------------------------*/}

                        <div className="col-lg-6 col-12 main-herosection-images header-right-side  d-flex justify-content-center align-items-center order-md-first order-sm-first ">
                        <img src="./images/first_img.jpg" alt="first_img" className="img-fluid"/>
                        <img src="./images/second_img.jpg" alt="second_img" className="img-fluid main-hero-img2"/>
                        </div>

                    </div>
                </section>
            </header>
        </>
    )


}

export default Header;