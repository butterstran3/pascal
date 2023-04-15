import React from 'react';
import './functions.css';
import TRIAL from '../../assets/trial.png';
import EV from '../../assets/ev.png';
import ALERT from '../../assets/alert.png';
import IQ from '../../assets/iq.png';

const Functions = () => {
    return (
        <div className='functions_container'>
            <div className='functions_intro'>
                <div className='functions_heading'>
                    <h1>How it works</h1>
                </div>
                <div className='functions_content'>
                    <p>
                        Our independent, quantitative approach to EV betting allows us to outsmart the bookies consistently. Boasting a proven track record and delivering a 30% turnover, our advanced algorithm alerts you to lucrative EV bets, ensuring you stay ahead in the game and consistently generate profit. Unlike bookie affliated tipping services, we focus on delivering +EV bets and educating our members to find their own +EV. Beat the bookies today and experience the winning edge with our data-driven, unbiased system!
                    </p>
                </div>
            </div>
            <div className='steps_heading'>
                <h1>Steps to beat the bookmakers</h1>
            </div>
            <div className='steps_container'>
                <div className='steps_content'>
                    <div className='image_container'>
                        <img className='step_image' alt='trial_img' src={TRIAL}></img>
                    </div>
                    <div className='step_box'>
                        <h2>Join our free trial</h2>
                        <p>Sign up to a 3 day free trial to see how the service works. You will also receive free educational resources and strategies to maximise first deposit bonus offers.</p>
                    </div>
                </div>
                <div className='steps_content'>
                    <div className='image_container'>
                        <img className='step_image' alt='ev_img' src={EV}></img>
                    </div>
                    <div className='step_box'>
                        <h2>Find the EV</h2>
                        <p>Focusing on Expected Value, our algorithms examine last-minute price shifts to uncover instances where bookmakers provide notable advantages for members in sports and racing promos.</p>
                    </div>
                </div>
                <div className='steps_content'>
                    <div className='image_container'>
                        <img className='step_image' alt='alert_img' src={ALERT}></img>
                    </div>
                    <div className='step_box'>
                        <h2>Receive alerts through Discord</h2>
                        <p>Subscribe to a bookmaker/sport you're interested in to receive the most up-to-date EV identified through our alogirthm. Simply subsribe and bet.</p>
                    </div>
                </div>
                <div className='steps_content'>
                    <div className='image_container'>
                        <img className='step_image' alt='iq_img' src={IQ}></img>
                    </div>
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