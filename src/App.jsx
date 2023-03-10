import React from 'react';
import Nav from './components/nav/Nav';
import Homepage from './components/pages/HomePage';
import ContactPage from './components/pages/ContactPage';
import AboutPage from './components/pages/AboutPage';
import FaqsPage from './components/pages/FaqsPage';
import TestimonialsPage from './components/pages/TestimonialsPage';
import ProductPage from './components/pages/ProductPage';
import { Route, Routes } from 'react-router-dom';

const App = () => {
    return (
        <>
          <script type="text/javascript" src="https://cdnjs.com/libraries/fullPage.js"></script>
            <Nav />
            <Routes>
                <Route path='/' element={<Homepage />} />
                <Route path='/contact' element={<ContactPage />} />
                <Route path='/about' element={<AboutPage />} />
                <Route path='/testimonials' element={<TestimonialsPage />} />
                <Route path='/faqs' element={<FaqsPage />} />
                <Route path='/products' element={<ProductPage />} />
            </Routes>
        </>
    )
};

export default App;