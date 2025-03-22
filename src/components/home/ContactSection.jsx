import React from 'react'

function ContactSection () {
  return (
    <section className='py-20 bg-base-200' id='contact'>
      <div className='container mx-auto px-4'>
        <div className='flex flex-col lg:flex-row gap-12 items-center'>
          {/* Left side - Content */}
          <div className='lg:w-1/2'>
            <div className='badge badge-primary mb-3'>Join The Movement</div>
            <h2 className='text-4xl font-bold mb-6'>Get Involved With MunchRun</h2>

            <p className='text-lg mb-6 opacity-80'>
              We're building a fairer food delivery platform for Melbourne that prioritizes
              transparency, fair compensation, and local community support.
            </p>

            <div className='divider' />

            <div className='mb-8'>
              <h3 className='text-xl font-semibold mb-3 flex items-center'>
                <span className='text-2xl mr-2'>📬</span> Contact Us Directly
              </h3>
              <p className='mb-4'>
                Have questions or want to learn more? We'd love to hear from you.
                Reach out directly via email:
              </p>
              <a
                href='mailto:contact@munchrun.com.au'
                className='btn btn-primary btn-lg gap-2'
              >
                <svg xmlns='http://www.w3.org/2000/svg' className='h-6 w-6' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
                  <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z' />
                </svg>
                contact@munchrun.com.au
              </a>
            </div>
          </div>

          {/* Right side - Cards */}
          <div className='lg:w-1/2 grid gap-6'>
            <div className='stats shadow bg-base-100'>
              <div className='stat'>
                <div className='stat-figure text-primary'>
                  <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' className='inline-block w-8 h-8 stroke-current'>
                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z' />
                  </svg>
                </div>
                <div className='stat-title'>Our Mission</div>
                <div className='stat-value text-primary'>Fair For All</div>
                <div className='stat-desc'>Building a sustainable food delivery ecosystem</div>
              </div>
            </div>

            <div className='card bg-base-100 shadow-xl'>
              <div className='card-body'>
                <h3 className='card-title text-xl flex items-center'>
                  <span className='text-2xl mr-2'>🍔</span> For Restaurants
                </h3>
                <p className='mb-3'>Interested in a delivery platform with zero commission fees and complete control over your menu and operations?</p>
                <div className='card-actions'>
                  <a
                    href='mailto:contact@munchrun.com.au?subject=Restaurant%20Partnership%20Inquiry'
                    className='btn btn-outline btn-secondary btn-block'
                  >
                    Partner with us as a restaurant
                  </a>
                </div>
              </div>
            </div>

            <div className='card bg-base-100 shadow-xl'>
              <div className='card-body'>
                <h3 className='card-title text-xl flex items-center'>
                  <span className='text-2xl mr-2'>🛵</span> For Drivers
                </h3>
                <p className='mb-3'>Want to join a platform that offers fair compensation, transparent earnings, and respects your work?</p>
                <div className='card-actions'>
                  <a
                    href='mailto:contact@munchrun.com.au?subject=Driver%20Partnership%20Inquiry'
                    className='btn btn-outline btn-accent btn-block'
                  >
                    Sign up as a driver
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className='divider my-12'>Stay Connected</div>

        <div className='alert shadow-lg max-w-3xl mx-auto'>
          <div>
            <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' className='stroke-info flex-shrink-0 w-6 h-6'>
              <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z' />
            </svg>
            <div>
              <h3 className='font-bold'>Coming soon to Melbourne!</h3>
              <div className='text-xs'>We're in the early stages, but we'd love to keep you updated on our progress.</div>
            </div>
          </div>
          <div className='flex-none'>
            <a
              href='mailto:contact@munchrun.com.au?subject=Keep%20Me%20Updated%20on%20MunchRun'
              className='btn btn-sm btn-primary'
            >
              Get Updates
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactSection
