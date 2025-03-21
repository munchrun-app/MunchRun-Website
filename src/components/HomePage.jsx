import React from 'react';
import HeroSection from './home/HeroSection';
import VisionSection from './home/VisionSection';
import CustomerComparison from './home/CustomerComparison';
import HowItWorks from './home/HowItWorks';
import ContactSection from './home/ContactSection';
import FaqSection from './home/FaqSection';

function HomePage() {
  return (
    <main className="min-h-screen pt-24">
      <HeroSection />
      <VisionSection />
      <CustomerComparison />
      <HowItWorks />
      <ContactSection />
      <FaqSection />
    </main>
  );
}

export default HomePage;