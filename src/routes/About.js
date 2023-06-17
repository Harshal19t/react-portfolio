import React from 'react';
import Navbar from "../components/Navbar";
import Footer from '../components/Footer';
import Heroimg3 from '../components/Heroimg3';
import AboutContent from '../components/AboutContent';


const About = () => {
  return (
    <div>
      <Navbar />
      <Heroimg3 heading="About Me." text="find out who is behind this website"/>
      <AboutContent/>
      <Footer />
    </div>
  )
}

export default About