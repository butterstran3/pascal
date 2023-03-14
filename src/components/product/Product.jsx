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
                    <p>View the range of products that we offer</p>
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
                        <li>Elementum tempus egestas sed sed risus pretium quam</li>
                        <li>Eget velit aliquet sagittis id consectetur purus ut</li>
                        <li>Nunc lobortis mattis aliquam faucibus purus in</li>
                        <li>Ut diam quam nulla porttitor</li>
                    </ul>
                    <div className="product-btn_container">
                        <button className="product_btn">CHOOSE</button>
                    </div>
                </article>
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
                        <li>Elementum tempus egestas sed sed risus pretium quam</li>
                        <li>Eget velit aliquet sagittis id consectetur purus ut</li>
                        <li>Nunc lobortis mattis aliquam faucibus purus in</li>
                        <li>Ut diam quam nulla porttitor</li>
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
                        <li>Elementum tempus egestas sed sed risus pretium quam</li>
                        <li>Eget velit aliquet sagittis id consectetur purus ut</li>
                        <li>Nunc lobortis mattis aliquam faucibus purus in</li>
                        <li>Ut diam quam nulla porttitor</li>
                    </ul>
                    <div className="coming-soon_container">
                        <p>COMING SOON</p>
                    </div>
                </article>
            </div>
        </div>
    )
}

export default Product;
