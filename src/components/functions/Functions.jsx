import React from 'react';
import './functions.css';

const Functions = () => {
    return (
        <div className='functions_container'>
            <div className='functions_heading'>
                <h1>How Pascal Research outsmarts the bookies</h1>
            </div>
            <div className='functions_content'>
                <p>Pascal Research is a system that identifies value in racing and sport promotions, through algorithms that monitor price and volume data.</p>
                <p>Members then receive these alerts in real-time, whenever opportunities of greater than 30% profit on turnover are identified.</p>
                <p>Unlike other sports tipping services that claim to have inside knowledge, are affiliated with the bookmakers, or have no proven track record, Pascal Research uses a 100% quantitative approach that was developed by a professional Derivatives Trader and former Bet365 Senior Trader.</p>
                <p>We know that only 0.5% of bettors beat the bookies long term however, Pascal Research members are empowered with the education they need to beat the bookies in Australia.</p>
                <p>No intuition, no emotion, just cold hard maths.</p>
            </div>
            <div className='steps_heading'>
                <h1>The simple steps to beating the Bookmakers</h1>
            </div>
            <div className='steps_container'>
                <div className='steps_content'>
                    <div className='step_box'>
                        <h2>Sign up to a free trial</h2>
                        <p>Sign up to a 7 day free trial to see how the service works and start receiving the same tips our members receive. You will also receive free educational resources and strategies to maximise first deposit bonus offers.</p>
                    </div>
                </div>
                <div className='steps_content'>
                    <div className='step_box'>
                        <h2>Identify the Edge</h2>
                        <p>Our algorithms analyse last minute price fluctuations to identify when bookmakers offer significant edge to our members in sport and racing promotions.</p>
                    </div>
                </div>
                <div className='steps_content'>
                    <div className='step_box'>
                        <h2>Receive alerts via Telegram</h2>
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