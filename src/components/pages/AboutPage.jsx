import React from 'react';
import About from '../about/About';
import Footer from '../footer/Footer';
import Header from '../header/Header';
import { useEffect } from 'react';

const AboutPage = () => {
    useEffect(() => {
        document.body.classList.add('about');
        return () => {
            document.body.classList.remove('about');
        };
    }, []);

    const title = "About Us.";

    return (
        <>
            <Header title={title}/>
            <About />
            <Footer />
        </>
    )
}

export default AboutPage;