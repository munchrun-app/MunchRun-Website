import React from 'react';

function DriverCTA() {
  return (
    <section className="py-16 bg-primary">
      <div className="container mx-auto px-4">
        <div className="text-center">
          {/* Improved contrast with darker text on primary background */}
          <h2 className="text-3xl font-bold mb-6 text-primary-content">Ready to Drive With MunchRun?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-primary-content opacity-90">
            Join our waitlist today and be among the first to experience a fairer food delivery platform in Melbourne.
          </p>
          
          {/* Improved contrast buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="https://forms.gle/hBcqvNmyQrMaqLHr9" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn btn-lg bg-white text-primary hover:bg-neutral-100 border-white"
            >
              Join Driver Waitlist
            </a>
            <a 
              href="mailto:drivers@munchrun.com.au" 
              className="btn btn-lg btn-outline border-white text-white hover:bg-white hover:text-primary"
            >
              Contact Driver Support
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default DriverCTA;
