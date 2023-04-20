import React from 'react';
import './services.css';
import BESPOKE from '../../assets/bespoke.jpg';
import MODEL from '../../assets/model.png';
import AUTOMATED from '../../assets/automation.jpg';

const Servcies = () => {
    return (
        <div className='services_background'>
            <div className='services_container'>
                <div className='service-list_container'>
                    <div className='service_content'>
                        <div className='service_box'>
                            <h2>Bespoke Software Solutions</h2>
                            <p>
                                Optimize your betting strategy with our proprietary gambling software, engineered to align with your individual risk appetite and preferences. Utilizing sophisticated algorithms, it rapidly evaluates favorable odds from numerous bookmakers, offering a user-friendly interface and personalized settings to cater to both expert and novice gamblers.
                            </p>
                        </div>
                        <div className='service-image_container'>
                            <img className='service_image' alt='bespoke_img' src={BESPOKE}></img>
                        </div>
                    </div>
                    <div className='alt-service_content'>
                        <div className='alt-service_box'>
                            <h2>Modelling Service</h2>
                            <p>Our advanced modeling service utilizes complex algorithms to assess historical data and various factors for horse and dog races. We provide the most advantageous bet based on odds and bookmaker lines.</p>
                            <div className='notice_container'>
                                <button className='notice_btn'>COMING SOON</button>
                            </div>
                        </div>
                        <div className='alt-service-image_container'>
                            <img className='alt-service_image' alt='model_img' src={MODEL}></img>
                        </div>
                    </div>
                    <div className='service_content'>
                        <div className='service_box'>
                            <h2>Automated Betting Service</h2>
                            <p>We also provide an option for users to set up a budget and subscribe to automated betting, which will automatically place the bet for them on their behalf.</p>
                            <div className='notice_container'>
                                <button className='notice_btn'>COMING SOON</button>
                            </div>
                        </div>
                        <div className='service-image_container'>
                            <img className='service_image' alt='automated_img' src={AUTOMATED}></img>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Servcies;