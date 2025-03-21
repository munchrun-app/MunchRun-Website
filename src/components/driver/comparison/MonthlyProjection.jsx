import React from 'react';

function MonthlyProjection({ earnings, calculateMonthlyEarnings, formatMoney }) {
  // Earnings difference summary
  const earningsDifference = (
    <div className="bg-success/10 p-5 rounded-lg border border-success/30 mb-6">
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-success mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <div>
            <p className="font-semibold">You earn more with MunchRun</p>
            <p className="text-xs text-base-content/70">Waiting time pay + higher delivery fee percentage</p>
          </div>
        </div>
        <div className="text-center sm:text-right">
          <div className="text-2xl sm:text-3xl font-bold text-success">
            +${earnings.difference.amount.toFixed(2)}
          </div>
          <div className="text-sm text-success/80">
            That's {earnings.difference.percent.toFixed(1)}% more money!
          </div>
        </div>
      </div>
    </div>
  );

  // Monthly projection
  const monthlyProjection = (
    <div className="p-5 bg-base-200 rounded-lg">
      <h4 className="font-bold text-lg mb-3">Monthly Earnings Projection</h4>
      <p className="text-sm mb-4">Based on 20 hours of delivery time per week</p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="flex flex-col items-center bg-base-100 p-4 rounded-lg border border-primary">
          <p className="text-sm font-medium mb-2">With MunchRun</p>
          <p className="text-3xl font-bold text-primary">
            ${formatMoney(calculateMonthlyEarnings(earnings.munchrun.hourlyRate, 20))}
          </p>
          <p className="text-xs text-base-content/60 mt-1">per month (4.33 weeks)</p>
        </div>
        
        <div className="flex flex-col items-center bg-base-100 p-4 rounded-lg border border-base-300">
          <p className="text-sm font-medium mb-2">With {earnings.competitor.platform}</p>
          <p className="text-3xl font-bold">
            ${formatMoney(calculateMonthlyEarnings(earnings.competitor.hourlyRate, 20))}
          </p>
          <p className="text-xs text-base-content/60 mt-1">per month (4.33 weeks)</p>
        </div>
      </div>
      
      <div className="mt-4 text-center text-success font-bold">
        Monthly Difference: +${formatMoney(calculateMonthlyEarnings(earnings.munchrun.hourlyRate, 20) - calculateMonthlyEarnings(earnings.competitor.hourlyRate, 20))}
      </div>
    </div>
  );

  return (
    <div className="mt-6 space-y-6">
      {earningsDifference}
      {monthlyProjection}
    </div>
  );
}

export default MonthlyProjection;
