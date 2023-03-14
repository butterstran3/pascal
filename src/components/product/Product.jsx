import React, { useState, useEffect } from "react";
import { BsFillCaretDownFill } from 'react-icons/bs';
import "./product.css";

const Product = () => {
    const [text, setText] = useState("");
    const [index, setIndex] = useState(0);
  
    useEffect(() => {
      const interval = setInterval(() => {
        if (index === "View the features and pricing for our range of products.".length) {
          clearInterval(interval);
        }
        setText(text + "View the features and pricing for our range of products.".charAt(index));
        setIndex(index + 1);
      }, 20);
      return () => clearInterval(interval);
    }, [index]);

    return (
        <div className="home_container">
            <div className="text_container">
                <h1 id="colored_text">Products</h1>
            </div>
            <div className="type-writer_container">
                <p>{text}</p>
            </div>
            <div className="down-btn_container">
                <a href="#pricing" className="down-btn">
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

export default Product;
