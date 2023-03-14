import React from "react";
import './pricing.css';

const Pricing = () => {
    return (
        <div className="container pricing_container" id="pricing">
            <div>
                <div className="pricing_title">
                    <h4>Looking to sign up?</h4>
                    <h1>Pricing</h1>
                </div>
                <div className="pricing_options">
                    <article className="pricing_item">
                        <h2>
                            Tier 1
                        </h2>
                        <h3>
                            $49 per week
                        </h3>
                        <ul>
                            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</li>
                            <li>Elementum tempus egestas sed sed risus pretium quam</li>
                            <li>Eget velit aliquet sagittis id consectetur purus ut</li>
                            <li>Nunc lobortis mattis aliquam faucibus purus in</li>
                            <li>Ut diam quam nulla porttitor</li>
                        </ul>
                        <div className="sign-up-btn_container">
                            <button className="sign-up_btn">Sign Up</button>
                        </div>
                    </article>
                    <article className="pricing_item">
                        <h2>
                            Tier 2
                        </h2>
                        <h3>
                            $99 per month
                        </h3>
                        <ul>
                            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</li>
                            <li>Elementum tempus egestas sed sed risus pretium quam</li>
                            <li>Eget velit aliquet sagittis id consectetur purus ut</li>
                            <li>Nunc lobortis mattis aliquam faucibus purus in</li>
                            <li>Ut diam quam nulla porttitor</li>
                        </ul>
                        <div className="sign-up-btn_container">
                            <button className="sign-up_btn">Sign Up</button>
                        </div>
                    </article>
                    <article className="pricing_item">
                        <h2>
                            Tier 3
                        </h2>
                        <h3>
                            $149 per month
                        </h3>
                        <ul>
                            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</li>
                            <li>Elementum tempus egestas sed sed risus pretium quam</li>
                            <li>Eget velit aliquet sagittis id consectetur purus ut</li>
                            <li>Nunc lobortis mattis aliquam faucibus purus in</li>
                            <li>Ut diam quam nulla porttitor</li>
                        </ul>
                        <div className="sign-up-btn_container">
                            <button className="sign-up_btn">Sign Up</button>
                        </div>
                    </article>
                    <article className="pricing_item">
                        <h2>
                            ULTIMATE
                        </h2>
                        <h3>
                            $199 per month
                        </h3>
                        <ul>
                            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</li>
                            <li>Elementum tempus egestas sed sed risus pretium quam</li>
                            <li>Eget velit aliquet sagittis id consectetur purus ut</li>
                            <li>Nunc lobortis mattis aliquam faucibus purus in</li>
                            <li>Ut diam quam nulla porttitor</li>
                        </ul>
                        <div className="sign-up-btn_container">
                            <button className="sign-up_btn">Sign Up</button>
                        </div>
                    </article>
                </div>
            </div>
        </div>
    )
}

export default Pricing;