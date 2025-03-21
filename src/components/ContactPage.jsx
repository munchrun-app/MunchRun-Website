import React from 'react';

function ContactPage() {
  return (
    <main className="bg-base-200 min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-4">
        <section className="max-w-4xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
            <p className="text-lg text-base-content/80 max-w-2xl mx-auto">
              Interested in learning more about MunchRun? We're excited to share our progress as we prepare for launch!
            </p>
          </div>
          
          {/* Main Contact Card */}
          <div className="card bg-base-100 shadow-xl mb-12">
            <div className="card-body p-8">
              <div className="flex flex-col md:flex-row gap-8 items-center">
                {/* Left side - Contact Info */}
                <div className="flex-1">
                  <h2 className="text-2xl font-bold mb-4">Get in Touch</h2>
                  <p className="mb-6 text-base-content/80">
                    MunchRun is currently in early planning stages. We'd love to hear from you if you're interested
                    in updates, have suggestions, or want to know more about our upcoming service.
                  </p>
                  
                  <div className="space-y-4">
                    <div className="flex items-center">
                      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mr-4">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <div>
                        <p className="font-medium">Email Us</p>
                        <a href="mailto:contact@munchrun.com.au" className="text-primary hover:underline">
                          contact@munchrun.com.au
                        </a>
                      </div>
                    </div>
                    
                    <div className="flex items-center">
                      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mr-4">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <div>
                        <p className="font-medium">Current Status</p>
                        <p className="text-base-content/80">In development - Not yet operating</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Right side - Email Highlight */}
                <div className="flex-1 w-full">
                  <div className="bg-base-200 rounded-lg p-6 h-full border border-base-300">
                    <div className="text-center mb-4">
                      <div className="inline-block p-3 bg-primary/10 rounded-full mb-2">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 19v-8.93a2 2 0 01.89-1.664l7-4.666a2 2 0 012.22 0l7 4.666A2 2 0 0121 10.07V19M3 19a2 2 0 002 2h14a2 2 0 002-2M3 19l6.75-4.5M21 19l-6.75-4.5M3 10l6.75 4.5M21 10l-6.75 4.5m0 0l-1.14.76a2 2 0 01-2.22 0l-1.14-.76" />
                        </svg>
                      </div>
                      <h3 className="text-xl font-bold">Stay Updated</h3>
                      <p className="text-base-content/70 mb-4">Get notified when we launch in your area</p>
                      
                      <a 
                        href="mailto:contact@munchrun.com.au?subject=MunchRun%20Updates" 
                        className="btn btn-primary btn-lg w-full">
                        Get Launch Updates
                      </a>
                    </div>
                    
                    <div className="text-sm text-base-content/60 mt-4">
                      <p>Feel free to include:</p>
                      <ul className="list-disc pl-5 mt-2 space-y-1">
                        <li>Your name</li>
                        <li>Your location/suburb</li>
                        <li>If you're interested as a customer or restaurant</li>
                        <li>Any specific questions you have</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* FAQ Section */}
          <div className="card bg-base-100 shadow-xl">
            <div className="card-body p-8">
              <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
              
              <div className="divide-y">
                <div className="py-4">
                  <h3 className="font-bold text-lg mb-2">When will MunchRun launch?</h3>
                  <p className="text-base-content/80">
                    We're currently in early planning and development stages. While we don't have an exact 
                    launch date yet, you can sign up for updates to be the first to know when we're ready!
                  </p>
                </div>
                
                <div className="py-4">
                  <h3 className="font-bold text-lg mb-2">What areas will MunchRun serve?</h3>
                  <p className="text-base-content/80">
                    We're planning to launch initially in select suburbs with plans to expand quickly. 
                    Contact us to let us know you're interested in your area, as this helps us prioritize our rollout.
                  </p>
                </div>
                
                <div className="py-4">
                  <h3 className="font-bold text-lg mb-2">How will MunchRun be different from other delivery services?</h3>
                  <p className="text-base-content/80">
                    MunchRun is designed to offer a fairer model for restaurants with 0% commissions, 
                    transparent pricing for customers, and better earnings for delivery drivers. Our goal 
                    is to create a sustainable food delivery ecosystem that works for everyone.
                  </p>
                </div>
                
                <div className="py-4">
                  <h3 className="font-bold text-lg mb-2">Can I get involved before launch?</h3>
                  <p className="text-base-content/80">
                    Absolutely! We're looking for feedback, early interest, and building our community. 
                    Whether you're a potential customer, restaurant owner, or delivery driver, we'd love to hear from you. 
                    Your input can help shape our service.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Call to Action */}
          <div className="mt-12 text-center bg-primary text-primary-content p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-3">Be part of the food delivery revolution</h2>
            <p className="mb-6 max-w-2xl mx-auto">
              MunchRun is building a better food delivery experience with fair pricing, transparent fees, 
              and support for local restaurants. Be among the first to know when we launch!
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a 
                href="mailto:contact@munchrun.com.au?subject=MunchRun%20Early%20Interest" 
                className="btn btn-lg bg-white text-primary hover:bg-white/90">
                Express Interest
              </a>
              <a 
                href="#about" 
                className="btn btn-lg btn-outline border-white text-white hover:bg-white hover:text-primary">
                Learn More
              </a>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}

export default ContactPage;