import React from 'react'

function AboutPage () {
  const values = [
    {
      icon: '⚖️',
      title: 'Fairness',
      description: 'We believe in equitable treatment of all participants in the food delivery ecosystem. For drivers, that means fair and transparent pay. For restaurants, it means zero commission fees.'
    },
    {
      icon: '🔍',
      title: 'Transparency',
      description: 'We practice open communication about our fee structure, business practices, and algorithms. No hidden fees, no secret markups, no opaque decision-making.'
    },
    {
      icon: '🌱',
      title: 'Sustainability',
      description: "We're building a financially viable model that ensures long-term success for all stakeholders - not just quick profits for shareholders."
    },
    {
      icon: '🏙️',
      title: 'Community',
      description: 'We prioritize and promote local, independent Melbourne restaurants and contribute to the vitality of our local food culture.'
    },
    {
      icon: '💡',
      title: 'Innovation',
      description: 'We continuously improve our platform through technology and feedback, focusing on ethical solutions to industry-wide problems.'
    },
    {
      icon: '🛡️',
      title: 'Safety',
      description: 'We prioritize the safety of drivers, customers, and restaurant staff through thoughtful policies and platform design.'
    }
  ]

  const pillars = [
    {
      icon: '🛵',
      title: 'For Drivers',
      color: 'primary',
      points: [
        'Dynamic pricing with base fee, distance-based pay, and demand multipliers',
        'Hybrid minimum earnings guarantee ranging from $30-38/hour based on performance tiers',
        'Wait time compensation and efficiency bonuses',
        '100% of customer tips go directly to drivers'
      ]
    },
    {
      icon: '🍔',
      title: 'For Restaurants',
      color: 'secondary',
      points: [
        'Zero commission fees - keeping 100% of your menu price',
        'Small, transparent markup on menu items visible to customers',
        'Complete control over order flow and driver management',
        'Optional PRO subscription for reduced customer fees and increased visibility'
      ]
    },
    {
      icon: '👤',
      title: 'For Customers',
      color: 'accent',
      points: [
        'Transparent pricing with clear breakdown of all fees',
        'Support for local, independent restaurants',
        'Real-time order tracking and communication',
        'Ethical consumption knowing all participants are treated fairly'
      ]
    }
  ]

  const timeline = [
    {
      year: '2024',
      title: 'Concept Development',
      description: 'Research, business planning, and initial concept development'
    },
    {
      year: '2025',
      title: 'Platform Building',
      description: 'Current phase: Technology development, partnerships, and team building'
    },
    {
      year: 'Future',
      title: 'Melbourne Launch',
      description: 'Initial launch in select Melbourne neighborhoods with early partners'
    },
    {
      year: 'Beyond',
      title: 'Growth & Expansion',
      description: 'Expansion to more Melbourne suburbs and potentially other Australian cities'
    }
  ]

  return (
    <main className='pt-24 pb-16'>
      {/* Hero Section */}
      <section className='bg-base-100 py-16'>
        <div className='container mx-auto px-4'>
          <div className='flex flex-col lg:flex-row items-center gap-12'>
            <div className='lg:w-1/2'>
              <div className='badge badge-primary mb-4'>About Us</div>
              <h1 className='text-5xl font-bold mb-6'>Transforming Food Delivery in Melbourne</h1>
              <p className='text-xl mb-6 opacity-80 leading-relaxed'>
                MunchRun is building a fairer, more transparent food delivery platform that puts
                drivers, restaurants, and customers first. We're reimagining what's possible when
                a delivery service prioritizes equity and community over quick profits.
              </p>
              <a href='mailto:contact@munchrun.com.au' className='btn btn-primary'>
                Get In Touch
              </a>
            </div>
            <div className='lg:w-1/2'>
              <div className='card bg-base-200 shadow-xl'>
                <div className='card-body'>
                  <h2 className='card-title text-2xl mb-4'>Our Mission</h2>
                  <p className='text-lg italic opacity-90'>
                    "To create a food delivery platform that is equitable and beneficial for all stakeholders:
                    drivers, restaurants, and customers, while fostering a strong sense of community."
                  </p>
                  <div className='divider' />
                  <h2 className='card-title text-2xl mb-4'>Our Vision</h2>
                  <p className='text-lg italic opacity-90'>
                    "To become the leading food delivery platform in Melbourne, recognized for its fair practices,
                    support for local businesses, exceptional service, and positive impact on the lives of drivers."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Problem Section */}
      <section className='bg-base-200 py-16'>
        <div className='container mx-auto px-4'>
          <div className='text-center mb-12'>
            <h2 className='text-3xl font-bold mb-4'>The Problem We're Solving</h2>
            <p className='text-lg max-w-3xl mx-auto opacity-80'>
              The current food delivery ecosystem is broken, with drivers underpaid, restaurants
              charged excessive commissions, and customers facing hidden fees and markups.
            </p>
          </div>

          {/* Modified stats for better contrast */}
          <div className='grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto'>
            <div className='card bg-base-100 shadow-xl'>
              <div className='card-body text-center'>
                <h3 className='text-lg font-medium text-error'>Restaurant Commissions</h3>
                <p className='text-4xl font-bold my-2'>15-35%</p>
                <p className='text-sm'>Charged by other platforms</p>
              </div>
            </div>

            <div className='card bg-base-100 shadow-xl'>
              <div className='card-body text-center'>
                <h3 className='text-lg font-medium text-error'>Hidden Markups</h3>
                <p className='text-4xl font-bold my-2'>Up to 30%</p>
                <p className='text-sm'>On menu items</p>
              </div>
            </div>

            <div className='card bg-base-100 shadow-xl'>
              <div className='card-body text-center'>
                <h3 className='text-lg font-medium text-error'>Driver Pay</h3>
                <p className='text-4xl font-bold my-2'>Inconsistent</p>
                <p className='text-sm'>Often below minimum wage</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Approach Section */}
      <section className='py-16 bg-base-100'>
        <div className='container mx-auto px-4'>
          <div className='text-center mb-12'>
            <h2 className='text-3xl font-bold mb-4'>Our Approach</h2>
            <p className='text-lg max-w-3xl mx-auto opacity-80'>
              We're building a platform that creates value for all participants in the food delivery ecosystem,
              not just shareholders. Here's what makes MunchRun different:
            </p>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
            {pillars.map((pillar, index) => (
              <div key={index} className={`card bg-base-200 border-t-4 border-${pillar.color} shadow-xl hover:shadow-2xl transition-all duration-300`}>
                <div className='card-body'>
                  <div className='flex items-center mb-4'>
                    <span className='text-3xl mr-3'>{pillar.icon}</span>
                    <h3 className='card-title text-xl'>{pillar.title}</h3>
                  </div>
                  <ul className='space-y-2'>
                    {pillar.points.map((point, i) => (
                      <li key={i} className='flex items-start'>
                        <svg className={`h-5 w-5 text-${pillar.color} mr-2 mt-1 flex-shrink-0`} fill='currentColor' viewBox='0 0 20 20'>
                          <path fillRule='evenodd' d='M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z' clipRule='evenodd' />
                        </svg>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className='py-16 bg-base-200'>
        <div className='container mx-auto px-4'>
          <div className='text-center mb-12'>
            <h2 className='text-3xl font-bold mb-4'>Our Core Values</h2>
            <p className='text-lg max-w-3xl mx-auto opacity-80'>
              These principles guide every decision we make and feature we build.
            </p>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
            {values.map((value, index) => (
              <div key={index} className='card bg-base-100 shadow-xl hover:-translate-y-1 transition-transform duration-300'>
                <div className='card-body'>
                  <div className='flex items-center mb-4'>
                    <div className='w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mr-4'>
                      <span className='text-2xl'>{value.icon}</span>
                    </div>
                    <h3 className='card-title'>{value.title}</h3>
                  </div>
                  <p className='opacity-80'>{value.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Journey Section */}
      <section className='py-16 bg-base-100'>
        <div className='container mx-auto px-4'>
          <div className='text-center mb-12'>
            <h2 className='text-3xl font-bold mb-4'>Our Journey</h2>
            <p className='text-lg max-w-3xl mx-auto opacity-80'>
              We're still in the early stages, but we have a clear vision for where we're going.
            </p>
          </div>

          <div className='flex flex-col max-w-4xl mx-auto'>
            {timeline.map((item, index) => (
              <div key={index} className='flex mb-8 last:mb-0'>
                <div className='mr-4'>
                  <div className='w-16 h-16 rounded-full bg-primary flex items-center justify-center shadow-lg'>
                    <span className='text-primary-content font-bold'>{item.year}</span>
                  </div>
                  {index < timeline.length - 1 && (
                    <div className='w-0.5 h-full bg-primary/30 mx-auto mt-2' />
                  )}
                </div>
                <div className='pt-3'>
                  <h3 className='text-xl font-bold mb-2'>{item.title}</h3>
                  <p className='opacity-80'>{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Join Us Section */}
      <section className='py-16 bg-primary text-primary-content'>
        <div className='container mx-auto px-4 text-center'>
          <h2 className='text-3xl font-bold mb-6'>Join the MunchRun Movement</h2>
          <p className='text-xl mb-8 max-w-2xl mx-auto'>
            We're creating a better future for food delivery in Melbourne. Whether you're a restaurant owner,
            delivery driver, or someone who values local businesses and fair practices, we'd love to have you join us.
          </p>
          <div className='flex flex-col sm:flex-row gap-4 justify-center'>
            <a
              href='mailto:contact@munchrun.com.au'
              className='btn btn-lg btn-secondary'
            >
              Contact Us
            </a>
            <a
              href='https://discord.gg/6TfycPfEDh'
              target='_blank'
              rel='noopener noreferrer'
              className='btn btn-lg btn-outline border-white text-white hover:bg-white hover:text-primary'
            >
              Join Our Discord
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}

export default AboutPage
