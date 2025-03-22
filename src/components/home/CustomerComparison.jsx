import React, { useState, useEffect } from 'react'

function CustomerComparison () {
  // State for the comparison calculator
  const [orderValue, setOrderValue] = useState(30)
  const [distance, setDistance] = useState(2.5)
  const [showInflation, setShowInflation] = useState(true)
  const [isPeakTime, setIsPeakTime] = useState(false)
  const [isHighDemand, setIsHighDemand] = useState(false)
  const [showBreakdown, setShowBreakdown] = useState(false)

  // Calculate fees based on inputs
  const calculateFees = () => {
    // Base calculations
    const inflationRate = 0.15 // 15% menu price inflation on other platforms

    // Peak time and demand multipliers
    const munchRunPeakMultiplier = isPeakTime ? 1.3 : 1.0 // 30% increase during peak hours
    const munchRunDemandMultiplier = isHighDemand ? 1.2 : 1.0 // 20% increase during high demand
    // Cap combined multiplier at 1.6x as per MunchRun's fair pricing policy
    const munchRunCombinedMultiplier = Math.min(munchRunPeakMultiplier * munchRunDemandMultiplier, 1.6)

    // Other platforms typically have higher multipliers
    const otherPeakMultiplier = isPeakTime ? 1.5 : 1.0 // 50% increase during peak hours
    const otherDemandMultiplier = isHighDemand ? 1.8 : 1.0 // 80% increase during high demand
    // Other platforms can go as high as 2.5x or more
    const otherCombinedMultiplier = otherPeakMultiplier * otherDemandMultiplier

    // MunchRun fees
    const munchRunMenuPrice = orderValue
    const munchRunBaseFee = 3.50 * munchRunCombinedMultiplier
    const munchRunDistanceFee = distance * 0.80 * munchRunCombinedMultiplier // $0.80 per km
    const munchRunServiceFee = orderValue * 0.06 // 6% platform contribution (not affected by multipliers)

    // Other platform fees - ADJUSTED TO BE MORE REALISTIC
    const otherMenuPrice = showInflation ? orderValue * (1 + inflationRate) : orderValue
    const otherBaseFee = 5.49 * otherCombinedMultiplier
    // Distance fee with more realistic pricing
    const otherDistanceFee = (distance <= 3 ? distance * 0.90 : distance * 1.10) * otherCombinedMultiplier
    const otherServiceFee = otherMenuPrice * 0.10 // 10% service fee
    const otherSmallOrderFee = orderValue < 15 ? 3.99 : 0 // Small order fee

    // Calculate totals
    const munchRunTotal = munchRunMenuPrice + munchRunBaseFee + munchRunDistanceFee + munchRunServiceFee
    const otherTotal = otherMenuPrice + otherBaseFee + otherDistanceFee + otherServiceFee + otherSmallOrderFee

    // Calculate money distribution for MunchRun
    const munchRunDeliveryTotal = munchRunBaseFee + munchRunDistanceFee

    // MunchRun revenue split - MORE FAVORABLE FOR DRIVERS
    // Driver gets 95% of delivery fees - extremely competitive
    const munchRunDriverAmount = munchRunDeliveryTotal * 0.95

    // Platform gets only 5% of delivery fees plus service fee
    const munchRunCompanyAmount = munchRunDeliveryTotal * 0.05 + munchRunServiceFee

    // Restaurant still gets 100% of menu price (key differentiator)
    const munchRunRestaurantAmount = munchRunMenuPrice

    // Calculate money distribution for other platforms
    const otherDeliveryTotal = otherBaseFee + otherDistanceFee
    const otherDriverAmount = otherDeliveryTotal * 0.60 // Driver gets ~60% of delivery fees on other platforms
    const otherCommission = otherMenuPrice * 0.30 // 30% commission on menu price
    const otherCompanyAmount = otherDeliveryTotal * 0.40 + otherServiceFee + otherCommission + otherSmallOrderFee
    const otherRestaurantAmount = otherMenuPrice * 0.70 // Restaurant gets 70% of menu price

    // Calculate savings
    const savings = otherTotal - munchRunTotal
    const savingsPercent = (savings / otherTotal) * 100

    return {
      munchRun: {
        menuPrice: munchRunMenuPrice,
        baseFee: munchRunBaseFee,
        distanceFee: munchRunDistanceFee,
        serviceFee: munchRunServiceFee,
        total: munchRunTotal,
        multiplier: munchRunCombinedMultiplier,
        breakdown: {
          restaurant: munchRunRestaurantAmount,
          driver: munchRunDriverAmount,
          platform: munchRunCompanyAmount,
          restaurantPercent: (munchRunRestaurantAmount / munchRunTotal) * 100,
          driverPercent: (munchRunDriverAmount / munchRunTotal) * 100,
          platformPercent: (munchRunCompanyAmount / munchRunTotal) * 100
        }
      },
      other: {
        menuPrice: otherMenuPrice,
        inflationAmount: showInflation ? otherMenuPrice - orderValue : 0,
        baseFee: otherBaseFee,
        distanceFee: otherDistanceFee,
        serviceFee: otherServiceFee,
        smallOrderFee: otherSmallOrderFee,
        total: otherTotal,
        multiplier: otherCombinedMultiplier,
        breakdown: {
          restaurant: otherRestaurantAmount,
          driver: otherDriverAmount,
          platform: otherCompanyAmount,
          restaurantPercent: (otherRestaurantAmount / otherTotal) * 100,
          driverPercent: (otherDriverAmount / otherTotal) * 100,
          platformPercent: (otherCompanyAmount / otherTotal) * 100
        }
      },
      savings,
      savingsPercent
    }
  }

  const fees = calculateFees()

  // Handle order value input
  const handleOrderValue = (e) => {
    const value = parseFloat(e.target.value) || 0
    setOrderValue(Math.min(Math.max(value, 10), 150))
  }

  // Handle distance input
  const handleDistance = (e) => {
    const value = parseFloat(e.target.value) || 0
    setDistance(Math.min(Math.max(value, 0.5), 10))
  }

  return (
    <section className='py-16 bg-base-200' id='comparison'>
      <div className='container mx-auto px-4'>
        <div className='text-center mb-12'>
          <h2 className='text-3xl md:text-4xl font-bold'>See How Much You'll Save</h2>
          <p className='mt-4 text-lg max-w-2xl mx-auto text-base-content/80'>
            Compare the real cost of ordering with MunchRun versus other food delivery platforms that charge high fees and hide costs with inflated menu prices.
          </p>
        </div>

        <div className='max-w-4xl mx-auto'>
          {/* Comparison calculator card */}
          <div className='card bg-base-100 shadow-xl'>
            <div className='card-body p-6 md:p-8'>
              <h3 className='text-2xl font-bold text-center mb-6'>Delivery Cost Calculator</h3>

              {/* Input controls */}
              <div className='grid grid-cols-1 md:grid-cols-2 gap-6 mb-8'>
                <div className='space-y-4'>
                  <label className='form-control w-full'>
                    <div className='label'>
                      <span className='label-text font-medium'>Order Value</span>
                      <span className='label-text-alt'>${orderValue.toFixed(2)}</span>
                    </div>
                    <input
                      type='range'
                      min='10'
                      max='150'
                      step='5'
                      value={orderValue}
                      onChange={(e) => setOrderValue(parseFloat(e.target.value))}
                      className='range range-primary'
                    />
                    <div className='label'>
                      <span className='label-text-alt'>$10</span>
                      <span className='label-text-alt'>$150</span>
                    </div>
                  </label>

                  <div className='join w-full'>
                    <button
                      className='join-item btn btn-sm'
                      onClick={() => setOrderValue(Math.max(orderValue - 5, 10))}
                    >-
                    </button>
                    <div className='join-item flex-1'>
                      <input
                        type='number'
                        min='10'
                        max='150'
                        value={orderValue}
                        onChange={handleOrderValue}
                        className='input input-bordered w-full text-center'
                      />
                    </div>
                    <button
                      className='join-item btn btn-sm'
                      onClick={() => setOrderValue(Math.min(orderValue + 5, 150))}
                    >+
                    </button>
                  </div>
                </div>

                <div className='space-y-4'>
                  <label className='form-control w-full'>
                    <div className='label'>
                      <span className='label-text font-medium'>Delivery Distance (km)</span>
                      <span className='label-text-alt'>{distance.toFixed(1)} km</span>
                    </div>
                    <input
                      type='range'
                      min='0.5'
                      max='10'
                      step='0.5'
                      value={distance}
                      onChange={(e) => setDistance(parseFloat(e.target.value))}
                      className='range range-primary'
                    />
                    <div className='label'>
                      <span className='label-text-alt'>0.5 km</span>
                      <span className='label-text-alt'>10 km</span>
                    </div>
                  </label>

                  <div className='join w-full'>
                    <button
                      className='join-item btn btn-sm'
                      onClick={() => setDistance(Math.max(distance - 0.5, 0.5))}
                    >-
                    </button>
                    <div className='join-item flex-1'>
                      <input
                        type='number'
                        min='0.5'
                        max='10'
                        step='0.5'
                        value={distance}
                        onChange={handleDistance}
                        className='input input-bordered w-full text-center'
                      />
                    </div>
                    <button
                      className='join-item btn btn-sm'
                      onClick={() => setDistance(Math.min(distance + 0.5, 10))}
                    >+
                    </button>
                  </div>
                </div>
              </div>

              {/* Additional options */}
              <div className='grid grid-cols-1 md:grid-cols-3 gap-4 mb-8'>
                {/* Menu price inflation toggle */}
                <div className='form-control'>
                  <label className='cursor-pointer label justify-start gap-3'>
                    <input
                      type='checkbox'
                      className='toggle toggle-primary'
                      checked={showInflation}
                      onChange={() => setShowInflation(!showInflation)}
                    />
                    <span className='label-text'>Menu Price Inflation</span>
                  </label>
                  {showInflation && (
                    <p className='text-xs text-base-content/60 mt-1 ml-10'>
                      Other platforms inflate menu prices by 10-15%
                    </p>
                  )}
                </div>

                {/* Peak time toggle */}
                <div className='form-control'>
                  <label className='cursor-pointer label justify-start gap-3'>
                    <input
                      type='checkbox'
                      className='toggle toggle-warning'
                      checked={isPeakTime}
                      onChange={() => setIsPeakTime(!isPeakTime)}
                    />
                    <span className='label-text'>Peak Time</span>
                    {isPeakTime && (
                      <span className='badge badge-warning badge-sm'>Active</span>
                    )}
                  </label>
                  {isPeakTime && (
                    <p className='text-xs text-base-content/60 mt-1 ml-10'>
                      Dinner time, weekends, etc.
                    </p>
                  )}
                </div>

                {/* High demand toggle */}
                <div className='form-control'>
                  <label className='cursor-pointer label justify-start gap-3'>
                    <input
                      type='checkbox'
                      className='toggle toggle-error'
                      checked={isHighDemand}
                      onChange={() => setIsHighDemand(!isHighDemand)}
                    />
                    <span className='label-text'>High Demand</span>
                    {isHighDemand && (
                      <span className='badge badge-error badge-sm'>Active</span>
                    )}
                  </label>
                  {isHighDemand && (
                    <p className='text-xs text-base-content/60 mt-1 ml-10'>
                      Bad weather, special events, etc.
                    </p>
                  )}
                </div>
              </div>

              {/* Peak/demand multiplier explanation */}
              {(isPeakTime || isHighDemand) && (
                <div className='alert mb-8'>
                  <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' className='stroke-info shrink-0 w-6 h-6'>
                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z' />
                  </svg>
                  <div>
                    <div className='font-bold'>Delivery Fee Multipliers</div>
                    <div className='text-xs'>
                      MunchRun: {fees.munchRun.multiplier.toFixed(2)}x (capped at 1.6x) |
                      Other platforms: {fees.other.multiplier.toFixed(2)}x (can go much higher)
                    </div>
                  </div>
                </div>
              )}

              {/* Results comparison */}
              <div className='grid grid-cols-1 md:grid-cols-2 gap-6 mb-6'>
                {/* MunchRun column */}
                <div className='card bg-primary/5 border-2 border-primary'>
                  <div className='card-body p-5'>
                    <div className='absolute right-4 top-4'>
                      <div className='badge badge-primary'>MunchRun</div>
                    </div>
                    <h4 className='font-bold text-xl mb-4 mt-2'>Your Total: ${fees.munchRun.total.toFixed(2)}</h4>

                    <div className='space-y-3 text-sm'>
                      <div className='flex justify-between'>
                        <span>Menu Price:</span>
                        <span className='font-medium'>${fees.munchRun.menuPrice.toFixed(2)}</span>
                      </div>
                      <div className='flex justify-between'>
                        <span>Base Delivery Fee:</span>
                        <div className='text-right'>
                          <span className='font-medium'>${fees.munchRun.baseFee.toFixed(2)}</span>
                          {(isPeakTime || isHighDemand) && fees.munchRun.multiplier > 1.0 && (
                            <div className='text-xs text-info'>
                              ({fees.munchRun.multiplier.toFixed(1)}x multiplier applied)
                            </div>
                          )}
                        </div>
                      </div>
                      <div className='flex justify-between'>
                        <span>Distance Fee ({distance.toFixed(1)} km):</span>
                        <span className='font-medium'>${fees.munchRun.distanceFee.toFixed(2)}</span>
                      </div>
                      <div className='flex justify-between'>
                        <span>Platform Contribution (6%):</span>
                        <span className='font-medium'>${fees.munchRun.serviceFee.toFixed(2)}</span>
                      </div>

                      <div className='pt-2 mt-2 border-t flex justify-between font-bold'>
                        <span>Total Cost:</span>
                        <span>${fees.munchRun.total.toFixed(2)}</span>
                      </div>
                    </div>

                    <div className='mt-4'>
                      <div className='bg-primary/10 p-3 rounded-lg'>
                        <p className='text-sm'>
                          <span className='font-medium'>MunchRun Advantage:</span> We cap our peak & demand
                          price increases at 1.6x, never inflate menu prices, and our transparent fees support
                          fair pay for restaurants and drivers.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Other platforms column */}
                <div className='card bg-base-200 border border-base-300'>
                  <div className='card-body p-5'>
                    <div className='absolute right-4 top-4'>
                      <div className='badge badge-neutral'>Other Platforms</div>
                    </div>
                    <h4 className='font-bold text-xl mb-4 mt-2'>Your Total: ${fees.other.total.toFixed(2)}</h4>

                    <div className='space-y-3 text-sm'>
                      <div className='flex justify-between'>
                        <span>{showInflation ? 'Inflated Menu Price:' : 'Menu Price:'}</span>
                        <div className='text-right'>
                          <span className='font-medium'>${fees.other.menuPrice.toFixed(2)}</span>
                          {showInflation && (
                            <div className='text-xs text-warning'>
                              (+${fees.other.inflationAmount.toFixed(2)} inflation)
                            </div>
                          )}
                        </div>
                      </div>
                      <div className='flex justify-between'>
                        <span>Base Delivery Fee:</span>
                        <div className='text-right'>
                          <span className='font-medium'>${fees.other.baseFee.toFixed(2)}</span>
                          {(isPeakTime || isHighDemand) && fees.other.multiplier > 1.0 && (
                            <div className='text-xs text-error'>
                              ({fees.other.multiplier.toFixed(1)}x surge pricing)
                            </div>
                          )}
                        </div>
                      </div>
                      <div className='flex justify-between'>
                        <span>Distance Fee ({distance.toFixed(1)} km):</span>
                        <span className='font-medium'>${fees.other.distanceFee.toFixed(2)}</span>
                      </div>
                      <div className='flex justify-between'>
                        <span>Service Fee (10%):</span>
                        <span className='font-medium'>${fees.other.serviceFee.toFixed(2)}</span>
                      </div>
                      {fees.other.smallOrderFee > 0 && (
                        <div className='flex justify-between text-error'>
                          <span>Small Order Fee:</span>
                          <span className='font-medium'>${fees.other.smallOrderFee.toFixed(2)}</span>
                        </div>
                      )}

                      <div className='pt-2 mt-2 border-t flex justify-between font-bold'>
                        <span>Total Cost:</span>
                        <span>${fees.other.total.toFixed(2)}</span>
                      </div>
                    </div>

                    <div className='mt-4'>
                      <div className='bg-base-300 p-3 rounded-lg'>
                        <p className='text-sm'>
                          <span className='font-medium'>Reality Check:</span> Other platforms often
                          have hidden fees, uncapped surge pricing during peak times, and inflated
                          menu prices that add up quickly.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Savings highlight */}
              <div className='bg-success/10 p-5 rounded-lg border border-success/30'>
                <div className='flex flex-col sm:flex-row items-center justify-between gap-4'>
                  <div className='flex items-center'>
                    <svg xmlns='http://www.w3.org/2000/svg' className='h-8 w-8 text-success mr-3' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
                      <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z' />
                    </svg>
                    <div>
                      <p className='font-semibold'>You save with MunchRun</p>
                      <p className='text-xs text-base-content/70'>Lower fees, no hidden costs, fair surge pricing</p>
                    </div>
                  </div>
                  <div className='text-center sm:text-right'>
                    <div className='text-2xl sm:text-3xl font-bold text-success'>
                      ${fees.savings.toFixed(2)}
                    </div>
                    <div className='text-sm text-success/80'>
                      {fees.savingsPercent.toFixed(1)}% less than other platforms
                    </div>
                  </div>
                </div>
              </div>

              {/* Annual calculation */}
              <div className='mt-6 p-4 bg-base-200 rounded-lg'>
                <div className='flex flex-col sm:flex-row justify-between items-center gap-4'>
                  <div>
                    <h4 className='font-bold'>Your annual savings</h4>
                    <p className='text-sm text-base-content/70'>Based on ordering twice a week</p>
                  </div>
                  <div className='text-center sm:text-right'>
                    <div className='text-3xl font-bold text-primary'>
                      ${(fees.savings * 104).toFixed(2)}
                    </div>
                    <div className='text-sm'>per year in savings</div>
                  </div>
                </div>
              </div>

              {/* Money Distribution Breakdown */}
              <div className='mt-8'>
                <div className='flex justify-between items-center mb-4'>
                  <h4 className='text-lg font-bold'>Where Your Money Goes</h4>
                  <button
                    onClick={() => setShowBreakdown(!showBreakdown)}
                    className='btn btn-sm btn-ghost'
                  >
                    {showBreakdown ? 'Hide Details' : 'Show Details'}
                  </button>
                </div>

                {showBreakdown && (
                  <div className='grid grid-cols-1 md:grid-cols-2 gap-6 mb-4'>
                    {/* MunchRun breakdown */}
                    <div className='card bg-base-200'>
                      <div className='card-body p-4'>
                        <h5 className='font-bold text-center mb-3'>MunchRun Breakdown</h5>

                        {/* Restaurant share */}
                        <div className='mb-3'>
                          <div className='flex justify-between text-sm mb-1'>
                            <span>Restaurant Receives:</span>
                            <span className='font-medium'>${fees.munchRun.breakdown.restaurant.toFixed(2)}</span>
                          </div>
                          <div className='w-full bg-base-300 rounded-full h-2.5'>
                            <div className='bg-success h-2.5 rounded-full' style={{ width: `${fees.munchRun.breakdown.restaurantPercent}%` }} />
                          </div>
                          <div className='text-xs text-right mt-1'>{fees.munchRun.breakdown.restaurantPercent.toFixed(1)}% of total</div>
                        </div>

                        {/* Driver share */}
                        <div className='mb-3'>
                          <div className='flex justify-between text-sm mb-1'>
                            <span>Driver Receives:</span>
                            <span className='font-medium'>${fees.munchRun.breakdown.driver.toFixed(2)}</span>
                          </div>
                          <div className='w-full bg-base-300 rounded-full h-2.5'>
                            <div className='bg-info h-2.5 rounded-full' style={{ width: `${fees.munchRun.breakdown.driverPercent}%` }} />
                          </div>
                          <div className='text-xs text-right mt-1'>{fees.munchRun.breakdown.driverPercent.toFixed(1)}% of total</div>
                        </div>

                        {/* Platform share */}
                        <div>
                          <div className='flex justify-between text-sm mb-1'>
                            <span>MunchRun Receives:</span>
                            <span className='font-medium'>${fees.munchRun.breakdown.platform.toFixed(2)}</span>
                          </div>
                          <div className='w-full bg-base-300 rounded-full h-2.5'>
                            <div className='bg-primary h-2.5 rounded-full' style={{ width: `${fees.munchRun.breakdown.platformPercent}%` }} />
                          </div>
                          <div className='text-xs text-right mt-1'>{fees.munchRun.breakdown.platformPercent.toFixed(1)}% of total</div>
                        </div>

                        <div className='divider my-2'>Key Facts</div>

                        <ul className='text-xs space-y-1'>
                          <li>• Restaurants keep 100% of menu price</li>
                          <li>• Drivers receive 95% of delivery fees (highest in the industry)</li>
                          <li>• Platform takes only 5% of delivery fees plus service fee</li>
                        </ul>
                      </div>
                    </div>

                    {/* Other platforms breakdown */}
                    <div className='card bg-base-200'>
                      <div className='card-body p-4'>
                        <h5 className='font-bold text-center mb-3'>Other Platforms Breakdown</h5>

                        {/* Restaurant share */}
                        <div className='mb-3'>
                          <div className='flex justify-between text-sm mb-1'>
                            <span>Restaurant Receives:</span>
                            <span className='font-medium'>${fees.other.breakdown.restaurant.toFixed(2)}</span>
                          </div>
                          <div className='w-full bg-base-300 rounded-full h-2.5'>
                            <div className='bg-success h-2.5 rounded-full' style={{ width: `${fees.other.breakdown.restaurantPercent}%` }} />
                          </div>
                          <div className='text-xs text-right mt-1'>{fees.other.breakdown.restaurantPercent.toFixed(1)}% of total</div>
                        </div>

                        {/* Driver share */}
                        <div className='mb-3'>
                          <div className='flex justify-between text-sm mb-1'>
                            <span>Driver Receives:</span>
                            <span className='font-medium'>${fees.other.breakdown.driver.toFixed(2)}</span>
                          </div>
                          <div className='w-full bg-base-300 rounded-full h-2.5'>
                            <div className='bg-info h-2.5 rounded-full' style={{ width: `${fees.other.breakdown.driverPercent}%` }} />
                          </div>
                          <div className='text-xs text-right mt-1'>{fees.other.breakdown.driverPercent.toFixed(1)}% of total</div>
                        </div>

                        {/* Platform share */}
                        <div>
                          <div className='flex justify-between text-sm mb-1'>
                            <span>Platform Receives:</span>
                            <span className='font-medium'>${fees.other.breakdown.platform.toFixed(2)}</span>
                          </div>
                          <div className='w-full bg-base-300 rounded-full h-2.5'>
                            <div className='bg-error h-2.5 rounded-full' style={{ width: `${fees.other.breakdown.platformPercent}%` }} />
                          </div>
                          <div className='text-xs text-right mt-1'>{fees.other.breakdown.platformPercent.toFixed(1)}% of total</div>
                        </div>

                        <div className='divider my-2'>Key Facts</div>

                        <ul className='text-xs space-y-1'>
                          <li>• Restaurants pay 25-30% commission on orders</li>
                          <li>• Drivers receive only 60% of delivery fees</li>
                          <li>• Platforms take large cuts from both restaurants and drivers</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Information cards */}
          <div className='grid grid-cols-1 md:grid-cols-3 gap-6 mt-12'>
            <div className='card bg-base-100 shadow-md'>
              <div className='card-body'>
                <div className='flex items-center mb-4'>
                  <div className='bg-primary/10 p-2 rounded-full mr-3'>
                    <svg xmlns='http://www.w3.org/2000/svg' className='h-6 w-6 text-primary' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
                      <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z' />
                    </svg>
                  </div>
                  <h3 className='font-bold'>Transparent Pricing</h3>
                </div>
                <p className='text-sm'>
                  We show you exactly what you're paying for, with no hidden fees or inflated menu prices. What you see is what you pay.
                </p>
              </div>
            </div>

            <div className='card bg-base-100 shadow-md'>
              <div className='card-body'>
                <div className='flex items-center mb-4'>
                  <div className='bg-primary/10 p-2 rounded-full mr-3'>
                    <svg xmlns='http://www.w3.org/2000/svg' className='h-6 w-6 text-primary' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
                      <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z' />
                    </svg>
                  </div>
                  <h3 className='font-bold'>Support Local Businesses</h3>
                </div>
                <p className='text-sm'>
                  When you order through MunchRun, restaurants keep 100% of their menu price. Your order helps local restaurants thrive.
                </p>
              </div>
            </div>

            <div className='card bg-base-100 shadow-md'>
              <div className='card-body'>
                <div className='flex items-center mb-4'>
                  <div className='bg-primary/10 p-2 rounded-full mr-3'>
                    <svg xmlns='http://www.w3.org/2000/svg' className='h-6 w-6 text-primary' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
                      <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M13 10V3L4 14h7v7l9-11h-7z' />
                    </svg>
                  </div>
                  <h3 className='font-bold'>Fair Surge Pricing</h3>
                </div>
                <p className='text-sm'>
                  While other platforms can charge over 2.5x during peak times, we cap our multipliers at 1.6x to ensure delivery always remains affordable.
                </p>
              </div>
            </div>

            <div className='card bg-base-100 shadow-md'>
              <div className='card-body'>
                <div className='flex items-center mb-4'>
                  <div className='bg-primary/10 p-2 rounded-full mr-3'>
                    <svg xmlns='http://www.w3.org/2000/svg' className='h-6 w-6 text-primary' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
                      <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z' />
                    </svg>
                  </div>
                  <h3 className='font-bold'>Better Pay For Drivers</h3>
                </div>
                <p className='text-sm'>
                  Drivers keep 95% of delivery fees with MunchRun, compared to only 60% on other platforms. This means faster, more reliable service for customers.
                </p>
              </div>
            </div>

            <div className='card bg-base-100 shadow-md'>
              <div className='card-body'>
                <div className='flex items-center mb-4'>
                  <div className='bg-primary/10 p-2 rounded-full mr-3'>
                    <svg xmlns='http://www.w3.org/2000/svg' className='h-6 w-6 text-primary' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
                      <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z' />
                    </svg>
                  </div>
                  <h3 className='font-bold'>Fair Pay for Everyone</h3>
                </div>
                <p className='text-sm'>
                  Restaurants keep 100% of menu prices and drivers get 100% of delivery fees, creating a system where everyone is paid fairly for their work.
                </p>
              </div>
            </div>
          </div>

          <div className='bg-base-100 p-5 rounded-lg border border-base-300 mt-6'>
            <div className='flex items-start'>
              <svg xmlns='http://www.w3.org/2000/svg' className='h-6 w-6 text-primary mr-2 flex-shrink-0 mt-0.5' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z' />
              </svg>
              <div>
                <p className='font-medium text-base-content'>Fair and Sustainable Model</p>
                <p className='text-sm text-base-content/80'>
                  MunchRun's model is designed to be fair for all parties. Restaurants keep 100% of their menu prices,
                  drivers receive 95% of delivery fees, and customers save money. Our platform is sustained by a small
                  5% fee on deliveries plus the transparent platform contribution that customers pay directly.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CustomerComparison
