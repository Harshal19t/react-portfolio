import "./Footer.css";
import React from 'react';
import { FaGithub, FaHome, FaInstagram, FaLinkedin, FaMailBulk, FaPhone} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="Footer">
        <div className="footer-container">
            <div className="left">
                <div className="location">
                    <FaHome size={20} style={{color:"#fff", marginRight:"2rem"}} />
                    <div>
                        <p>Sheffield 3,</p>
                        <p>S37LG, Sheffield</p>
                    </div>
                </div>
                <div className="phone">
                    <h4>
                        <FaPhone size={20} style={{color:"#fff", marginRight:"2rem"}} />+44-7818924660
                    </h4>
                </div>
                <div className="email">
                    <h4>
                        <FaMailBulk size={20} style={{color:"#fff", marginRight:"2rem"}} />harshal1901@gmail.com
                    </h4>
                </div>
            </div>
            <div className="right">
                <h4>My socials:</h4>
                <div className="social">
                    <a href="https://www.linkedin.com/in/harshal-trivedi-702145208/">
                        <FaLinkedin size={30} style={{color:"#fff", marginRight:"1rem"}} />
                    </a>
                    <a href="https://github.com/Harshal19t">
                        <FaGithub size={30} style={{color:"#fff", marginRight:"1rem"}} />
                    </a> 
                    <a href="https://www.instagram.com/harshal_19t/">
                        <FaInstagram size={30} style={{color:"#fff", marginRight:"1rem"}} />
                    </a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer
