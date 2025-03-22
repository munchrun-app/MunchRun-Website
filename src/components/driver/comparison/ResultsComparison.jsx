import React from 'react'

function ResultsComparison ({ earnings, distance, waitTime, formatTime }) {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 gap-6 mb-6'>
      {/* MunchRun side */}
      <div className='card bg-primary/5 border-2 border-primary'>
        <div className='card-body p-5'>
          <div className='absolute right-4 top-4'>
            <div className='badge badge-primary'>MunchRun</div>
          </div>
          <h4 className='font-bold text-xl mb-4 mt-2'>Your Earnings: ${earnings.munchrun.totalPay.toFixed(2)}</h4>

          <div className='space-y-3 text-sm'>
            <div className='flex justify-between'>
              <span>Base Pay ({earnings.munchrun.multiplier > 1 ? `${earnings.munchrun.multiplier.toFixed(1)}x` : '1x'}):</span>
              <span className='font-medium'>${earnings.munchrun.basePay.toFixed(2)}</span>
            </div>
            <div className='flex justify-between'>
              <span>Distance Pay ({distance.toFixed(1)} km):</span>
              <span className='font-medium'>${earnings.munchrun.distancePay.toFixed(2)}</span>
            </div>
            <div className='flex justify-between text-success'>
              <span>Wait Time Pay ({formatTime(waitTime)}):</span>
              <span className='font-medium'>+${earnings.munchrun.waitPay.toFixed(2)}</span>
            </div>
            <div className='pt-1 pb-1 border-t border-dashed flex justify-between font-medium'>
              <span>Basic Pay (before MEG):</span>
              <span>${earnings.munchrun.basicPay.toFixed(2)}</span>
            </div>

            {earnings.munchrun.megApplied && (
              <>
                <div className='flex justify-between text-primary'>
                  <span>MEG Adjustment:</span>
                  <span>+${earnings.munchrun.megAmount.toFixed(2)}</span>
                </div>
              </>
            )}

            <div className='pt-2 mt-2 border-t flex justify-between font-bold'>
              <span>Total Earnings:</span>
              <span>${earnings.munchrun.totalPay.toFixed(2)}</span>
            </div>
          </div>

          {earnings.munchrun.megApplied && (
            <div className='mt-3 bg-primary/10 p-3 rounded text-sm'>
              <div className='font-bold text-primary flex gap-1 items-center mb-2'>
                <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' className='w-4 h-4 stroke-primary'>
                  <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z' />
                </svg>
                Minimum Earnings Guarantee Applied
              </div>
              <div className='space-y-1 ml-5 text-xs'>
                <p>Base guarantee: ${earnings.munchrun.tier.baseGuarantee}/hr × {((earnings.munchrun.megBaseGuarantee / earnings.munchrun.tier.baseGuarantee)).toFixed(1)}hrs = ${earnings.munchrun.megBaseGuarantee.toFixed(2)}</p>
                <p>Active time bonus: ${earnings.munchrun.tier.activeTimeBonus}/hr × {((earnings.munchrun.megActiveBonus / earnings.munchrun.tier.activeTimeBonus)).toFixed(1)}hrs = ${earnings.munchrun.megActiveBonus.toFixed(2)}</p>
                <p className='font-medium text-sm'>Total MEG: ${earnings.munchrun.megTotal.toFixed(2)}</p>
              </div>
            </div>
          )}

          {!earnings.munchrun.megEligible && (
            <div className='mt-3 bg-warning/10 p-3 rounded text-sm'>
              <div className='font-bold text-warning flex gap-1 items-center'>
                <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' className='w-4 h-4 stroke-warning'>
                  <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z' />
                </svg>
                Not a MEG Peak Period
              </div>
              <p className='ml-5 mt-1'>MEG only applies during designated peak periods, which this delivery was not part of.</p>
            </div>
          )}

          <div className='divider text-xs text-base-content/60'>Key Metrics</div>

          <div className='grid grid-cols-2 gap-2 text-xs'>
            <div className='stat bg-base-200 rounded-box p-2'>
              <div className='stat-title text-xs'>Effective Hourly Rate</div>
              <div className='stat-value text-lg text-success'>${earnings.munchrun.hourlyRate.toFixed(2)}</div>
              <div className='stat-desc'>per hour online</div>
            </div>
            <div className='stat bg-base-200 rounded-box p-2'>
              <div className='stat-title text-xs'>Active Hourly Rate</div>
              <div className='stat-value text-lg text-success'>${earnings.munchrun.activeHourlyRate.toFixed(2)}</div>
              <div className='stat-desc'>per working hour</div>
            </div>
            <div className='stat bg-base-200 rounded-box p-2'>
              <div className='stat-title text-xs'>Per Order</div>
              <div className='stat-value text-lg'>${earnings.munchrun.perOrder.toFixed(2)}</div>
              <div className='stat-desc'>average per order</div>
            </div>
            <div className='stat bg-base-200 rounded-box p-2'>
              <div className='stat-title text-xs'>Per Kilometer</div>
              <div className='stat-value text-lg'>${earnings.munchrun.perKm.toFixed(2)}</div>
              <div className='stat-desc'>pay per km</div>
            </div>
          </div>

          <div className='mt-4'>
            <div className='bg-primary/10 p-3 rounded-lg'>
              <p className='text-sm'>
                <span className='font-medium'>MunchRun Advantage:</span> We pay for your waiting time, give you 95% of delivery fees, and during peak periods guarantee a minimum of ${earnings.munchrun.tier.totalHourlyGuarantee}/hr.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Other platform side */}
      <div className='card bg-base-200 border border-base-300'>
        <div className='card-body p-5'>
          <div className='absolute right-4 top-4'>
            <div className='badge badge-neutral'>{earnings.competitor.platform}</div>
          </div>
          <h4 className='font-bold text-xl mb-4 mt-2'>Your Earnings: ${earnings.competitor.totalPay.toFixed(2)}</h4>

          <div className='space-y-3 text-sm'>
            <div className='flex justify-between'>
              <span>Order Pay ({earnings.munchrun.multiplier > 1 ? 'with surge' : ''}):</span>
              <span className='font-medium'>${earnings.competitor.basePay.toFixed(2)}</span>
            </div>
            <div className='flex justify-between text-error'>
              <span>Wait Time Pay ({formatTime(waitTime)}):</span>
              <span className='font-medium'>$0.00</span>
            </div>
            <div className='pt-2 mt-2 border-t flex justify-between font-bold'>
              <span>Total Earnings:</span>
              <span>${earnings.competitor.totalPay.toFixed(2)}</span>
            </div>
          </div>

          <div className='mt-3 bg-error/10 p-3 rounded text-sm'>
            <div className='font-bold text-error flex gap-1 items-center'>
              <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' className='w-4 h-4 stroke-error'>
                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M6 18L18 6M6 6l12 12' />
              </svg>
              No Waiting Time Compensation
            </div>
            <p className='ml-5 mt-1'>Other platforms don't compensate drivers for restaurant wait time, costing you ${(waitTime * 0.25).toFixed(2)} in lost earnings.</p>
          </div>

          <div className='divider text-xs text-base-content/60'>Key Metrics</div>

          <div className='grid grid-cols-2 gap-2 text-xs'>
            <div className='stat bg-base-300 rounded-box p-2'>
              <div className='stat-title text-xs'>Effective Hourly Rate</div>
              <div className='stat-value text-lg text-error'>${earnings.competitor.hourlyRate.toFixed(2)}</div>
              <div className='stat-desc'>per hour online</div>
            </div>
            <div className='stat bg-base-300 rounded-box p-2'>
              <div className='stat-title text-xs'>Active Hourly Rate</div>
              <div className='stat-value text-lg text-warning'>${earnings.competitor.activeHourlyRate.toFixed(2)}</div>
              <div className='stat-desc'>only driving time</div>
            </div>
            <div className='stat bg-base-300 rounded-box p-2'>
              <div className='stat-title text-xs'>Per Order</div>
              <div className='stat-value text-lg'>${earnings.competitor.perOrder.toFixed(2)}</div>
              <div className='stat-desc'>average per order</div>
            </div>
            <div className='stat bg-base-300 rounded-box p-2'>
              <div className='stat-title text-xs'>Per Kilometer</div>
              <div className='stat-value text-lg'>${earnings.competitor.perKm.toFixed(2)}</div>
              <div className='stat-desc'>pay per km</div>
            </div>
          </div>

          <div className='mt-4'>
            <div className='bg-base-300 p-3 rounded-lg'>
              <p className='text-sm'>
                <span className='font-medium'>Reality Check:</span> Major delivery platforms don't pay for restaurant wait time, take up to 40% of delivery fees, and use opaque payment algorithms that can reduce your earnings.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ResultsComparison
