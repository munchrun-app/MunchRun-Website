import React, { useState } from 'react';

function RestaurantComparison() {
  const [orderValue, setOrderValue] = useState(150);
  const [showInflation, setShowInflation] = useState(true);
  
  // Calculate earnings based on order value
  const calculateEarnings = (value) => {
    // On other platforms, restaurants often inflate prices by 10-15%
    // But they still pay commission on that inflated price
    const inflationRate = 0.15; // 15% price inflation
    
    const inflatedValue = showInflation ? value * (1 + inflationRate) : value;
    const munchRunEarnings = value; // 100% of menu price
    const otherPlatformEarnings = inflatedValue * 0.7; // 30% commission on inflated price
    
    // Add large order fee bonus for MunchRun
    const largeOrderFee = value > 100 ? value * 0.01 : 0; // 1% of orders over $100
    
    return {
      munchRun: munchRunEarnings + largeOrderFee * 0.33, // Restaurant gets 33% of the large order fee
      otherPlatform: otherPlatformEarnings,
      inflatedValue: inflatedValue,
      inflationAmount: inflatedValue - value
    };
  };
  
  const earnings = calculateEarnings(orderValue);
  const difference = earnings.munchRun - earnings.otherPlatform;
  const percentageDifference = ((difference / earnings.otherPlatform) * 100).toFixed(1);
  
  // Handle manual input
  const handleInputChange = (e) => {
    const value = parseInt(e.target.value) || 0;
    setOrderValue(Math.min(Math.max(value, 50), 300));
  };
  
  // Increment/decrement by 10
  const adjustValue = (amount) => {
    const newValue = orderValue + amount;
    if (newValue >= 50 && newValue <= 300) {
      setOrderValue(newValue);
    }
  };

  return (
    <section className="py-16 bg-base-200" id="comparison">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">See How Much More You'll Earn</h2>
          <p className="mt-4 text-lg max-w-2xl mx-auto text-base-content/80">
            Compare your earnings with MunchRun vs. other delivery platforms that charge high commissions and force price inflation.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          {/* Calculator card */}
          <div className="card bg-base-100 shadow-xl mb-10">
            <div className="card-body p-6">
              <h3 className="text-2xl font-bold text-center mb-6">Earnings Comparison Calculator</h3>
              
              {/* Order value input section */}
              <div className="flex flex-col items-center justify-center mb-6">
                <p className="text-sm uppercase font-semibold tracking-wide mb-2 text-base-content/70">Enter Order Value</p>
                
                <div className="join mb-2">
                  <button 
                    className="join-item btn" 
                    onClick={() => adjustValue(-10)}
                    disabled={orderValue <= 50}
                  >-</button>
                  
                  <div className="join-item flex items-center px-4 border border-base-300 bg-base-200">
                    <span className="mr-1 text-lg font-semibold">$</span>
                    <input
                      type="number"
                      min="50"
                      max="300"
                      value={orderValue}
                      onChange={handleInputChange}
                      className="w-16 bg-transparent text-center text-xl font-bold focus:outline-none"
                    />
                  </div>
                  
                  <button 
                    className="join-item btn" 
                    onClick={() => adjustValue(10)}
                    disabled={orderValue >= 300}
                  >+</button>
                </div>
                
                <div className="text-xs text-base-content/60">
                  Min: $50 | Max: $300
                </div>
                
                {/* Toggle for price inflation */}
                <div className="form-control mt-4">
                  <label className="label cursor-pointer flex items-center justify-center gap-2">
                    <span className="label-text">Include typical menu price inflation on other platforms?</span> 
                    <input 
                      type="checkbox" 
                      className="toggle toggle-primary" 
                      checked={showInflation}
                      onChange={() => setShowInflation(!showInflation)}
                    />
                  </label>
                </div>
              </div>
              
              {/* Comparison visualization */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
                {/* MunchRun side */}
                <div className="card bg-primary/5 border-2 border-primary relative overflow-hidden">
                  <div className="absolute top-0 right-0 bg-primary text-primary-content py-1 px-3 text-sm font-bold">
                    MunchRun
                  </div>
                  <div className="card-body p-6 pt-10">
                    <div className="flex items-center mb-4">
                      <img src="/logo-small.png" alt="MunchRun" className="w-8 h-8 mr-2" onError={(e) => { e.target.src = 'https://placehold.co/32?text=MR' }} />
                      <h4 className="font-bold">Your Restaurant</h4>
                    </div>
                    
                    <div className="text-4xl font-bold text-primary mb-1">
                      ${earnings.munchRun.toFixed(2)}
                    </div>
                    <p className="text-sm mb-4">Your earnings on a ${orderValue} order</p>
                    
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span>Menu Price (Same as dine-in)</span>
                        <span className="font-medium">${orderValue.toFixed(2)}</span>
                      </div>
                      {orderValue > 100 && (
                        <div className="flex justify-between text-success">
                          <span>Large Order Bonus</span>
                          <span className="font-medium">+${(orderValue * 0.01 * 0.33).toFixed(2)}</span>
                        </div>
                      )}
                      <div className="flex justify-between text-error">
                        <span>Commission Fee</span>
                        <span className="font-medium">$0.00</span>
                      </div>
                      <div className="pt-2 border-t flex justify-between font-bold">
                        <span>You Keep</span>
                        <span>100% + Bonus</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Other platforms side */}
                <div className="card bg-base-200 border border-base-300 relative overflow-hidden">
                  <div className="absolute top-0 right-0 bg-base-content/70 text-base-100 py-1 px-3 text-sm font-bold">
                    Other Platforms
                  </div>
                  <div className="card-body p-6 pt-10">
                    <div className="flex items-center mb-4">
                      <div className="w-8 h-8 bg-base-content/20 rounded-full flex items-center justify-center mr-2">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 opacity-70" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <h4 className="font-bold">Your Restaurant</h4>
                    </div>
                    
                    <div className="text-4xl font-bold mb-1">
                      ${earnings.otherPlatform.toFixed(2)}
                    </div>
                    <p className="text-sm mb-4">Your earnings on a ${orderValue} order</p>
                    
                    <div className="space-y-2 text-sm">
                      {showInflation && (
                        <>
                          <div className="flex justify-between text-warning">
                            <span>Menu Price (Inflated)</span>
                            <span className="font-medium">${earnings.inflatedValue.toFixed(2)}</span>
                          </div>
                          <div className="flex justify-between text-warning/70">
                            <span className="pl-4">Inflation to offset commission</span>
                            <span className="font-medium">+${earnings.inflationAmount.toFixed(2)}</span>
                          </div>
                        </>
                      )}
                      {!showInflation && (
                        <div className="flex justify-between">
                          <span>Menu Price</span>
                          <span className="font-medium">${orderValue.toFixed(2)}</span>
                        </div>
                      )}
                      <div className="flex justify-between text-error">
                        <span>Commission Fee (30%)</span>
                        <span className="font-medium">-${(earnings.inflatedValue * 0.3).toFixed(2)}</span>
                      </div>
                      <div className="pt-2 border-t flex justify-between font-bold">
                        <span>You Keep</span>
                        <span>Only 70%</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Price inflation note */}
              {showInflation && (
                <div className="bg-warning/10 p-4 rounded-lg border border-warning/30 mb-6">
                  <div className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-warning mr-2 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <div>
                      <p className="font-medium text-base-content">Reality Check: Menu Price Inflation</p>
                      <p className="text-sm text-base-content/80">
                        Most restaurants are forced to inflate menu prices by 10-15% on other delivery platforms 
                        to offset high commission fees. Even with this inflation, you still earn less than with 
                        MunchRun's zero-commission model. And customers pay even more.
                      </p>
                    </div>
                  </div>
                </div>
              )}
              
              {/* Difference highlight */}
              <div className="bg-success/10 p-4 rounded-lg border border-success/30">
                <div className="flex flex-col sm:flex-row items-center justify-between">
                  <div className="flex items-center mb-3 sm:mb-0">
                    <svg className="h-8 w-8 text-success mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                    </svg>
                    <div>
                      <p className="text-sm font-semibold">You earn more with MunchRun</p>
                      <p className="text-xs opacity-70">Compared to commission-based platforms</p>
                    </div>
                  </div>
                  <div className="text-center sm:text-right">
                    <div className="text-2xl sm:text-3xl font-bold text-success">+${difference.toFixed(2)}</div>
                    <div className="text-sm text-success/80">That's {percentageDifference}% more!</div>
                  </div>
                </div>
              </div>
              
              {/* Annual projection */}
              <div className="divider my-6">Annual Projection</div>
              
              <div className="bg-base-200 p-5 rounded-lg">
                <div className="flex flex-col sm:flex-row justify-between items-center">
                  <div className="mb-4 sm:mb-0">
                    <h4 className="font-bold text-lg">Your potential annual savings</h4>
                    <p className="text-sm text-base-content/70">Based on just 10 orders per day at this value</p>
                  </div>
                  <div className="text-center sm:text-right">
                    <div className="text-4xl font-bold text-primary">
                      ${(difference * 10 * 365).toLocaleString()}
                    </div>
                    <div className="text-sm">extra profit per year</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Customer Pricing Comparison - UPDATED SECTION */}
          <div className="card bg-base-100 shadow-xl my-10">
            <div className="card-body">
              <h3 className="text-2xl font-bold text-center mb-6">Customer Price Comparison: Real Example</h3>
              <p className="text-center mb-6">
                Customers are more likely to order from your restaurant when delivery costs less. 
                More orders mean more revenue for you.
              </p>
              
              <div className="flex flex-col md:flex-row gap-6 mb-6">
                <div className="flex-1 card bg-error/5 border border-error/20 shadow-md">
                  <div className="card-body p-5">
                    <div className="flex justify-between items-center mb-3">
                      <h4 className="text-lg font-bold">Other Platform</h4>
                      <div className="badge badge-error gap-1">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        More Expensive
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-3 mb-4">
                      <img src="/burger.jpg" alt="Classic Burger" className="w-16 h-16 object-cover rounded-lg shadow-sm" 
                           onError={(e) => {e.target.src = 'https://placehold.co/64x64?text=Burger'}} />
                      <div>
                        <p className="text-lg font-medium">Classic Burger</p>
                        <p className="text-xs text-base-content/60">2.1km delivery distance</p>
                      </div>
                    </div>
                    
                    <ul className="space-y-2 mb-4">
                      <li className="flex justify-between text-sm">
                        <span>Menu Price (In-Store):</span>
                        <span className="font-medium">$8.50</span>
                      </li>
                      <li className="flex justify-between text-sm text-warning">
                        <span>Inflated App Price:</span>
                        <span className="font-medium">$9.80</span>
                      </li>
                      <li className="flex justify-between text-sm text-error">
                        <span>Delivery Fee:</span>
                        <span className="font-medium">$5.99</span>
                      </li>
                      <li className="flex justify-between text-sm text-error">
                        <span>Service Fee:</span>
                        <span className="font-medium">$1.40</span>
                      </li>
                      <li className="flex justify-between font-bold border-t pt-2 mt-2 text-error">
                        <span>Customer Pays:</span>
                        <span>$17.19</span>
                      </li>
                    </ul>
                    
                    <div className="mt-auto text-sm">
                      <p className="text-error/80">Hidden fees and price inflation add $8.69 to customer cost.</p>
                    </div>
                  </div>
                </div>
                
                <div className="flex-1 card bg-success/5 border border-success/20 shadow-md">
                  <div className="card-body p-5">
                    <div className="flex justify-between items-center mb-3">
                      <h4 className="text-lg font-bold">MunchRun</h4>
                      <div className="badge badge-success gap-1">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                        More Affordable
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-3 mb-4">
                      <img src="/burger.jpg" alt="Classic Burger" className="w-16 h-16 object-cover rounded-lg shadow-sm" 
                           onError={(e) => {e.target.src = 'https://placehold.co/64x64?text=Burger'}} />
                      <div>
                        <p className="text-lg font-medium">Classic Burger</p>
                        <p className="text-xs text-base-content/60">2.1km delivery distance</p>
                      </div>
                    </div>
                    
                    <ul className="space-y-2 mb-4">
                      <li className="flex justify-between text-sm">
                        <span>Menu Price (Same as In-Store):</span>
                        <span className="font-medium">$8.50</span>
                      </li>
                      <li className="flex justify-between text-sm">
                        <span>Platform Contribution:</span>
                        <span className="font-medium">$0.60</span>
                      </li>
                      <li className="flex justify-between text-sm">
                        <span>Base Delivery Fee:</span>
                        <span className="font-medium">$3.50</span>
                      </li>
                      <li className="flex justify-between text-sm">
                        <span>Distance Fee (2.1km @ $0.80/km):</span>
                        <span className="font-medium">$1.70</span>
                      </li>
                      <li className="flex justify-between font-bold border-t pt-2 mt-2 text-success">
                        <span>Customer Pays:</span>
                        <span>$14.30</span>
                      </li>
                    </ul>
                    
                    <div className="mt-auto text-sm">
                      <p className="text-success/80">Transparent pricing saves customers $2.89 (~17% less).</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-info/10 p-4 rounded-lg">
                <div className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-info mr-2 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <div>
                    <p className="font-medium">Why This Matters to Your Business</p>
                    <p className="text-sm mb-2">
                      Lower delivery costs make customers more likely to order, increasing your order volume. 
                      With MunchRun, you earn 100% of your menu price while offering better value to customers. 
                      More affordable delivery = more orders = more revenue for your restaurant.
                    </p>
                    <p className="text-sm mt-2">
                      <span className="font-medium">How it works for customers:</span> They'll see the item price with the platform contribution fee included while browsing, 
                      but at checkout, this fee is broken out for complete transparency. Our delivery fees are dynamically calculated but capped 
                      to prevent excessive charges, and you can set your maximum delivery radius to control costs.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Additional information about delivery fees - NEW SECTION */}
          <div className="card bg-base-100 shadow-md mb-10">
            <div className="card-body">
              <h3 className="text-xl font-bold mb-4">MunchRun's Smart Delivery System</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col">
                  <div className="flex items-start mb-3">
                    <div className="bg-primary/10 p-2 rounded-full mr-3">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-medium">Dynamic Pricing with Caps</h4>
                      <p className="text-sm text-base-content/80">
                        Our delivery fees adjust based on time of day and demand, but are capped at 1.6x for peak times
                        and 1.5x for high demand to ensure fairness.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-primary/10 p-2 rounded-full mr-3">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-medium">Customizable Delivery Zone</h4>
                      <p className="text-sm text-base-content/80">
                        You control your delivery radius, allowing you to optimize for the best customer experience
                        and manage delivery costs effectively.
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="flex flex-col">
                  <div className="flex items-start mb-3">
                    <div className="bg-primary/10 p-2 rounded-full mr-3">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-medium">Order Flow Management</h4>
                      <p className="text-sm text-base-content/80">
                        The slight increase in delivery fees during high-demand periods helps regulate order flow to your kitchen,
                        preventing overwhelming volume and ensuring quality.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-primary/10 p-2 rounded-full mr-3">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-medium">Transparent for Customers</h4>
                      <p className="text-sm text-base-content/80">
                        All fees are clearly displayed to customers during checkout, with no hidden charges
                        or unexplained costs, building trust and satisfaction.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Comparison table */}
          <div className="overflow-x-auto rounded-lg shadow-lg">
            <table className="table w-full">
              <thead className="bg-primary text-primary-content">
                <tr>
                  <th className="font-bold">Feature</th>
                  <th className="font-bold text-center">MunchRun</th>
                  <th className="font-bold text-center">Other Platforms</th>
                </tr>
              </thead>
              <tbody className="bg-base-100">
                <tr className="hover">
                  <td className="font-medium">Commission Fee</td>
                  <td className="text-center">
                    <span className="badge badge-success">0%</span></td>
                  <td className="text-center">
                    <span className="badge badge-error">25-35%</span>
                  </td>
                </tr>
                <tr className="hover">
                  <td className="font-medium">Menu Pricing</td>
                  <td className="text-center">
                    <span className="badge badge-success">Same as dine-in prices</span>
                  </td>
                  <td className="text-center">
                    <span className="badge badge-error">Typically inflated by 10-15%</span>
                  </td>
                </tr>
                <tr className="hover">
                  <td className="font-medium">Customer Impact</td>
                  <td className="text-center">
                    <span className="badge badge-success">Transparent fees</span>
                  </td>
                  <td className="text-center">
                    <span className="badge badge-error">Hidden price inflation</span>
                  </td>
                </tr>
                <tr className="hover">
                  <td className="font-medium">Restaurant Keeps</td>
                  <td className="text-center">
                    <span className="badge badge-success">100% of menu price</span>
                  </td>
                  <td className="text-center">
                    <span className="badge badge-error">65-75% of inflated price</span>
                  </td>
                </tr>
                <tr className="hover">
                  <td className="font-medium">Large Order Bonus</td>
                  <td className="text-center">
                    <span className="badge badge-success">Yes (orders >$100)</span>
                  </td>
                  <td className="text-center">
                    <span className="badge badge-error">No</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          
          <div className="mt-6 alert alert-warning">
            <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
            </svg>
            <div>
              <span className="font-bold">Important:</span> MunchRun requires that you maintain the same prices as your dine-in menu. This ensures fair pricing for customers while you still receive 100% of your menu price.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default RestaurantComparison;
