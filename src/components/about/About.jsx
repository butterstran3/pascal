import React from 'react';
import './about.css';
import image1 from '../../assets/bhead.jpg';

const About = () => {
    return (
        <div className='about_container'>
            <div className='company_info'>
                <div className='info_title'>
                    <h1>
                        We are at the forefront of data driven betting in Australia.
                    </h1>
                </div>
                <div className='info_content'>
                    <p>
                        At Pascal Research our mission is to empower the bettors like ourselves with the tools to be a Winning bettor.
                        We are two computer science professionals with a love for betting. Our goal now is to enable to public with the tools that we've
                        created for ourselves. 
                    </p>
                    <br/>
                    <p>
                        Think of some nonsense @bho
                    </p>
                </div>
            </div>
            <div className='about_image'>
                <img alt='pascal_img' src={image1}></img>
            </div>
        </div>
    )
}

export default About;