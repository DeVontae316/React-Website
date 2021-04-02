import React from 'react';
import { Link } from 'react-router-dom';

import Footer from '../components/footer';

function Menu() {
    const menuOptions = [
        "Spicy with canjun sauce",
        "Spicy without sauce",
        "Non spicy with canjun sauce",
        "Spicy without canjun sauce",
    ]
    const kidOptions = [
        "baked with w/ no spice",
        "midly spicy fries with low sugar ketchup",
        "gluten free",
        "curly fries to have fun with",
    ]
    return (
        <div>

            <div className="about-container">
                <div
                    className="about-image"
                    style={{ backgroundImage: "url(/menu.jpeg)", }}
                >

                </div>
                <div className="about-icon">
                    <h1>Menu </h1>


                </div>
                <div className="about-nav-container">

                    <div className="about-nav">
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
            </div>




            <div className="squares-wrapper-menu">
                <div className="squares">
                    <div className="square">
                        <div className="img-wrapper">
                            <img src={"/fries-sq-1.jpeg"} alt="fries" />
                        </div>
                        <div className="square-text-wrapper">
                            <h1 className="frie-h1">SPICY</h1>
                            <ul>
                                {menuOptions.map(description => (
                                    <li key={description} style={{ marginBottom: 15 }}>{description}</li>
                                ))}
                            </ul>
                            <span style={{ textAlign: "center" }} className="frie-p">
                                Subtitle Title for...
                               
                            </span>

                        </div>
                    </div>
                    <div className="square">
                        <div className="square-text-wrapper">
                            <h1 style={{ marginRight: 90 }} className="frie-h1">Kid friendly</h1>
                            <ul>
                                {kidOptions.map(description => (
                                    <li key ={description}style={{ marginBottom: 15 }}>{description}</li>
                                ))}
                            </ul>
                            <span style={{marginRight:130}}className="frie-p">
                                Subtitle Title for...
                                
                            </span>
                        </div>
                        <div className="img-wrapper">
                            <img src={"/fries-sq-2.jpeg"} alt="fries" />
                        </div>

                    </div>

                </div>

            </div>

            <Footer />

        </div>





    );
}

export default Menu;