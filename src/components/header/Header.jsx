import React, {useState, useEffect} from 'react';
import './header.css';

const Header = () => {
    const [text, setText] = useState("");
    const [index, setIndex] = useState(0);
  
    useEffect(() => {
      const interval = setInterval(() => {
        if (index === "We love munching on peanuts".length) {
          clearInterval(interval);
        }
        setText(text + "We love munching on peanuts".charAt(index));
        setIndex(index + 1);
      }, 50);
      return () => clearInterval(interval);
    }, [index]);

    return (
        <div className='header_container'>
            <div className='header_content'>
                <h1>{text}</h1>
            </div>
        </div>
    )
}

export default Header;