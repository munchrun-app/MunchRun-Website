import React from 'react';
import RestaurantHero from './restaurant/RestaurantHero';
import RestaurantBenefits from './restaurant/RestaurantBenefits';
import RestaurantHowItWorks from './restaurant/RestaurantHowItWorks';
import RestaurantComparison from './restaurant/RestaurantComparison';
import RestaurantFAQ from './restaurant/RestaurantFAQ';
import RestaurantCTA from './restaurant/RestaurantCTA';

function RestaurantPage() {
  return (
    <main className="min-h-screen bg-base-100">
      <RestaurantHero />
      <RestaurantBenefits />
      <RestaurantHowItWorks />
      <RestaurantComparison />
      <RestaurantFAQ />
      <RestaurantCTA />
    </main>
  );
}

export default RestaurantPage;