import React from 'react';
import './functions.css';

const Functions = () => {
    return (
        <div className='functions_container'>
            <div className='functions_heading'>
                <h1>How it works</h1>
            </div>
            <div className='functions_content'>
                <p>Our independent, quantitative approach to EV betting allows us to outsmart the bookies consistently.</p>
                <p>Boasting a proven track record and delivering a 30% turnover, our advanced algorithm alerts you to lucrative EV bets, ensuring you stay ahead in the game and consistently generate profit.</p>
                <p>Unlike bookie affliated tipping services, we focus on delivering +EV bets and educating our members to find their own +EV.</p>
                <p>Beat the bookies today and experience the winning edge with our data-driven, unbiased system!</p>
            </div>
            <div className='steps_heading'>
                <h1>The simple steps to beating the Bookmakers</h1>
            </div>
            <div className='steps_container'>
                <div className='steps_content'>
                    <div className='step_box'>
                        <h2>Sign up to a free trial</h2>
                        <p>Sign up to a 3 day free trial to see how the service works and start receiving the same tips our members receive. You will also receive free educational resources and strategies to maximise first deposit bonus offers.</p>
                    </div>
                </div>
                <div className='steps_content'>
                    <div className='step_box'>
                        <h2>Identify the EV</h2>
                        <p>Focusing on Expected Value, our algorithms examine last-minute price shifts to uncover instances where bookmakers provide notable advantages for members in sports and racing promos.</p>
                    </div>
                </div>
                <div className='steps_content'>
                    <div className='step_box'>
                        <h2>Receive alerts via Discord</h2>
                        <p>When an edge of over 30% (profit on turnover expectancy) is identified, Edge Alerter will let you know the bookmaker, race/game, and horse/team to back, and you simply place the bets.</p>
                    </div>
                </div>
                <div className='steps_content'>
                    <div className='step_box'>
                        <h2>Improve your betting IQ</h2>
                        <p>In addition to the algorithm generated tips, we provide you with a library of calculators, articles, guides, and insights to give you the tools to fish for yourself. All at no extra cost!</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Functions;