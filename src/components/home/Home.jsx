import React, { useState, useEffect } from "react";
import { BsFillCaretDownFill } from 'react-icons/bs';
import "./home.css";

const Home = () => {
    const [text, setText] = useState("");
    const [index, setIndex] = useState(0);
  
    useEffect(() => {
      const interval = setInterval(() => {
        if (index === "Hi there!! My name is Jackson Zhang and I love to eat all types of nuts. My favourites consist of peanuts, almonds, cashews and DEEZ NUTS!!".length) {
          clearInterval(interval);
        }
        setText(text + "Hi there!! My name is Jackson Zhang and I love to eat all types of nuts. My favourites consist of peanuts, almonds, cashews and DEEZ NUTS!!".charAt(index));
        setIndex(index + 1);
      }, 20);
      return () => clearInterval(interval);
    }, [index]);

    return (
        <div className="home_container">
            <div className="text_container">
                <h1>WE ANSWER THE MOST INTERESTING QUESTIONS IN</h1>
                <h1 id="colored_text">SPORT.</h1>
            </div>
            <div className="type-writer_container">
                <p>{text}</p>
            </div>
            <div className="down-btn_container">
                <a href="#info" className="down-btn">
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

export default Home;
