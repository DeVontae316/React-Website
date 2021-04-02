import React from 'react';
import { Link } from 'react-router-dom';
import { GrFacebookOption } from 'react-icons/gr';
import { AiFillInstagram } from 'react-icons/ai';
import { AiOutlineTwitter } from 'react-icons/ai';

function Footer(props) {
    return (
        <div className="footer-wrapper">
            <div className="footer-container">

                <div className="footer-img-wrapper">
                    <img style={{ width: 270, height: 250 }} src={"/nav-logo.png"} alt="" />
                </div>
                <div className="footer-contact-hours-wrapper">
                    <div className="footer-phone">
                        (615)456-3456
                    </div>
                    <div className="footer-hours">
                        10AM - MIDNIGHT
                    </div>
                </div>
                <div className="footer-route-wrapper">
                    <div >
                        <Link to="/"  >Home</Link>
                    </div>
                    <div>
                        <Link to="/about">About</Link>
                    </div>
                    <div>
                        <Link to="/menu">Menu</Link>
                    </div>
                    <div>
                        <Link to="/contact">Contact</Link>
                    </div>
                </div>
                <div className="social-wrapper">
                    <div className="insta">

                        <AiFillInstagram />


                    </div>
                    <div className="twitt">
                        <AiOutlineTwitter />
                    </div>
                    <div className="face">
                        <GrFacebookOption />
                    </div>
                </div>
                <div className="copyright">
                    <p>@2021 CodeWithTae | All rights reserved</p>
                </div>
            </div>
        </div>
    );
}

export default Footer;