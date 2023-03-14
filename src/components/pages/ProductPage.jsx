import React from 'react';
import Product from '../product/Product';
import Pricing from '../pricing/Pricing';
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
            <Pricing />
        </>
    )
}

export default ProductPage;