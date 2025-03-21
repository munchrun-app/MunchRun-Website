import React from 'react';

function RestaurantBenefits() {
  const benefits = [
    {
      icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>,
      title: "Zero Commission Fees",
      description: "Keep 100% of your menu prices. We don't take a cut from your hard-earned sales like other platforms."
    },
    {
      icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>,
      title: "Transparent Pricing",
      description: "Keep your dine-in prices on MunchRun. The Platform Contribution Charge is added separately and paid by customers, not taken from your earnings."
    },
    {
      icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
      </svg>,
      title: "Full Menu Control",
      description: "Set your own prices and manage your menu with complete autonomy. Update items instantly through our easy-to-use dashboard."
    },
    {
      icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>,
      title: "Free Tablet Provided",
      description: "Receive a dedicated Android tablet to manage orders efficiently. No hardware costs or complicated setup."
    },
    {
      icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" />
      </svg>,
      title: "Marketing Support",
      description: "Get featured in our promotional campaigns to reach new customers throughout Melbourne. Increase your visibility at no extra cost."
    },
    {
      icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>,
      title: "Large Order Bonuses",
      description: "Earn extra from large orders over $100. Unlike commission-based platforms, you can actually make more on bigger orders."
    },
    {
      icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
      </svg>,
      title: "PRO Subscription Option",
      description: "Opt for our PRO or PRO+ subscription to reduce the Platform Contribution Fee customers pay, leading to more orders and increased revenue."
    }
  ];

  return (
    <section className="py-16 px-4 container mx-auto" id="benefits">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold">Benefits for Restaurant Partners</h2>
        <p className="mt-4 text-lg max-w-2xl mx-auto text-base-content/80">
          Join Melbourne's fair food delivery platform and experience the difference that puts restaurants first.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {benefits.map((benefit, index) => (
          <div key={index} className="card bg-base-200 shadow-lg hover:shadow-xl transition-shadow">
            <div className="card-body">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center text-primary">
                  {benefit.icon}
                </div>
                <h3 className="card-title ml-4">{benefit.title}</h3>
              </div>
              <p className="text-base-content/80">{benefit.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default RestaurantBenefits;
