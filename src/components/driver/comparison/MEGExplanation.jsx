import React from 'react';

function MEGExplanation({ megTiers, driverTier }) {
  return (
    <div className="card bg-base-100 shadow-lg mt-8">
      <div className="card-body p-6">
        <h3 className="text-xl font-bold mb-4">Understanding the Minimum Earnings Guarantee (MEG)</h3>
        <p className="mb-4 text-sm">
          MunchRun's hybrid MEG model combines base pay for all online hours with an active time bonus, providing both a safety net and rewarding efficiency:
        </p>
        
        <div className="overflow-x-auto">
          <table className="table table-zebra table-sm">
            <thead>
              <tr>
                <th>Tier</th>
                <th>Base Guarantee</th>
                <th>Active Time Bonus</th>
                <th>Total Active Rate</th>
                <th>Requirements</th>
              </tr>
            </thead>
            <tbody>
              {Object.keys(megTiers).map(key => (
                <tr key={key} className={driverTier === key ? 'bg-primary/10 font-medium' : ''}>
                  <td>{megTiers[key].name}</td>
                  <td>${megTiers[key].baseGuarantee}/hr online</td>
                  <td>+${megTiers[key].activeTimeBonus}/hr active</td>
                  <td>${megTiers[key].totalHourlyGuarantee}/hr</td>
                  <td className="text-xs">
                    {megTiers[key].requirements.acceptanceRate}% accept, 
                    {megTiers[key].requirements.completionRate}% complete, 
                    {megTiers[key].requirements.customerRating}+ rating
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
        <div className="alert alert-info mt-4">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="stroke-current shrink-0 w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
          </svg>
          <div>
            <div className="font-bold">MEG Only Applies During Peak Periods</div>
            <p className="text-sm">The Minimum Earnings Guarantee is only active during designated peak periods. During non-peak periods, earnings are based solely on base pay, distance pay, and wait time compensation.</p>
          </div>
        </div>
        
        <div className="mt-4 text-sm">
          <h4 className="font-bold mb-2">How the MEG Works:</h4>
          <ol className="list-decimal ml-5 space-y-2">
            <li>During peak periods, we calculate your earnings from delivery fees and wait time compensation.</li>
            <li>We then calculate your MEG based on two components:
              <ul className="list-disc ml-5 mt-1">
                <li><strong>Base Guarantee:</strong> Applied to all time you're online (e.g., $12.50/hr for Gold tier)</li>
                <li><strong>Active Time Bonus:</strong> Added for time spent on active deliveries and waiting at restaurants (e.g., +$22.50/hr for Gold tier)</li>
              </ul>
            </li>
            <li>If your earnings are less than your calculated MEG, we'll add the difference to your pay.</li>
            <li>You earn the greater of your normal pay or the MEG amount.</li>
          </ol>
        </div>
        
        <div className="alert alert-success mt-4">
          <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <div>
            <div className="font-bold">Safety Net During Slow Periods</div>
            <p className="text-sm">The MEG ensures that during peak periods, even if there are few orders, you'll still earn a guaranteed minimum hourly rate.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MEGExplanation;
