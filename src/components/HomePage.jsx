import React from 'react';

function HomePage() {
  return (
    <main>
      <section id="hero">
        <h2>Delivering the best of Melbourne's local food - fairly and transparently.</h2>
        <p>Join MunchRun and experience a new way to enjoy your favourite meals.</p>
      </section>

      <section id="features">
        <h2>Why Choose MunchRun?</h2>
        <ul>
          <li>
            <strong>Fair to Drivers:</strong> Competitive pay and a unique minimum earnings guarantee.
          </li>
          <li>
            <strong>No Commissions for Restaurants:</strong>  Empowering local businesses to thrive.
          </li>
          <li>
            <strong>Support Local:</strong> Discover and enjoy the best independent eateries in Melbourne.
          </li>
          <li>
            <strong>Transparent Pricing:</strong>  Know exactly what you're paying for.
          </li>
        </ul>
      </section>

      <section id="call-to-action">
        <h2>Ready to get started?</h2>
        <p>Download the app or sign up online today!</p>
        {/* Add app download buttons or links here */}
      </section>
    </main>
  );
}

export default HomePage;