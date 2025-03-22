import React from 'react'

function EarningsTab () {
  // MEG tier data from the documents
  const megTiers = [
    {
      tier: 'Newcomer',
      acceptance: 'N/A',
      completion: 'N/A',
      onTime: 'N/A',
      rating: 'N/A',
      hoursRequired: 'N/A',
      baseGuarantee: 'N/A',
      activeTimeBonus: 'N/A',
      totalHourly: 'N/A',
      color: 'neutral'
    },
    {
      tier: 'Bronze',
      acceptance: '80%',
      completion: '90%',
      onTime: '80%',
      rating: '4.5',
      hoursRequired: '20',
      baseGuarantee: '$10/hr',
      activeTimeBonus: '$20/hr',
      totalHourly: '$30/hr',
      color: 'warning'
    },
    {
      tier: 'Silver',
      acceptance: '80%',
      completion: '95%',
      onTime: '85%',
      rating: '4.7',
      hoursRequired: '25',
      baseGuarantee: '$11/hr',
      activeTimeBonus: '$21/hr',
      totalHourly: '$32/hr',
      color: 'secondary'
    },
    {
      tier: 'Gold',
      acceptance: '85%',
      completion: '97%',
      onTime: '90%',
      rating: '4.8',
      hoursRequired: '30',
      baseGuarantee: '$12.50/hr',
      activeTimeBonus: '$22.50/hr',
      totalHourly: '$35/hr',
      color: 'warning'
    },
    {
      tier: 'Platinum',
      acceptance: '90%',
      completion: '99%',
      onTime: '95%',
      rating: '4.9',
      hoursRequired: '35',
      baseGuarantee: '$14/hr',
      activeTimeBonus: '$24/hr',
      totalHourly: '$38/hr',
      color: 'primary'
    }
  ]

  return (
    <div className='card bg-base-200 shadow-xl'>
      <div className='card-body'>
        <h3 className='text-2xl font-bold mb-6'>Minimum Earnings Guarantee (MEG)</h3>
        <div className='alert alert-info mb-6'>
          <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' className='stroke-current shrink-0 w-6 h-6'><path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z' /></svg>
          <span>MEG functions as a safety net, not additional pay on top of your delivery earnings.</span>
        </div>

        <p className='mb-4'>
          Our Minimum Earnings Guarantee (MEG) is designed as a <strong>safety net</strong> to ensure you earn a fair hourly rate. If your delivery earnings fall below the guaranteed amount during eligible hours, we'll top up the difference.
        </p>

        <div className='mb-6 bg-base-100 p-4 rounded-lg'>
          <h4 className='font-bold mb-2'>Important MEG Conditions:</h4>
          <ul className='list-disc pl-5 space-y-2'>
            <li>The MEG does <strong>not</strong> apply if you're idle (no orders) for more than an hour</li>
            <li>You must maintain your tier requirements during an active MEG session</li>
            <li>During our initial launch, MEG slots will be limited to peak hours</li>
            <li>We plan to expand MEG availability to most hours, with lower guarantees during overnight shifts</li>
            <li>Your primary earnings will come from delivery fees - MEG top-ups should be rare</li>
          </ul>
        </div>

        <p className='mb-6'>
          Our hybrid approach provides both a base hourly guarantee for your online time plus an additional active time bonus while you're completing deliveries. The higher your tier, the better your guarantee.
        </p>

        <div className='overflow-x-auto'>
          <table className='table table-zebra w-full'>
            <thead>
              <tr>
                <th>Tier</th>
                <th>Base Guarantee</th>
                <th>Active Time Bonus</th>
                <th>Total (Active)</th>
                <th>Requirements</th>
              </tr>
            </thead>
            <tbody>
              {megTiers.map((tier, index) => (
                <tr key={index}>
                  <td>
                    <div className='flex items-center space-x-3'>
                      <div className={`badge badge-${tier.color}`}>{tier.tier}</div>
                    </div>
                  </td>
                  <td>{tier.baseGuarantee}</td>
                  <td>{tier.activeTimeBonus}</td>
                  <td className='font-bold'>{tier.totalHourly}</td>
                  <td>
                    {tier.tier !== 'Newcomer'
                      ? (
                        <span className='text-xs'>
                          {tier.acceptance} accept • {tier.completion} complete • {tier.rating}+ rating
                        </span>
                        )
                      : (
                        <span className='text-xs'>New drivers start here</span>
                        )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className='divider' />

        <h3 className='text-2xl font-bold mb-6'>Additional Earnings</h3>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
          <div className='card bg-base-100 shadow-md'>
            <div className='card-body'>
              <h4 className='card-title flex items-center'>
                <svg xmlns='http://www.w3.org/2000/svg' className='h-5 w-5 mr-2 text-primary' viewBox='0 0 20 20' fill='currentColor'>
                  <path fillRule='evenodd' d='M5 2a1 1 0 011 1v1h1a1 1 0 010 2H6v1a1 1 0 01-2 0V6H3a1 1 0 010-2h1V3a1 1 0 011-1zm0 10a1 1 0 011 1v1h1a1 1 0 110 2H6v1a1 1 0 11-2 0v-1H3a1 1 0 110-2h1v-1a1 1 0 011-1zM12 2a1 1 0 01.967.744L14.146 7.2 17.5 9.134a1 1 0 010 1.732l-3.354 1.935-1.18 4.455a1 1 0 01-1.933 0L9.854 12.8 6.5 10.866a1 1 0 010-1.732l3.354-1.935 1.18-4.455A1 1 0 0112 2z' clipRule='evenodd' />
                </svg>
                Dynamic Pricing
              </h4>
              <p>Base fee of $3.50-$4.50 plus $0.60-$0.80 per km beyond the initial radius. Peak time multipliers up to 1.6x and demand multipliers up to 1.35x.</p>
            </div>
          </div>

          <div className='card bg-base-100 shadow-md'>
            <div className='card-body'>
              <h4 className='card-title flex items-center'>
                <svg xmlns='http://www.w3.org/2000/svg' className='h-5 w-5 mr-2 text-primary' viewBox='0 0 20 20' fill='currentColor'>
                  <path fillRule='evenodd' d='M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z' clipRule='evenodd' />
                </svg>
                Wait Time Pay
              </h4>
              <p>After a 5-minute grace period, you'll earn $0.20 per minute while waiting at restaurants. This increases to $0.50 per minute after 20 minutes.</p>
            </div>
          </div>

          <div className='card bg-base-100 shadow-md'>
            <div className='card-body'>
              <h4 className='card-title flex items-center'>
                <svg xmlns='http://www.w3.org/2000/svg' className='h-5 w-5 mr-2 text-primary' viewBox='0 0 20 20' fill='currentColor'>
                  <path d='M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z' />
                  <path fillRule='evenodd' d='M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z' clipRule='evenodd' />
                </svg>
                100% of Tips
              </h4>
              <p>You keep 100% of all customer tips, which are added directly to your earnings. Tips never offset your base pay or guarantees.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default EarningsTab
