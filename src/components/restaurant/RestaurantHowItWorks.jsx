import React from 'react';

function RestaurantHowItWorks() {
  const steps = [
    {
      number: 1,
      title: "Apply to Partner",
      description: "Complete our simple partnership application form. We'll review your details and contact you within 48 hours.",
      icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
      </svg>
    },
    {
      number: 2,
      title: "Menu Setup",
      description: "We'll work with you to photograph and set up your digital menu. You decide your pricing and maintain full control.",
      icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    },
    {
      number: 3,
      title: "Equipment Setup",
      description: "We'll provide and set up a tablet at your location for order management. The $200 onboarding fee covers the tablet, setup, and training.",
      icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    },
    {
      number: 4,
      title: "Go Live",
      description: "Start receiving orders immediately! Our team will be available for support as you begin your journey with MunchRun.",
      icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    }
  ];

  return (
    <section className="py-16 container mx-auto px-4" id="how-it-works">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold">How It Works</h2>
        <p className="mt-4 text-lg max-w-2xl mx-auto text-base-content/80">
          Joining MunchRun is simple. Here's how you can start earning more with your deliveries.
        </p>
      </div>

      <div className="max-w-4xl mx-auto">
        {/* Replacing timeline with a more reliable stepped process */}
        <div className="grid grid-cols-1 gap-8 relative">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              {/* Connected line between steps */}
              {index < steps.length - 1 && (
                <div className="absolute left-6 top-16 w-0.5 bg-primary h-full -z-10 opacity-30"></div>
              )}
              
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary text-primary-content text-xl shadow-lg">
                    {step.number}
                  </div>
                </div>
                <div className="ml-6">
                  <div className="flex items-center mb-2">
                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary mr-3">
                      {step.icon}
                    </div>
                    <h3 className="text-xl font-bold">{step.title}</h3>
                  </div>
                  <div className="bg-base-100 p-4 rounded-lg shadow-md">
                    <p className="text-base-content/80">{step.description}</p>
                    {step.number === 3 && (
                      <div className="mt-3 p-2 bg-primary/5 rounded text-sm">
                        <span className="font-semibold">Note:</span> The tablet remains property of MunchRun and is provided for your use as long as you're an active partner.
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <h3 className="text-xl font-bold mb-4">Additional Growth Options</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="card bg-base-100 shadow-lg">
              <div className="card-body">
                <h4 className="card-title">
                  <span className="bg-primary/10 text-primary p-1 rounded mr-2">PRO</span>
                  Subscription
                </h4>
                <ul className="mt-2 space-y-2">
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-success flex-shrink-0 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Reduced Platform Contribution Fee (3.5%)</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-success flex-shrink-0 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Featured placement in the app</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-success flex-shrink-0 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>PRO badge on your listing</span>
                  </li>
                </ul>
              </div>
              <div className="card-footer bg-base-200 p-4 text-center">
                <p className="font-semibold">Starting at $99/month</p>
              </div>
            </div>
            
            <div className="card bg-base-100 shadow-lg border-2 border-primary">
              <div className="card-body">
                <h4 className="card-title">
                  <span className="bg-primary text-primary-content p-1 rounded mr-2">PRO+</span>
                  Subscription
                </h4>
                <ul className="mt-2 space-y-2">
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-success flex-shrink-0 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>All PRO benefits</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-success flex-shrink-0 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Promotional campaigns</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-success flex-shrink-0 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Priority customer support</span>
                  </li>
                </ul>
              </div>
              <div className="card-footer bg-base-200 p-4 text-center">
                <p className="font-semibold">Starting at $149/month</p>
              </div>
            </div>
          </div>
          <p className="mt-6 text-base-content/70">
            PRO subscriptions are optional and designed to help you maximize your earnings on MunchRun.
          </p>
        </div>
      </div>
    </section>
  );
}

export default RestaurantHowItWorks;
