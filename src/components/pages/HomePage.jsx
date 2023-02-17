import { useEffect } from 'react';
import Home from '../home/Home';
import Info from '../info/Info';

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
        </>
    )
}

export default Homepage;