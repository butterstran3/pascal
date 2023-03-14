import React, { useState, useEffect } from "react";
import { BsFillCaretDownFill } from 'react-icons/bs';
import "./product.css";

const Product = () => {
    return (
        <div className="product_container">
            <div className="product_heading">
                <div classname="product_title">
                    <h1>Products</h1>
                </div>
                <div className="product_subheading">
                    <p>View the range of products that we offer. Pascal is currently in a closed beta phase. We are slowly rolling out or products and building our community. Members that choose to join us now will be rewarded with great value in the future.</p>
                </div>
            </div>
            <div className="product_table">
                <article className="product">
                    <h1>
                        Tier 1
                    </h1>
                    <div className="product_price">
                        <h2>
                            49.00
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
                        <button className="product_btn">CHOOSE</button>
                    </div>
                </article>
                {/* @@JIMBO BLUR OUT/SHADE THE WHOLE CONTAINER */}
                <article className="product"> 
                    <h1>
                        Tier 2
                    </h1>
                    <div className="product_price">
                        <h2>
                            -
                        </h2>
                        <h3>
                            /per week
                        </h3>
                    </div>
                    <ul>
                        <li> </li>
                        <li> </li>
                        <li> </li>
                        <li> </li>
                    </ul>
                    <div className="coming-soon_container">
                        <p>COMING SOON</p>
                    </div>
                </article>
                <article className="product">
                    <h1>
                        Tier 3
                    </h1>
                    <div className="product_price">
                        <h2>
                            -
                        </h2>
                        <h3>
                            /per week
                        </h3>
                    </div>
                    <ul>
                        <li> </li>
                        <li> </li>
                        <li> </li>
                        <li> </li>
                    </ul>
                    <div className="coming-soon_container">
                        <p>COMING SOON</p>
                    </div>
                </article>
            </div>
        </div>

        // @@JIMBO need to add another div here to talk about other products or make product a dropdown in nav bar with coming soon hovers
    )
}

export default Product;
