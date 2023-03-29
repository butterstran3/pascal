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
                            At Pascal Research our mission is to empower the bettors like ourselves with the tools to be a Winning bettor.
                            We are two computer science professionals with a love for betting. Our goal now is to enable to public with the tools that we've
                            created for ourselves. 
                        </p>
                        <br/>
                        <p>
                            Think of some nonsense @bho
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
                        Our mission is to empower bettors by providing them with the tools, knowledge and strategies needed to make informed decisions and maximize their potential returns through a variety of legal betting methods.<br />
                        <span>We strive to be a trusted and reliable source of information and analysis, while promoting responsible gambling practices.</span>
                    </p>
                </div>
            </div>
            <div className='focus_container'>
                <div className='focus_heading'>
                    <h1>Our Focus</h1>
                </div>
                <div className='focus_content'>
                    <p>
                        Primarily focusing on racing, our last-minute horse racing betting algorithm will utilize a wide range of bookmakers and exchanges to determine the best bet for our users for each bookie or to decide to skip the race altogether. By utilizing multiple sources, we are able to compare odds and lines from different bookmakers in real-time, and find the best value for our users at the last second before the race starts.<br />
                        <span>Users will receive notifications of what we deem as the best bet with the most favorable odds for each bookie just before the race starts, allowing them to place their bets with confidence and potentially maximizing their returns.</span><br />
                        <span>Please note that this service is for entertainment purposes only and is not intended to be used as financial advice. Users should always gamble responsibly and within their means.</span><br />
                    </p>
                </div>
            </div>
        </div>
    )
}

export default About;