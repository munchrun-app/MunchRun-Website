import React from 'react';
import DriverHero from './driver/DriverHero';
import DriverStats from './driver/DriverStats';
import DriverComparison from './driver/DriverComparison';
import DriverContent from './driver/DriverContent';
import DriverCTA from './driver/DriverCTA';

function DriverPage() {
  return (
    <main className="pt-24 pb-16">
      <DriverHero />
      
      {/* Stats section with overflow-x handling for small devices */}
      <div className="w-full overflow-x-auto">
        <DriverStats />
      </div>
      
      {/* Driver Comparison Tool */}
      <DriverComparison />
      
      {/* Ensure tab content is properly displayed */}
      <div className="w-full">
        <DriverContent />
      </div>
      
      <DriverCTA />
    </main>
  );
}

export default DriverPage;