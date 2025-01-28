import React from 'react';

function HomePage() {
  return (
    <main>
      <section id="hero">
        <h2>Delivering the best of Melbourne's local food - fairly and transparently.</h2>
        {/* Add a hero image or video here */}
      </section>

      <section id="features">
        <h2>Why Choose MunchRun?</h2>
        <ul>
          <li>Fair to Drivers</li>
          <li>No Commissions for Restaurants</li>
          <li>Support Local Businesses</li>
          <li>Transparent Pricing</li>
        </ul>
      </section>

      {/* Add more sections as needed */}
    </main>
  );
}

export default HomePage;