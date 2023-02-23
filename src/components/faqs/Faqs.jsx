import React, { useState, useEffect } from "react";
import { BsFillCaretDownFill } from 'react-icons/bs';
import './faqs.css';

const Faqs = () => {
    const [text, setText] = useState("");
    const [index, setIndex] = useState(0);
    
    useEffect(() => {
        const interval = setInterval(() => {
        if (index === "If you have any questions unrelated to any of the FAQs, don't hesitate to contacts us via our contact page".length) {
            clearInterval(interval);
        }
        setText(text + "If you have any questions unrelated to any of the FAQs, don't hesitate to contacts us via our contact page.".charAt(index));
        setIndex(index + 1);
        }, 20);
        return () => clearInterval(interval);
    }, [index]);

    return (
        <div className="home_container">
            <div className="text_container">
                <h1 id="colored_text">FAQs</h1>
            </div>
            <div className="type-writer_container">
                <p>{text}</p>
            </div>
            <div className="down-btn_container">
                <a href="#faqs" className="down-btn">
                    <BsFillCaretDownFill />
                </a>
            </div>
        </div>
    )
};

export default Faqs;