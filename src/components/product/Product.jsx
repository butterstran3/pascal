import React from "react";
import "./product.css";

const Product = () => {
    return (
        <div className="product_background">
            <div className="product_container">
                <div className="product_heading">
                    <div classname="product_title">
                        <h1>Membership Options</h1>
                    </div>
                    <div className="product_subheading">
                        <p>View the range of products that we offer. Pascal is currently in a closed beta phase. We are slowly rolling out or products and building our community. Members that choose to join us now will be rewarded with great value in the future.</p>
                    </div>
                </div>
                <div className="product_table">
                    <article className="product">
                        <h1>
                            Weekly
                        </h1>
                        <div className="product_price">
                            <h2>
                                $19
                            </h2>
                            <h3>
                                /per week
                            </h3>
                        </div>
                        <ul>
                            <li>Access to all promotional bookmaker bots (+30% ROI)</li>
                            <li>NBA and Esports (+20 units)</li>
                            <li>All Pascal Discord tools (Arb finds and calculators)</li>
                            <li>Community of dedicated punters</li>
                        </ul>
                        <div className="product-btn_container">
                            <a className="product_btn" href="https://launchpass.com/pascalresearch/weekly-membership">
                                CHOOSE
                            </a>
                        </div>
                    </article>
                    {/* @@JIMBO BLUR OUT/SHADE THE WHOLE CONTAINER */}
                    <article className="product"> 
                        <h1>
                            Monthly
                        </h1>
                        <div className="product_price">
                            <h2>
                                $69
                            </h2>
                            <h3>
                                /per month
                            </h3>
                        </div>
                        <ul className="coming_soon">
                            <li>10% discount</li>
                            <li>On average, our members take 3 days to pay for their monthly</li>
                        </ul>
                        <div className="product-btn_container">
                            <a className="product_btn" href="https://launchpass.com/pascalresearch/weekly-membership">
                                CHOOSE
                            </a>
                        </div>
                    </article>
                    <article className="product">
                        <h1>
                            Yearly
                        </h1>
                        <div className="product_price">
                            <h2>
                                $839
                            </h2>
                            <h3>
                                /per year
                            </h3>
                        </div>
                        <ul className="coming_soon">
                            <li>20% discount</li>
                            <li>On average, our members take 1 month to pay for their yearly.</li>
                        </ul>
                        <div className="product-btn_container">
                            <a className="product_btn" href="mailto:contact@mispriced.io">CONTACT US</a>
                        </div>
                    </article>
                </div>
            </div>
        </div>
    )
}

export default Product;
