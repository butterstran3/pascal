import React from 'react';
import Carousel from '../carousel/Carousel';
import Testimonials from '../testimonials/Testimonials';
import { useEffect } from 'react';

const TestimonialsPage = () => {
    useEffect(() => {
        document.body.classList.add('testimonials');
        return () => {
            document.body.classList.remove('testimonials');
        };
    }, []);

    return (
        <>
            <Testimonials />
            <Carousel />
        </>
    )
}

export default TestimonialsPage;