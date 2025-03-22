import React from 'react'

function DriverHero () {
  return (
    <section className='hero min-h-[50vh] bg-base-200 relative'>
      <div className='absolute inset-0 bg-gradient-to-r from-base-300/70 to-transparent z-0' />
      <div
        className='absolute inset-0 bg-cover bg-center opacity-30 z-0' style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1589964304798-095cd6b63ce9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80')"
        }}
      />
      <div className='hero-content text-left relative z-10'>
        <div className='max-w-2xl'>
          <div className='badge badge-primary mb-3'>Driver Opportunities</div>
          <h1 className='text-5xl font-bold mb-6'>Drive with MunchRun</h1>
          <p className='text-xl mb-8'>
            Join Melbourne's fairest food delivery platform. We've redesigned the driver experience with transparent earnings, guaranteed minimums, and a system that respects your time and effort.
          </p>
          <div className='flex flex-wrap gap-3'>
            <a href='mailto:contact@munchrun.com.au?subject=Driver%20Application' className='btn btn-primary btn-lg'>
              Apply to Drive
              <svg xmlns='http://www.w3.org/2000/svg' className='h-5 w-5 ml-1' viewBox='0 0 20 20' fill='currentColor'>
                <path fillRule='evenodd' d='M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z' clipRule='evenodd' />
              </svg>
            </a>
            <a
              href='https://discord.gg/6TfycPfEDh'
              target='_blank'
              rel='noopener noreferrer'
              className='btn btn-outline btn-lg'
            >
              Join Our Community
              <svg xmlns='http://www.w3.org/2000/svg' width='20' height='20' fill='currentColor' viewBox='0 0 16 16' className='ml-1'>
                <path d='M13.545 2.907a13.227 13.227 0 0 0-3.257-1.011.05.05 0 0 0-.052.025c-.141.25-.297.577-.406.833a12.19 12.19 0 0 0-3.658 0 8.258 8.258 0 0 0-.412-.833.051.051 0 0 0-.052-.025c-1.125.194-2.22.534-3.257 1.011a.041.041 0 0 0-.021.018C.356 6.024-.213 9.047.066 12.032c.001.014.01.028.021.037a13.276 13.276 0 0 0 3.995 2.02.05.05 0 0 0 .056-.019c.308-.42.582-.863.818-1.329a.05.05 0 0 0-.01-.059.051.051 0 0 0-.018-.011 8.875 8.875 0 0 1-1.248-.595.05.05 0 0 1-.02-.066.051.051 0 0 1 .015-.019c.084-.063.168-.129.248-.195a.05.05 0 0 1 .051-.007c2.619 1.196 5.454 1.196 8.041 0a.052.052 0 0 1 .053.007c.08.066.164.132.248.195a.051.051 0 0 1-.004.085 8.254 8.254 0 0 1-1.249.594.05.05 0 0 0-.03.03.052.052 0 0 0 .003.041c.24.465.515.909.817 1.329a.05.05 0 0 0 .056.019 13.235 13.235 0 0 0 4.001-2.02.049.049 0 0 0 .021-.037c.334-3.451-.559-6.449-2.366-9.106a.034.034 0 0 0-.02-.019Zm-8.198 7.307c-.789 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.45.73 1.438 1.613 0 .888-.637 1.612-1.438 1.612Zm5.316 0c-.788 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.451.73 1.438 1.613 0 .888-.631 1.612-1.438 1.612Z' />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default DriverHero
