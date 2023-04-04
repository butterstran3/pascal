import React from "react";
import './footer.css';
import { SiDiscord } from 'react-icons/si';
import { HiOutlineMail } from 'react-icons/hi';

const Footer = () => {
    return (
        // <div className="product_info">
        //     <h1>JOIN OUR DISCORD</h1>
        //     <a className="footer-discord_btn" href="https://discord.gg/qxHEtGrT4A">
        //         <SiDiscord />
        //     </a>
        // </div>

        <div className="product_info">
            <h1>Get in touch</h1>
            <h3>Email:</h3>
            <p>support@pascalresearch.io</p>
            <a className="email_btn" href="mailto:support@pascalresearch.io"><HiOutlineMail /></a>
        </div>
    )
}

export default Footer;