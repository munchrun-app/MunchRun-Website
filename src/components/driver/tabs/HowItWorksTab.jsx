import React from 'react';

function HowItWorksTab() {
  const steps = [
    {
      icon: "📱",
      title: "Sign Up & Application",
      description: "Complete our simple online application and verification process. We'll review your information and get back to you quickly.",
      details: [
        "Basic personal information",
        "Vehicle details",
        "Working rights verification",
        "Background check consent"
      ]
    },
    {
      icon: "📅",
      title: "Onboarding Session",
      description: "Attend a brief virtual or in-person onboarding session to learn about our platform, policies, and best practices.",
      details: [
        "Platform walkthrough",
        "Earning structure explanation",
        "Order acceptance and completion",
        "Customer service expectations"
      ]
    },
    {
      icon: "🚀",
      title: "Start Delivering",
      description: "Download the MunchRun Driver app, set your availability, and start accepting delivery requests during your preferred hours.",
      details: [
        "Set your own schedule",
        "Choose your delivery zone",
        "Accept or decline orders",
        "Track your earnings in real-time"
      ]
    },
    {
      icon: "💰",
      title: "Get Paid Weekly",
      description: "Receive your earnings via direct deposit every week. All your delivery fees, wait time compensation, and 100% of tips included.",
      details: [
        "Weekly payment cycle",
        "Transparent earnings breakdown",
        "Direct deposit to your account",
        "Real-time earnings tracking"
      ]
    }
  ];

  const features = [
    {
      icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>,
      title: "Accept or Decline",
      description: "Freedom to choose which orders you want to take based on distance, earnings, and restaurant."
    },
    {
      icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>,
      title: "Flexible Hours",
      description: "Work when you want. Log in during peak meal times or whenever suits your schedule."
    },
    {
      icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>,
      title: "Performance Tiers",
      description: "Advance through our tier system to earn better guarantees and priority access to orders."
    },
    {
      icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>,
      title: "Driver Support",
      description: "Access our dedicated support team through the app for any issues during your deliveries."
    },
    {
      icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
      </svg>,
      title: "Feedback System",
      description: "Rate restaurants on wait times and order accuracy to help improve the system for everyone."
    },
    {
      icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>,
      title: "Driver Community",
      description: "Join our driver community to share tips, experiences, and build connections with fellow drivers."
    }
  ];

  return (
    <div className="card bg-base-200 shadow-xl">
      <div className="card-body">
        {/* Getting Started Section */}
        <div className="mb-10">
          <h3 className="text-2xl font-bold mb-6 flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
            Getting Started
          </h3>
          
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
                      {index + 1}
                    </div>
                  </div>
                  <div className="ml-6">
                    <div className="flex items-center mb-2">
                      <span className="text-2xl mr-2">{step.icon}</span>
                      <h4 className="text-xl font-bold">{step.title}</h4>
                    </div>
                    <p className="mb-4 text-base-content/80">{step.description}</p>
                    <div className="bg-base-100 p-4 rounded-lg">
                      <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                        {step.details.map((detail, i) => (
                          <li key={i} className="flex items-center">
                            <svg className="h-5 w-5 text-primary mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                            </svg>
                            <span>{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="divider"></div>
        
        {/* Key Features Section */}
        <div>
          <h3 className="text-2xl font-bold mb-6 flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
            </svg>
            Platform Features
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <div key={index} className="card bg-base-100 shadow-md hover:shadow-lg transition-shadow duration-300">
                <div className="card-body">
                  <div className="flex items-center mb-3">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mr-3 text-primary">
                      {feature.icon}
                    </div>
                    <h4 className="card-title text-lg">{feature.title}</h4>
                  </div>
                  <p className="text-base-content/80">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* CTA Banner */}
        <div className="mt-10 bg-primary text-primary-content p-6 rounded-xl">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div>
              <h4 className="text-xl font-bold mb-2">Ready to start your journey?</h4>
              <p>Join our driver waitlist today and be among the first to experience MunchRun.</p>
            </div>
            <a 
              href="https://forms.gle/hBcqvNmyQrMaqLHr9" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn bg-white text-primary hover:bg-white/90 mt-4 md:mt-0"
            >
              Join Driver Waitlist
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HowItWorksTab;
