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
            <p> I am an MSc Advanced Computer Science student at the University of Sheffield with experience in frontend development, UI/UX design, and applied AI. I build modern, high-performance web applications using JavaScript, ReactJS, and responsive design principles. My work includes developing an e-commerce platform for organic farmers and a real-time vehicle tracking system used by over 1,000 users. I have also worked as an AI Engineer Intern, integrating large language models into production systems. With a strong focus on clean code, usability, and performance, I enjoy creating scalable, user-centred digital products that solve real-world problems.</p>
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
