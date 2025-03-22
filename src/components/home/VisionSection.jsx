import React, { useState } from 'react'

function VisionSection () {
  const [activeTab, setActiveTab] = useState('drivers')

  const visionPillars = [
    {
      id: 'drivers',
      title: 'For Drivers',
      icon: '🛵',
      color: 'primary',
      items: [
        {
          subtitle: 'Fair Compensation',
          description: 'Dynamic pricing with a competitive base fee, distance-based pay, and time/demand multipliers.',
          icon: '💰'
        },
        {
          subtitle: 'Earnings Guarantee',
          description: 'Hybrid dynamic minimum earnings guarantee with performance-based tiers providing a safety net.',
          icon: '🛡️'
        },
        {
          subtitle: 'Transparent System',
          description: 'Clear order assignment algorithm that prioritizes drivers based on performance metrics.',
          icon: '📊'
        },
        {
          subtitle: 'Driver Empowerment',
          description: 'Wait time compensation, 100% of tips, efficiency bonuses, and transparent performance tracking.',
          icon: '⭐'
        }
      ]
    },
    {
      id: 'restaurants',
      title: 'For Restaurants',
      icon: '🍽️',
      color: 'secondary',
      items: [
        {
          subtitle: 'Zero Commission',
          description: 'No percentage-based commission fees on orders, allowing restaurants to keep 100% of their menu price.',
          icon: '🚫'
        },
        {
          subtitle: 'Operational Control',
          description: 'Fine-grained control over order flow, driver management, and the ability to throttle orders during busy periods.',
          icon: '🎮'
        },
        {
          subtitle: 'Fair Service Fee',
          description: 'Small, transparent markup of 3.5-4.5% on menu items visible to customers rather than hidden fees.',
          icon: '💲'
        },
        {
          subtitle: 'PRO Subscription',
          description: 'Optional subscription for reduced customer-facing fees, increased visibility, and premium features.',
          icon: '⚡'
        }
      ]
    },
    {
      id: 'customers',
      title: 'For Customers',
      icon: '👤',
      color: 'accent',
      items: [
        {
          subtitle: 'Transparent Pricing',
          description: 'Clear breakdown of costs with no hidden markups or surprise fees at checkout.',
          icon: '🔍'
        },
        {
          subtitle: 'Support Local',
          description: 'Connect with and support local Melbourne restaurants while ensuring drivers receive fair pay.',
          icon: '🏙️'
        },
        {
          subtitle: 'Real-time Tracking',
          description: 'Live order tracking and convenient in-app communication with drivers and restaurants.',
          icon: '🗺️'
        },
        {
          subtitle: 'Ethical Consumption',
          description: 'Feel good knowing your delivery supports a fair ecosystem for all participants.',
          icon: '♻️'
        }
      ]
    },
    {
      id: 'community',
      title: 'Community Focus',
      icon: '🤝',
      color: 'info',
      items: [
        {
          subtitle: 'Melbourne-First',
          description: "Built specifically for Melbourne's unique food culture and neighborhoods.",
          icon: '🇦🇺'
        },
        {
          subtitle: 'Local Businesses',
          description: 'Prioritizing and promoting independent local restaurants over large chains.',
          icon: '🏬'
        },
        {
          subtitle: 'Sustainability',
          description: 'Building a financially viable model that ensures long-term success for all stakeholders.',
          icon: '🌱'
        },
        {
          subtitle: 'Transparency',
          description: 'Open communication about our business practices, algorithms, and fee structure.',
          icon: '📝'
        }
      ]
    }
  ]

  return (
    <section id='vision' className='py-20 bg-base-100'>
      <div className='container mx-auto px-4'>
        <div className='text-center mb-12'>
          <div className='badge badge-lg badge-primary mb-4'>Our Vision</div>
          <h2 className='text-4xl font-extrabold mb-4'>A Fair Food Delivery Ecosystem</h2>
          <p className='text-lg max-w-3xl mx-auto opacity-80'>
            While we're still in development, we're building a platform that revolutionizes
            food delivery by creating a fairer, more transparent ecosystem for everyone involved.
          </p>
        </div>

        {/* Tab Navigation */}
        <div className='tabs tabs-boxed justify-center mb-8 max-w-3xl mx-auto'>
          {visionPillars.map(pillar => (
            <a
              key={pillar.id}
              className={`tab ${activeTab === pillar.id ? `tab-active bg-${pillar.color} text-${pillar.color}-content` : ''}`}
              onClick={() => setActiveTab(pillar.id)}
            >
              <span className='mr-2'>{pillar.icon}</span> {pillar.title}
            </a>
          ))}
        </div>

        {/* Tab Content */}
        <div className='mb-10'>
          {visionPillars.map(pillar => (
            <div key={pillar.id} className={`transition-all duration-500 ${activeTab === pillar.id ? 'block' : 'hidden'}`}>
              <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
                {pillar.items.map((item, index) => (
                  <div
                    key={index}
                    className={`card bg-base-200 hover:shadow-xl transition-all duration-300 border-t-4 border-${pillar.color} hover:-translate-y-1`}
                  >
                    <div className='card-body'>
                      <div className='flex items-center mb-3'>
                        <span className='text-2xl mr-3'>{item.icon}</span>
                        <h3 className='card-title text-lg'>{item.subtitle}</h3>
                      </div>
                      <p className='text-sm opacity-90'>{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className='stats stats-vertical lg:stats-horizontal shadow w-full bg-base-200 mt-12'>
          <div className='stat'>
            <div className='stat-figure text-primary'>
              <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' className='inline-block w-8 h-8 stroke-current'>
                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z' />
              </svg>
            </div>
            <div className='stat-title'>Fair Driver Pay</div>
            <div className='stat-value text-primary'>100%</div>
            <div className='stat-desc'>of tips go directly to drivers</div>
          </div>

          <div className='stat'>
            <div className='stat-figure text-secondary'>
              <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' className='inline-block w-8 h-8 stroke-current'>
                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4' />
              </svg>
            </div>
            <div className='stat-title'>Restaurant Commission</div>
            <div className='stat-value text-secondary'>0%</div>
            <div className='stat-desc'>compared to 15-35% on other platforms</div>
          </div>

          <div className='stat'>
            <div className='stat-figure text-info'>
              <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' className='inline-block w-8 h-8 stroke-current'>
                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4' />
              </svg>
            </div>
            <div className='stat-title'>Customer-First</div>
            <div className='stat-value'>100%</div>
            <div className='stat-desc'>Transparent pricing, no hidden fees</div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default VisionSection
