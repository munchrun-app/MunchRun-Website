import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import HomePage from './HomePage';
import AboutPage from './AboutPage';
import ContactPage from './ContactPage';
import DriverPage from './DriverPage';
import RestaurantPage from './RestaurantPage';
import '../App.css'
// import other pages as needed

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/drivers" element={<DriverPage />} />
          <Route path="/restaurants" element={<RestaurantPage />} />
          {/* Add more routes here */}
        </Routes>
        <Footer />

      </div>
    </BrowserRouter>
  );
}

export default App;