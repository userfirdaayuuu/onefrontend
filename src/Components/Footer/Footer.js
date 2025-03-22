import React from "react";
import "./Footer.css";
import { assets } from '../../Assets/Index';

const Footer = () => {
    return (
        <div className="footer" id="footer">
            <div className="footer-content">
                <div className="footer-content-left">
                    <img src={assets.logo} alt="" />
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam malesuada sit amet orci ac semper</p>
                    {/* <div className="footer-sosmed-icon">
                        <img src={assets.logowhatsapp} alt="" />
                        <img src={assets.logoinstagram} alt="" />
                    </div> */}
                </div>
                <div className="footer-content-center">
                    <h2>Company</h2>
                    <ul>
                        <li>Home</li>
                        <li>About</li>
                        <li>Address</li>
                        <li>Lorem</li>
                    </ul>
                </div>
                <div className="footer-content-right">
                    <h2>Contact Us</h2>
                    <ul>
                        <li>+62 123 456 789</li>
                        <li>bimbel@gmail.com</li>
                    </ul>
                </div>
            </div>
            <hr />
            <p className="footer-copyright">2023 Bimbingan Belajar El-Gizer. All rights reserved.</p>
        </div>
    )
}

export default Footer;