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
                        Primarily focusing on racing, our last-minute horse racing betting algorithm will utilize a wide range of bookmakers and exchanges to determine the best bet for our users for each bookie or to decide to skip the race altogether. By utilizing multiple sources, we are able to compare odds and lines from different bookmakers in real-time, and find the best value for our users at the last second before the race starts. Users will receive notifications of what we deem as the best bet with the most favorable odds for each bookie just before the race starts, allowing them to place their bets with confidence and potentially maximizing their returns. Please note that this service is for entertainment purposes only and is not intended to be used as financial advice. Users should always gamble responsibly and within their means.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default About;