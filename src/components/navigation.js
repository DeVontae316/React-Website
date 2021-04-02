import React from 'react';
import { Link } from 'react-router-dom';
import { FaPhoneVolume, } from 'react-icons/fa';
import { FiMapPin } from 'react-icons/fi';

function Navigation(props) {
    return (
        <div className="navigation-wrapper">
            <div className="left-column">
                <div className="icon">
                    <FaPhoneVolume className="fas fa-phone-volume" />
                </div>
                <div className="contact-hours-wrapper">
                    <div className="phone">
                        (615)456-3456
                    </div>
                    <div className="hours">
                        10AM - MIDNIGHT
                    </div>
                </div>
            </div>
            <div className="link-wrapper ">
                <div className="logo wrapper">
                    <img style={{ width: 175, height: 175 }} src={"/nav-logo.png"} alt="" />
                </div>
                <div className="route-wrapper">
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

            </div>

            <div className="address-wrapper">

                <div className="location-wrapper">
                    <div className="street-wrapper">
                        <div className="street">
                            123 Any Street
                        </div>
                        <div className="state">
                            Scottsdale, AZ 85251
                        </div>
                    </div>
                    <div>
                        <FiMapPin className="map-icon" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Navigation;