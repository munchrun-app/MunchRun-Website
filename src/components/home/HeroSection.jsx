import React, { useEffect, useState } from 'react';

function HeroSection() {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="hero min-h-[85vh] bg-base-200 relative overflow-hidden">
      {/* Background image with overlay */}
      <div className="absolute inset-0 bg-black/40 z-10"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-base-100 z-10"></div>
      <div className="absolute inset-0 bg-cover bg-center" style={{
        backgroundImage: "url('https://images.unsplash.com/photo-1565299585323-38d6b0865b47?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80')",
        backgroundPosition: "center"
      }}></div>

      <div className="hero-content text-center z-20 px-4 pt-16 pb-32 w-full max-w-7xl mx-auto">
        <div className={`max-w-3xl transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="mb-5">
            <span className="inline-block px-4 py-1 rounded-full bg-primary text-white font-semibold text-sm">
              Coming Soon to Melbourne
            </span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-4 text-white drop-shadow-lg">MunchRun</h1>
          <h2 className="text-2xl md:text-3xl font-medium mb-6 text-white drop-shadow-md">
            Local Food Delivery Done Right
          </h2>
          <p className="text-lg md:text-xl mb-8 text-white/90 max-w-2xl mx-auto leading-relaxed drop-shadow-md">
            Support local restaurants and drivers with a fair, transparent 
            food delivery service — coming soon to Melbourne.
          </p>

          <div className="grid grid-cols-3 gap-4 mb-10 max-w-xl mx-auto">
            <div className="bg-white/90 backdrop-blur-sm p-4 rounded-lg shadow-lg">
              <div className="flex justify-center mb-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
              </div>
              <div className="text-center text-base-content text-sm font-medium">
                Zero Commission Fees
              </div>
            </div>
            <div className="bg-white/90 backdrop-blur-sm p-4 rounded-lg shadow-lg">
              <div className="flex justify-center mb-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div className="text-center text-base-content text-sm font-medium">
                Fair Driver Pay
              </div>
            </div>
            <div className="bg-white/90 backdrop-blur-sm p-4 rounded-lg shadow-lg">
              <div className="flex justify-center mb-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
              </div>
              <div className="text-center text-base-content text-sm font-medium">
                Support Local
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="mailto:contact@munchrun.com.au" className="btn btn-primary btn-lg shadow-lg">
              Get Notified at Launch
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
              </svg>
            </a>
            <a 
              href="#vision" 
              className="btn bg-white/90 text-base-content shadow-lg hover:bg-white btn-lg"
              onClick={(e) => {
                if (document.getElementById('vision')) {
                  e.preventDefault();
                  document.getElementById('vision').scrollIntoView({
                    behavior: 'smooth'
                  });
                }
              }}
            >
              Learn More
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      <div className="absolute -bottom-8 left-0 right-0 h-16 bg-gradient-to-t from-base-100 to-transparent z-30"></div>
    </section>
  );
}

export default HeroSection;
