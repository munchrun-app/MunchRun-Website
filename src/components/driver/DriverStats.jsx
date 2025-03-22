import React from 'react'

function DriverStats () {
  return (
    <section className='py-10 bg-base-100'>
      <div className='container mx-auto px-4'>
        <div className='stats stats-vertical lg:stats-horizontal shadow w-full bg-base-200'>
          <div className='stat'>
            <div className='stat-figure text-primary'>
              <svg xmlns='http://www.w3.org/2000/svg' className='h-8 w-8' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z' />
              </svg>
            </div>
            <div className='stat-title'>Earnings Guarantee</div>
            <div className='stat-value text-primary'>Up to $38/hr</div>
            <div className='stat-desc'>With our tiered MEG system</div>
          </div>

          <div className='stat'>
            <div className='stat-figure text-secondary'>
              <svg xmlns='http://www.w3.org/2000/svg' className='h-8 w-8' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z' />
              </svg>
            </div>
            <div className='stat-title'>Customer Tips</div>
            <div className='stat-value text-secondary'>100%</div>
            <div className='stat-desc'>Keep all your customer tips</div>
          </div>

          <div className='stat'>
            <div className='stat-figure text-accent'>
              <svg xmlns='http://www.w3.org/2000/svg' className='h-8 w-8' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z' />
              </svg>
            </div>
            <div className='stat-title'>Wait Time Pay</div>
            <div className='stat-value'>$0.20-0.50/min</div>
            <div className='stat-desc'>After 5-minute grace period</div>
          </div>

          <div className='stat'>
            <div className='stat-figure text-info'>
              <svg xmlns='http://www.w3.org/2000/svg' className='h-8 w-8' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z' />
              </svg>
            </div>
            <div className='stat-title'>Large Orders</div>
            <div className='stat-value text-info'>+Bonus</div>
            <div className='stat-desc'>33% of 1% fee on orders over $100</div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default DriverStats
