import React from 'react';
import './about.css';
import image1 from '../../assets/jix.jpeg';

const About = () => {
    return (
        <div className='about_container'>
            <div className='company_info'>
                <div className='info_title'>
                    <h1>
                        We are the world's greatest peanut lovers!!
                    </h1>
                </div>
                <div className='info_content'>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                    <br/>
                    <p>
                        Pharetra magna ac placerat vestibulum lectus. Sit amet volutpat consequat mauris nunc congue nisi. 
                        Odio tempor orci dapibus ultrices in iaculis nunc. Eget velit aliquet sagittis id consectetur purus ut faucibus. 
                        In cursus turpis massa tincidunt dui ut ornare lectus. Semper quis lectus nulla at. Enim sit amet venenatis urna cursus. 
                        In nulla posuere sollicitudin aliquam ultrices. Suspendisse potenti nullam ac tortor vitae purus faucibus ornare suspendisse. 
                        Aliquet enim tortor at auctor urna nunc. Donec adipiscing tristique risus nec feugiat in. 
                        Potenti nullam ac tortor vitae purus faucibus ornare suspendisse sed. Tempor id eu nisl nunc mi.
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