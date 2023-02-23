import React, { useState, useEffect } from "react";
import { BsFillCaretDownFill } from 'react-icons/bs';
import './testimonials.css';

const Testimonials = () => {
    const [text, setText] = useState("");
    const [index, setIndex] = useState(0);
  
    useEffect(() => {
      const interval = setInterval(() => {
        if (index === "Check out testimonials from some of our many valued customers.".length) {
          clearInterval(interval);
        }
        setText(text + "Check out testimonials from some of our many valued customers.".charAt(index));
        setIndex(index + 1);
      }, 20);
      return () => clearInterval(interval);
    }, [index]);

    return (
        <div className="home_container">
            <div className="text_container">
                <h1 id="colored_text">Testimonials</h1>
            </div>
            <div className="type-writer_container">
                <p>{text}</p>
            </div>
            <div className="down-btn_container">
                <a href="#carousel" className="down-btn">
                    <BsFillCaretDownFill />
                </a>
            </div>
        </div>
    )
}

export default Testimonials;