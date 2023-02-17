import React from "react";
import './info.css';

const Info = () => {
    return (
        <div id="info" className="info_container">
            <div className="intro_info">
                <p>
                    We take analysis of sport into a completely different league. 
                    Through a combination of innovation and critical thought, we make the best sporting predictions in the world.
                </p>
            </div>
            <div className="product_info">
                <div className="product">
                    <div className="product_heading">
                        <h1>
                            DATA
                        </h1>
                    </div>
                    <div className="product_description">
                        <p>
                            We are data specialists. 
                            We consume information on every aspect of a sporting fixture to provide an unparalleled view of what’s happening on, and off, the pitch.
                        </p>
                    </div>
                </div>
                <div className="product">
                    <div className="product_heading">
                        <h1>
                            SPORTING PREDICTIONS
                        </h1>
                    </div>
                    <div className="product_description">
                        <p>
                            We combine cutting-edge analytics with our expertise and passion for sport to produce world leading match predictions.
                        </p>
                    </div>
                </div>
                <div className="product">
                    <div className="product_heading">
                        <h1>
                            BET EXECUTION
                        </h1>
                    </div>
                    <div className="product_description">
                        <p>
                            We are at the heart of an evolving, dynamic, global market. Our bespoke platforms enable us to execute high frequency orders around the clock.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Info;