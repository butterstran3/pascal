import React from 'react';
import Product from '../product/Product';
import Footer from '../footer/Footer';
import { useEffect } from 'react';

const ProductPage = () => {
    useEffect(() => {
        document.body.classList.add('products');
        return () => {
            document.body.classList.remove('products');
        };
    }, []);

    return (
        <>
            <Product />
            <Footer />
        </>
    )
}

export default ProductPage;