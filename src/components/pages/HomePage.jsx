import { useEffect } from 'react';
import Home from '../home/Home';
import Info from '../info/Info';
import Footer from '../footer/Footer';
import Product from '../product/Product';
import Functions from '../functions/Functions';

const Homepage = () => {
    useEffect(() => {
        document.body.classList.add('home');
        return () => {
            document.body.classList.remove('home');
        };
    }, []);

    return (
        <>
            <Home />
            <Info />
            <Functions />
            <Product />
            <Footer />
        </>
    )
}

export default Homepage;