import React, { useState, useEffect } from "react";
import { BsFillCaretDownFill } from 'react-icons/bs';
import "./home.css";

const Home = () => {
    return (
        <div className="homepage_container">
            <div className="home-text_container">
                <div className="home_text">
                    <h1>Bet faster,</h1>
                    <h1>smarter.</h1>
                    {/* <h1 id="colored_text">smarter.</h1> */}
                </div>
                <div className="home_button">
                    <a className="discord_btn" href="https://discord.gg/qxHEtGrT4A" >
                        JOIN OUR DISCORD
                    </a>
                </div>
            </div>
            <div className="down-btn_container">
                <a href="#info" className="down-btn">
                    <BsFillCaretDownFill />
                </a>
            </div>
        </div>
    )
}

export default Home;
