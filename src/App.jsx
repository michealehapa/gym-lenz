import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './pages/home/Home';
import About from './pages/about/About';
import Contact from './pages/contact/Contact';
import Gallery from './pages/gallery/Gallery';
import Plans from './pages/plans/Plans';
import Trainers from './pages/trainers/Trainers';
import Navbar from './components/Navbar';
import Footer from './components/Footer';



const App = () => {
  return (
    // </BrowserRouter>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/plans" element={<Plans />} />
        <Route path="/trainers" element={<Trainers />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
};

export default App;
