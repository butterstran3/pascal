import React from 'react';
import About from '../about/About';
import { useEffect } from 'react';

const AboutPage = () => {
    useEffect(() => {
        document.body.classList.add('about');
        return () => {
            document.body.classList.remove('about');
        };
    }, []);

    return (
        <About />
    )
}

export default AboutPage;