import React, {useState, useEffect} from 'react';
import './header.css';

const Header = (props) => {
    const [text, setText] = useState("");
    const [index, setIndex] = useState(0);
  
    useEffect(() => {
      const interval = setInterval(() => {
        if (index === props.title.length) {
          clearInterval(interval);
        }
        setText(text + props.title.charAt(index));
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