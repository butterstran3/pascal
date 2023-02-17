import React from 'react';
import Nav from './components/nav/Nav';
import Homepage from './components/pages/HomePage';
import ContactPage from './components/pages/ContactPage';
import { Route, Routes } from 'react-router-dom';

const App = () => {
    return (
        <>
            <Nav />
            <Routes>
                <Route path='/' element={<Homepage />} />
                <Route path='/contact' element={<ContactPage />} />
            </Routes>
        </>
    )
};

export default App;