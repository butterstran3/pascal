import React from 'react';
import './about.css';
import { useState, useEffect } from 'react';
import image1 from '../../assets/office_pic.jpg';

const About = () => {
    const [text, setText] = useState("");
    const [index, setIndex] = useState(0);
  
    useEffect(() => {
      const interval = setInterval(() => {
        if (index === "We love what we do.".length) {
          clearInterval(interval);
        }
        setText(text + "We love what we do.".charAt(index));
        setIndex(index + 1);
      }, 20);
      return () => clearInterval(interval);
    }, [index]);

    return (
        <div className='about_container'>
            <div className='about_intro'>
                <h1 className='about_heading'>{text}</h1>
            </div>
            <div className='light_container'>
                <div className='image_container'>
                        <img className='image' src={image1} alt='div_image'/>
                </div>
                <div className='about-info_container'>
                    <div className='title_container'>
                        <h1 className='title'>WHO WE ARE</h1>
                    </div>
                    <div className='content_container'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                        Pretium aenean pharetra magna ac placerat vestibulum. 
                        Non arcu risus quis varius quam quisque. Proin sagittis nisl rhoncus mattis rhoncus. 
                    </div>
                </div>
            </div>
            <div className='dark_container'>
                <div className='about-info_container'>
                    <div className='title_container'>
                        <h1 className='title'>WHO WE ARE</h1>
                    </div>
                    <div className='content_container'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                        Pretium aenean pharetra magna ac placerat vestibulum. 
                        Non arcu risus quis varius quam quisque. Proin sagittis nisl rhoncus mattis rhoncus. 
                    </div>
                </div>
                <div className='image_container'>
                        <img className='image' src={image1} alt='div_image'/>
                </div>
            </div>
        </div>
    )
}

export default About;