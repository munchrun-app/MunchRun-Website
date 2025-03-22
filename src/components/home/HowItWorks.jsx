import React from 'react'

function HowItWorks () {
  return (
    <section className='py-16 bg-base-100' id='how-it-works'>
      <div className='container mx-auto px-4'>
        <div className='text-center mb-12'>
          <h2 className='text-3xl md:text-4xl font-bold'>How MunchRun Works</h2>
          <p className='mt-4 text-lg max-w-2xl mx-auto text-base-content/80'>
            Enjoy a better food delivery experience in just a few simple steps
          </p>
        </div>

        <div className='max-w-6xl mx-auto'>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
            {/* Step 1 */}
            <div className='card bg-base-200 shadow-md'>
              <div className='card-body p-6'>
                <div className='flex items-center justify-center mb-6'>
                  <div className='bg-primary text-primary-content w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold'>
                    1
                  </div>
                </div>
                <h3 className='text-xl font-bold text-center mb-4'>Download & Browse</h3>
                <p className='text-center text-base-content/80'>
                  Get the MunchRun app, create an account, and browse local restaurants offering their actual menu prices.
                </p>
              </div>
            </div>

            {/* Step 2 */}
            <div className='card bg-base-200 shadow-md'>
              <div className='card-body p-6'>
                <div className='flex items-center justify-center mb-6'>
                  <div className='bg-primary text-primary-content w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold'>
                    2
                  </div>
                </div>
                <h3 className='text-xl font-bold text-center mb-4'>Order & Pay</h3>
                <p className='text-center text-base-content/80'>
                  Select your items, customize as needed, and check out with our transparent pricing — no hidden fees or inflated costs.
                </p>
              </div>
            </div>

            {/* Step 3 */}
            <div className='card bg-base-200 shadow-md'>
              <div className='card-body p-6'>
                <div className='flex items-center justify-center mb-6'>
                  <div className='bg-primary text-primary-content w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold'>
                    3
                  </div>
                </div>
                <h3 className='text-xl font-bold text-center mb-4'>Track & Enjoy</h3>
                <p className='text-center text-base-content/80'>
                  Follow your order in real-time as our fairly-paid drivers deliver your food quickly and reliably to your door.
                </p>
              </div>
            </div>
          </div>

          <div className='card bg-primary text-primary-content mt-12'>
            <div className='card-body p-8'>
              <div className='flex flex-col md:flex-row items-center gap-6'>
                <div className='flex-1'>
                  <h3 className='text-2xl font-bold mb-4'>Coming Soon to Your Area</h3>
                  <p className='mb-4'>
                    MunchRun is currently in development and getting ready to launch. Be among the first to experience
                    a food delivery service that's fair for everyone.
                  </p>
                  <p>
                    Leave your email to get notified when we launch in your area.
                  </p>
                </div>
                <div className='flex-1'>
                  <div className='flex flex-col items-center gap-3'>
                    <a
                      href='mailto:contact@munchrun.com.au?subject=MunchRun%20Launch%20Updates'
                      className='btn btn-lg bg-white text-primary hover:bg-white/90 w-full'
                    >
                      Get Launch Updates
                    </a>
                    <p className='text-sm text-primary-content/80'>
                      We respect your privacy. No spam, just launch updates.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HowItWorks
