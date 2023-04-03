import React from 'react';
import './functions.css';

const Functions = () => {
    return (
        <div className='functions_container'>
            <div className='functions_heading'>
                <h1>How it works</h1>
            </div>
            <div className='functions_content'>
                <p>
                    Our independent, quantitative approach to EV betting allows us to outsmart the bookies consistently.<br />
                    <span>Boasting a proven track record and delivering a 30% turnover, our advanced algorithm alerts you to lucrative EV bets, ensuring you stay ahead in the game and consistently generate profit.</span><br />
                    <span>Unlike bookie affliated tipping services, we focus on delivering +EV bets and educating our members to find their own +EV.</span><br />
                    <span>Beat the bookies today and experience the winning edge with our data-driven, unbiased system!</span><br />
                </p>
            </div>
            <div className='steps_heading'>
                <h1>The simple steps to beating the Bookmakers</h1>
            </div>
            <div className='steps_container'>
                <div className='steps_content'>
                    <div className='step_box'>
                        <h2>Join our free trial</h2>
                        <p>Sign up to a 3 day free trial to see how the service works and start receiving the same tips our members receive. You will also receive free educational resources and strategies to maximise first deposit bonus offers.</p>
                    </div>
                </div>
                <div className='steps_content'>
                    <div className='step_box'>
                        <h2>Find the EV</h2>
                        <p>Focusing on Expected Value, our algorithms examine last-minute price shifts to uncover instances where bookmakers provide notable advantages for members in sports and racing promos.</p>
                    </div>
                </div>
                <div className='steps_content'>
                    <div className='step_box'>
                        <h2>Receive alerts through Discord</h2>
                        <p>Subscribe to a bookmaker/sport you're interested in to receive the most up-to-date EV identified through our alogirthm. Simply subsribe and bet.</p>
                    </div>
                </div>
                <div className='steps_content'>
                    <div className='step_box'>
                        <h2>Develop your betting IQ</h2>
                        <p>For no extra cost, we provide a plethora of guides, betting calculators and insights for you to improve your betting IQ.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Functions;