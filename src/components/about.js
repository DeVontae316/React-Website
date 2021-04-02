import React from 'react';
import { Link } from 'react-router-dom';

import Footer from '../components/footer';

function About() {
    return (
        <div>

            <div className="about-container">
                <div
                    className="about-image"
                    style={{ backgroundImage: "url(/about-us.jpeg)", }}
                >

                </div>
                <div className="about-icon">
                    <h1>About </h1>


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


            <div className="chef-container">
                <div className="chef-notes">
                    <img className="chef" style={{ width: 400, height: 300 }} src={"/chef.jpeg"} />
                    <span style={{ fontSize: 15,letterSpacing:2 }}>
                        Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                        accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab
                        illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
                        Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit,
                        sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
                        Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur,
                        adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et
                        dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis
                        nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid
                        ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in
                        ea voluptate velit esse quam nihil molestiae consequatur,
                        vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?
                        Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                        accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab
                        illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
                        
                        
                        Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit,
                        sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
                        Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur,
                        adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et?<br/>

                        <br/>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit,
                        sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
                        Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur,
                        adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et?

                        <br/>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit,
                        sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
                        Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur,
                        adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et?
                      
                        
                    </span>

                </div>

            </div>

            <div className="squares-wrapper">
                <div className="squares">
                    <div className="square">
                        <div className="img-wrapper">
                            <img src={"/fries-sq-1.jpeg"} alt="fries" />
                        </div>
                        <div className="square-text-wrapper">
                            <h1 className="frie-h1">Title for something idk yet so dont ask me now</h1>
                            <span className="frie-p">
                                Subtitle Title for
                                something idk yet so dont ask me now
                                Title for something idk yet so dont ask me now
                                Title for something idk yet so dont ask me now
                            </span>

                        </div>
                    </div>
                    <div className="square">
                        <div className="square-text-wrapper">
                            <h1 className="frie-h1">Title for something idk yet so dont ask me now</h1>
                            <span className="frie-p">
                                Subtitle Title for
                                something idk yet so dont ask me now
                                Title for something idk yet so dont ask me now
                                Title for something idk yet so dont ask me now
                            </span>

                        </div>
                        <div className="img-wrapper">
                            <img src={"/fries-sq-2.jpeg"} alt="fries" />
                        </div>

                    </div>

                </div>

            </div>

            <Footer/>

        </div>





    );
}

export default About;