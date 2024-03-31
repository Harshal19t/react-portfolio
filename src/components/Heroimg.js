import "./Heroimg.css"
import IntroImg from "../assests/pexels-soumil-kumar-735911.jpg"
import React from 'react'
import {Link} from "react-router-dom"
import Typewriter from "typewriter-effect";


const Heroimg = () => {  
  return (
    <div className="hero">
        <div className="mask">
            <img className="intro-img" src={IntroImg} alt="IntroImg"/>
            {/* <video src={videobg} autoPlay loop muted /> */}
        </div>
        <div className="content">
            <p> Hi, I'm a novice </p>
            <h1><Typewriter onInit={(typewriter) => { typewriter
         .typeString("Data Analyst")
         .pauseFor(1000)
         .deleteAll()
         .typeString("React Developer")
         .pauseFor(1000)
         .deleteAll()
         .typeString("UI/UX Designer")
         .start();
 }}
/></h1>
            <br />
            <div>
                <Link to="/project" className="btn"> Projects </Link>
                <Link to="/contact" className="btn btn-light"> Contact </Link>
            </div>
        </div>
    </div>
  )
}


export default Heroimg
