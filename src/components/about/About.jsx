import React from 'react';
import './about.css';

const About = () => {
    return (
        <div className='about_container'>
            <div className='about_section'>
                <div className='about_heading'>
                    <h3>Our Mission</h3>
                </div>
                <div className='about_content'>
                    <p>
                        Our mission is to empower bettors by providing them with the tools, knowledge and strategies needed to make informed decisions and maximize their potential returns through a variety of legal betting methods. We strive to be a trusted and reliable source of information and analysis, while promoting responsible gambling practices.
                    </p>
                </div>
            </div>
            <div className='about_section'>
                <div className='about_heading'>
                    <h3>Empowering Clients</h3>
                </div>
                <div className='about_content'>
                    <p>
                        Our goal is to empower clients to make informed and strategic bets, giving them a competitve edge over the bookies.
                    </p>
                </div>
            </div>
            <div className='about_section'>
                <div className='about_heading'>
                    <h3>Our Focus</h3>
                </div>
                <div className='about_content'>
                    <p>
                    At the forefront of Racing and Sports, we specialize in curating +EV bets by meticulously comparing multiple sources. Our commitment to providing value through data-driven insights restores balance to the asymmetric betting landscape, empowering our clients with strategic advantage and unrivaled precision.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default About;