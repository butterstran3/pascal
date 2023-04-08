import React from 'react';
import './about.css';

const About = () => {
    return (
        <div className='about_background'>
            <div className='about_container'>
                <div className='company_info'>
                    <div className='info_title'>
                        <h1>
                            We are at the forefront of data driven betting in Australia.
                        </h1>
                    </div>
                    <div className='info_content'>
                        <p>
                            At Pascal Research our mission is to empower the bettors like ourselves with the tools to be a winning bettor.
                            We are two computer science professionals from Optiver and Tesla sharing our passion for betting. We want to public
                            to use the tools that we created for ourselves to bet the bookies. <br />
                        </p>
                    </div>
                </div>
            </div>
            <div className='mission_container'>
                <div className='mission_heading'>
                    <h1>Our Mission</h1>
                </div>
                <div className='mission_content'>
                    <p>
                        Our mission is to empower bettors by providing them with the tools, knowledge and strategies needed to make informed decisions and maximize their potential returns through a variety of legal betting methods. We strive to be a trusted and reliable source of information and analysis, while promoting responsible gambling practices.
                    </p>
                </div>
            </div>
            <hr></hr>
            <div className='focus_container'>
                <div className='focus_heading'>
                    <h1>Our Focus</h1>
                </div>
                <div className='focus_content'>
                    <p>
                        Primarily focusing on racing, our last-minute horse racing betting algorithm will utilize a wide range of bookmakers and exchanges to determine the best bet for our users for each bookie or to decide to skip the race altogether. By utilizing multiple sources, we are able to compare odds and lines from different bookmakers in real-time, and find the best value for our users at the last second before the race starts. Users will receive notifications of what we deem as the best bet with the most favorable odds for each bookie just before the race starts, allowing them to place their bets with confidence and potentially maximizing their returns. Please note that this service is for entertainment purposes only and is not intended to be used as financial advice. Users should always gamble responsibly and within their means.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default About;