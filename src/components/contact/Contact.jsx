import React, { useState, useEffect } from "react";
import { BsFillCaretDownFill } from 'react-icons/bs';
import "./contact.css";

const Contact = () => {
    const [text, setText] = useState("");
    const [index, setIndex] = useState(0);
  
    useEffect(() => {
      const interval = setInterval(() => {
        if (index === "Feel free to join our Discord server. Alternatively, you can send us a message by filling out the form below and we will get in touch with you.".length) {
          clearInterval(interval);
        }
        setText(text + "Feel free to join our Discord server. Alternatively, you can send us a message by filling out the form below and we will get in touch with you.".charAt(index));
        setIndex(index + 1);
      }, 20);
      return () => clearInterval(interval);
    }, [index]);

    return (
        <div className="home_container">
            <div className="text_container">
                <h1 id="colored_text">Contact Us</h1>
            </div>
            <div className="type-writer_container">
                <p>{text}</p>
            </div>
            <div className="down-btn_container">
                <a href="#form" className="down-btn">
                    <BsFillCaretDownFill />
                </a>
            </div>
            <div className="discord-btn_container">
                <a className="discord_btn" href="https://discord.gg/qxHEtGrT4A">
                    Join our Discord
                </a>
            </div>
        </div>
    )
}

export default Contact;
