import React from 'react';
import { FaTruck } from 'react-icons/fa';
import { BiWifi } from 'react-icons/bi';
import { GiFrenchFries } from 'react-icons/gi';

function Features() {
    return (
        <div style={{ backgroundImage: "url(/multiple-fries.jpg)" }} className="features-wrapper">
            <div className="columns-wrapper">
                <div className="column">
                    {/* icon here */}
                    <FaTruck className="feat-icon" />
                    <p>We deliver</p>
                    <p>We deliver M-Fri 7AM - 4PM
                        at various locations</p>
                </div>
                <div className="column">
                    {/* icon here */}
                    <BiWifi className="feat-icon" />
                    <p>Order from app</p>
                    <p>Use our app and recieve points for free fries:)</p>
                </div>
                <div className="column">
                    {/* icon here */}
                    <GiFrenchFries className="feat-icon" />
                    <p>1 million + fries cooked</p>
                    <p>Fries are our passion and we cant wait to show you!</p>
                </div>
            </div>
        </div>
    );
}

export default Features;