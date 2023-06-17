import "./AboutContent.css";
import {Link} from "react-router-dom";
import React from 'react';
import pic1 from "../assests/pic1.jpg";
import pic2 from "../assests/pic2.JPG"
const AboutContent = () => {
  return (
    <div className="about">
        <div className="left">
            <h1> Who am I?</h1>
            <p> I'm Harshal Trivedi, 20 year old guy studing at Ahmedabad University as final year student who loves designing and cooking.</p>
            <Link to="/contact">
                <button className="btn">Contact</button>
            </Link>
        </div>
        <div className="right">
            <div className="img-container">
                <div className="img-stack top">
                    <img src={pic2} className="img" alt="my img"/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AboutContent