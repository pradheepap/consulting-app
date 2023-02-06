import React from 'react';
import teamPic from '../../Assets/about.svg';
// import Fade from 'react-reveal/Fade';

const About = () => {
    return (
        <section className="about overflow-hidden py-5">
            <div className="row w-100">
                <div className="row col-md-11 mx-auto ">
                    <div className="col-md-6 img">
                    <img src={`${teamPic}`} alt="" className="img-fluid"/>

                        {/* <Fade duration={2000} left>
                        </Fade> */}
                    </div>
                    <div className="col-md-6 ps-2">
                    <p className="miniTitle">About us</p>
                            <h1 className="headerTitle">HOW WE CAN HELP YOUR <span className="headerHighlight">BUSINESS</span> GOAL</h1>
                            <p className="headerContent">Choosing a suitable theme for your business isn’t hard if you know what to look for. A solid bundled contact form plugin enables customers to make contact with you, and a means of displaying your business and location information prominently is also essential.</p>
                            <button className="branBtn">learn More</button>
                        {/* <Fade duration={2000} right>
                            <p>
                        </Fade> */}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;