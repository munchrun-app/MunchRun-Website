import React from 'react'

function RestaurantCTA () {
  return (
    <section className='py-16 bg-primary text-primary-content'>
      <div className='container mx-auto px-4'>
        <div className='max-w-4xl mx-auto text-center'>
          {/* Improved badge contrast */}
          <div className='mb-6 badge badge-secondary text-base py-3 px-4 font-medium'>Coming Soon to Melbourne</div>

          <h2 className='text-3xl md:text-4xl font-bold mb-6'>Join Our Founding Partners Program</h2>
          <p className='text-xl mb-8 text-white'>
            MunchRun is in the early planning stages. Be among the first restaurants to join our zero-commission platform and help shape the future of food delivery in Melbourne.
          </p>

          {/* Improved stats contrast */}
          <div className='stats bg-base-100 text-base-content mb-8 shadow-lg'>
            <div className='stat'>
              <div className='stat-title'>Projected Launch</div>
              <div className='stat-value text-primary'>2026</div>
              <div className='stat-desc'>Early access for partners</div>
            </div>
            <div className='stat'>
              <div className='stat-title'>Founding Partners</div>
              <div className='stat-value text-primary'>Limited</div>
              <div className='stat-desc'>Special benefits</div>
            </div>
            <div className='stat'>
              <div className='stat-title'>Setup Time</div>
              <div className='stat-value text-primary'>48 hrs</div>
              <div className='stat-desc'>Once we launch</div>
            </div>
          </div>

          <div className='flex flex-col sm:flex-row justify-center gap-4'>
            <button className='btn btn-lg btn-secondary hover:btn-secondary-focus'>Join Waitlist</button>
            <button className='btn btn-lg bg-white text-primary border-white hover:bg-white/90'>Request Information</button>
          </div>

          {/* Improved benefits box contrast */}
          <div className='mt-8 p-6 bg-base-100 text-base-content rounded-lg shadow-lg'>
            <h3 className='text-lg font-bold mb-4 text-primary'>Founding Partner Benefits</h3>
            <ul className='grid grid-cols-1 md:grid-cols-2 gap-3 text-left max-w-2xl mx-auto'>
              <li className='flex items-start'>
                <svg className='h-5 w-5 text-success flex-shrink-0 mr-2 mt-0.5' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
                  <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M5 13l4 4L19 7' />
                </svg>
                <span>Waived onboarding fee ($200 value)</span>
              </li>
              <li className='flex items-start'>
                <svg className='h-5 w-5 text-success flex-shrink-0 mr-2 mt-0.5' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
                  <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M5 13l4 4L19 7' />
                </svg>
                <span>3 months free PRO subscription</span>
              </li>
              <li className='flex items-start'>
                <svg className='h-5 w-5 text-success flex-shrink-0 mr-2 mt-0.5' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
                  <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M5 13l4 4L19 7' />
                </svg>
                <span>Priority support from founders</span>
              </li>
              <li className='flex items-start'>
                <svg className='h-5 w-5 text-success flex-shrink-0 mr-2 mt-0.5' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
                  <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M5 13l4 4L19 7' />
                </svg>
                <span>Input on feature development</span>
              </li>
            </ul>
          </div>

          <p className='mt-6 text-white font-medium'>
            No contracts, no lock-in periods. We're building a better food delivery service for Melbourne, together.
          </p>
        </div>
      </div>
    </section>
  )
}

export default RestaurantCTA
