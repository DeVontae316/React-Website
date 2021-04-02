import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import Footer from '../components/footer';

function About() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [question, setQuestion] = useState("");
    return (
        <div>

            <div className="about-container">
                <div
                    className="about-image"
                    style={{ backgroundImage: "url(/contact.jpeg)", }}
                >

                </div>
                <div className="about-icon">
                    <h1>Contact </h1>


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


            <section style={{
                marginTop: 0,
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                width: 1500,
                height: 800,
            }}>
                <div style={{
                    marginTop: 350,
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    width: 1500,
                }}>
                    <img style={{ width: 175, height: 105 }} src={"/logo-dark.png"} alt="" />
                </div>
                <form
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        padding: 45
                    }}
                >
                    <label>Name</label>
                    <input
                        value={name}
                        style={{ marginBottom: 50, background: "none", border: "none", borderBottom: "1px solid #dcdcdc" }}
                        required
                        type="text"
                        placeholder="name"
                        onChange={(e) => setName(e.target.value)}
                    />
                    <label>Email</label>
                    <input
                        value={email}
                        style={{ marginBottom: 50, background: "none", border: "none", borderBottom: "1px solid #dcdcdc" }}
                        required
                        type="text"
                        placeholder="email"
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <label>Question</label>
                    <textarea
                        style={{
                            height: 150,
                            resize: "none"
                        }}
                        value={question}
                        onChange={(e) => setQuestion(e.target.value)}
                    />
                    <button style={{ border: "1px solid #cea135", borderRadius: 4, background: "none", fontSize: 23 }} type="submit">Submit</button>
                </form>
            </section>




            <Footer />

        </div>





    );
}

export default About;