import React from 'react';
import './services.css';

const Servcies = () => {
    return (
        <div className='services_background'>
            <div className='services_container'>
                <div className='service_heading'>
                    <h1>Services Available</h1>
                </div>
                <div className='service-list_container'>
                    <div className='service_content'>
                        <div className='service_box'>
                            <h2>Bespoke  Software Solutions</h2>
                            <p>
                                Our innovative in-house gambling software, designed to help you find the most expected value while aligning with your individual risk appetite and parameters. Utilizing advanced algorithms and real-time data analysis, our software is able to quickly identify and evaluate the most favorable odds and lines from a wide range of bookmakers and exchanges, taking into account your unique preferences and requirements. <br />
                                <span>Our software offers a user-friendly interface and customizable settings, allowing you to easily set your risk tolerance and establish your desired parameters. Whether you're a seasoned professional or a novice gambler, our software takes the guesswork out of betting and gives you the edge you need to succeed while adhering to your own comfort level.</span>
                            </p>
                        </div>
                    </div>
                    <div className='service_content'>
                        <div className='service_box'>
                            <h2>Modelling Service (Coming Soon)</h2>
                            <p>The modeling service employs sophisticated algorithms to analyze historical data and track the performance of horses, jockeys, and trainers, while also considering factors such as weather and track conditions. This information is processed through machine learning algorithms to determine the probability of a horse or dog winning the race. We then use this analysis to identify the best bet, based on the odds and lines offered by various bookmakers. Please be aware that using this service necessitates placing bets early and in significant amounts. The odds will change significantly as bookmakers determine the optimal price through the actions of many bettors taking advantage of mispriced lines. So, it is important to bet early to capitalize on these mispricings.</p>
                        </div>
                    </div>
                    <div className='service_content'>
                        <div className='service_box'>
                            <h2>Automated Betting Service (Coming Soon)</h2>
                            <p>We also provide an option for users to set up a budget and subscribe to automated betting, which will automatically place the bet for them on their behalf.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Servcies;