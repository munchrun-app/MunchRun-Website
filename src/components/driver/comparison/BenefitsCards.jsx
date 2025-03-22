import React from 'react'

function BenefitsCards () {
  return (
    <div className='grid grid-cols-1 md:grid-cols-3 gap-6 mt-12'>
      <div className='card bg-base-100 shadow-md'>
        <div className='card-body'>
          <div className='flex items-center mb-4'>
            <div className='bg-primary/10 p-2 rounded-full mr-3'>
              <svg xmlns='http://www.w3.org/2000/svg' className='h-6 w-6 text-primary' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z' />
              </svg>
            </div>
            <h3 className='font-bold'>Paid for Waiting Time</h3>
          </div>
          <p className='text-sm'>
            Unlike other platforms, we compensate you for the time you wait at restaurants at a rate of $15/hour.
          </p>
        </div>
      </div>

      <div className='card bg-base-100 shadow-md'>
        <div className='card-body'>
          <div className='flex items-center mb-4'>
            <div className='bg-primary/10 p-2 rounded-full mr-3'>
              <svg xmlns='http://www.w3.org/2000/svg' className='h-6 w-6 text-primary' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z' />
              </svg>
            </div>
            <h3 className='font-bold'>95% of Delivery Fees</h3>
          </div>
          <p className='text-sm'>
            You receive 95% of all delivery fees, compared to just 55-60% on major delivery platforms. This means significantly more money in your pocket.
          </p>
        </div>
      </div>

      <div className='card bg-base-100 shadow-md'>
        <div className='card-body'>
          <div className='flex items-center mb-4'>
            <div className='bg-primary/10 p-2 rounded-full mr-3'>
              <svg xmlns='http://www.w3.org/2000/svg' className='h-6 w-6 text-primary' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z' />
              </svg>
            </div>
            <h3 className='font-bold'>Tiered Earnings Guarantee</h3>
          </div>
          <p className='text-sm'>
            Our hybrid MEG model provides a base guarantee for online time plus an active time bonus that can reach up to $38/hour for platinum drivers.
          </p>
        </div>
      </div>

      <div className='card bg-base-100 shadow-md'>
        <div className='card-body'>
          <div className='flex items-center mb-4'>
            <div className='bg-primary/10 p-2 rounded-full mr-3'>
              <svg xmlns='http://www.w3.org/2000/svg' className='h-6 w-6 text-primary' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M13 7h8m0 0v8m0-8l-8 8-4-4-6 6' />
              </svg>
            </div>
            <h3 className='font-bold'>Tier Progression</h3>
          </div>
          <p className='text-sm'>
            Advance through Bronze, Silver, Gold, and Platinum tiers based on your performance metrics, unlocking higher earnings guarantees as you progress.
          </p>
        </div>
      </div>

      <div className='card bg-base-100 shadow-md'>
        <div className='card-body'>
          <div className='flex items-center mb-4'>
            <div className='bg-primary/10 p-2 rounded-full mr-3'>
              <svg xmlns='http://www.w3.org/2000/svg' className='h-6 w-6 text-primary' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z' />
              </svg>
            </div>
            <h3 className='font-bold'>Transparent Earnings</h3>
          </div>
          <p className='text-sm'>
            Our payment model is completely transparent. You'll always know exactly how your earnings are calculated, with no hidden algorithms.
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
            While other delivery services can charge customers over 2.5x during peak times, we cap our multipliers at 1.6x, passing these higher rates directly to you.
          </p>
        </div>
      </div>
    </div>
  )
}

export default BenefitsCards
