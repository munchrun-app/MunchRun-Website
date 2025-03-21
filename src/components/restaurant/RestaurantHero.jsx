import React from 'react';

function RestaurantHero() {
  return (
    <div className="hero min-h-[70vh] bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img 
          src="/restaurant-hero.jpg" 
          alt="Restaurant owner using MunchRun" 
          className="max-w-sm rounded-lg shadow-2xl lg:max-w-md" 
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = 'https://placehold.co/600x400?text=Restaurant+Partner';
          }}
        />
        <div className="lg:pr-8 max-w-2xl">
          <h1 className="text-4xl md:text-5xl font-bold">Partner with MunchRun</h1>
          <div className="mt-4 mb-6 p-2 bg-primary/10 inline-block rounded-lg">
            <div className="badge badge-primary">Zero Commission</div>
            <div className="badge badge-primary ml-2">Melbourne Local</div>
            <div className="badge badge-primary ml-2">Fair Pricing</div>
          </div>
          <p className="py-4 text-lg">
            Stop paying 30% commission fees. With MunchRun, you keep <span className="font-bold">100% of your dine-in menu price</span> while reaching more customers. Our revolutionary approach puts restaurants first.
          </p>
          <p className="py-2 text-base-content/80">
            Join Melbourne's fairest food delivery platform designed to help local restaurants thrive without inflating your prices.
          </p>
          <button className="btn btn-primary mt-4">Apply to Partner</button>
          <button className="btn btn-outline ml-4">Learn More</button>
        </div>
      </div>
    </div>
  );
}

export default RestaurantHero;
