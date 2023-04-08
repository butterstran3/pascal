import React from 'react';
import Footer from '../footer/Footer';
import Form from '../form/Form';
import Header from '../header/Header';
import Services from '../services/Services';
import { useEffect } from 'react';

const ProductPage = () => {
    useEffect(() => {
        document.body.classList.add('services');
        return () => {
            document.body.classList.remove('services');
        };
    }, []);

    const title = "Our Additional Services."

    return (
        <>
            <Header title={title}/>
            <Services />
            <Form />
        </>
    )
}

export default ProductPage;