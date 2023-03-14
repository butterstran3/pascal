import React from "react";
import './footer.css';
import { SiDiscord } from 'react-icons/si';

const Footer = () => {
    return (
        <div className="product_info">
            <h1>JOIN OUR DISCORD</h1>
            <a className="footer-discord_btn" href="https://discord.gg/qxHEtGrT4A">
                <SiDiscord />
            </a>
        </div>
    )
}

export default Footer;