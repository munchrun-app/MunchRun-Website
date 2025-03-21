import React from 'react';

function TierSelector({ megTiers, driverTier, setDriverTier }) {
  return (
    <div className="mb-6">
      <label className="form-control w-full mb-2">
        <div className="label">
          <span className="label-text font-medium">Your Driver Tier:</span>
        </div>
      </label>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
        {Object.keys(megTiers).map(key => (
          <div 
            key={key}
            className={`card card-compact cursor-pointer transition-all hover:shadow-md ${driverTier === key ? 'bg-primary/10 border-2 border-primary' : 'bg-base-200 border border-base-300'}`}
            onClick={() => setDriverTier(key)}
          >
            <div className="card-body p-3">
              <h4 className="font-bold text-sm">{megTiers[key].name} Tier</h4>
              <p className="text-xs text-base-content/70">${megTiers[key].totalHourlyGuarantee}/hr active guarantee</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TierSelector;
