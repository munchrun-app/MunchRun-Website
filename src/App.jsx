import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import SEOHelmet from './components/SEOHelmet';

// Import your page components
import HomePage from './components/HomePage';
import AboutPage from './components/AboutPage';
import DriversPage from './components/DriversPage';
import RestaurantsPage from './components/RestaurantsPage';
import ContactPage from './components/ContactPage';
import FAQPage from './components/FAQPage';
// Import any other page components you have

// ScrollToTop component to scroll to top on route change
function ScrollToTop() {
  const { pathname } = useLocation();

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

// SEO configuration by route
function RouteBasedSEO() {
  const { pathname } = useLocation();
  
  // Default SEO props
  let seoProps = {
    title: 'MunchRun - Fair and Transparent Food Delivery in Melbourne',
    description: 'MunchRun is a new food delivery platform in Melbourne, Australia, offering fair pay for drivers, zero commissions for restaurants, and a great experience for customers.',
    canonicalUrl: pathname,
    schemaType: 'Organization'
  };
  
  // Route-specific SEO configuration
  switch(pathname) {
    case '/':
      seoProps = {
        ...seoProps,
        title: 'MunchRun - Fair and Transparent Food Delivery in Melbourne',
        schemaType: 'FoodDeliveryService'
      };
      break;
    case '/about':
      seoProps = {
        ...seoProps,
        title: 'About MunchRun | Our Story and Mission',
        description: 'Learn about MunchRun\'s mission to create a fairer food delivery ecosystem in Melbourne with better pay for drivers and zero commissions for restaurants.',
      };
      break;
    case '/drivers':
      seoProps = {
        ...seoProps,
        title: 'Become a MunchRun Driver | Fair Pay and Better Working Conditions',
        description: 'Join MunchRun as a delivery driver and enjoy fair pay, flexible hours, and better working conditions. Learn how our driver-friendly model works.',
        keywords: 'food delivery driver, delivery job, delivery driver Melbourne, fair pay delivery, MunchRun driver'
      };
      break;
    case '/restaurants':
      seoProps = {
        ...seoProps,
        title: 'Partner with MunchRun | Zero Commission Food Delivery for Restaurants',
        description: 'Partner with MunchRun for food delivery with zero commission fees. Increase your revenue and reach more customers with our restaurant-friendly platform.',
        keywords: 'restaurant delivery service, zero commission delivery, food delivery platform, restaurant partner, Melbourne food delivery'
      };
      break;
    case '/contact':
      seoProps = {
        ...seoProps,
        title: 'Contact MunchRun | Get in Touch With Our Team',
        description: 'Have questions about MunchRun? Get in touch with our team through our contact page. We\'re here to help with any inquiries about our food delivery service.',
      };
      break;
    case '/faq':
      seoProps = {
        ...seoProps,
        title: 'Frequently Asked Questions | MunchRun Food Delivery',
        description: 'Find answers to commonly asked questions about MunchRun\'s food delivery service in Melbourne. Learn about our process, pricing, and more.',
      };
      break;
    default:
      // Keep default SEO props for any other routes
      break;
  }
  
  return <SEOHelmet {...seoProps} />;
}

function App() {
  return (
    <Router>
      <div className="App">
        <ScrollToTop />
        <RouteBasedSEO />
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/drivers" element={<DriversPage />} />
            <Route path="/restaurants" element={<RestaurantsPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/faq" element={<FAQPage />} />
            {/* Add other routes as needed */}
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
