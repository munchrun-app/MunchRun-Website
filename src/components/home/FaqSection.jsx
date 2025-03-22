import React, { useState, useEffect } from 'react'

function FaqSection () {
  const [activeCategory, setActiveCategory] = useState('general')
  const [searchTerm, setSearchTerm] = useState('')
  const [expandedItems, setExpandedItems] = useState({})

  // Categories with icons for visual enhancement
  const categories = [
    { id: 'general', label: 'General', icon: '❓' },
    { id: 'drivers', label: 'For Drivers', icon: '🛵' },
    { id: 'restaurants', label: 'For Restaurants', icon: '🍽️' }
  ]

  // Updated FAQ data - removed specific launch dates
  const faqData = {
    general: [
      {
        question: 'What is MunchRun?',
        answer: 'MunchRun is a new food delivery platform in Melbourne, Australia, committed to creating a fairer and more sustainable ecosystem for drivers, restaurants, and customers.<br><br>We offer a convenient way to order food from local restaurants while ensuring fair compensation for drivers and zero commission fees for our restaurant partners.'
      },
      {
        question: 'How is MunchRun different from other food delivery apps?',
        answer: "<ul class='list-disc pl-5 space-y-2'><li><strong>No Commission Fees for Restaurants:</strong> We don't charge restaurants any commission fees, allowing them to keep more of their earnings.</li><li><strong>Fair Driver Pay:</strong> We offer dynamic pricing with a competitive base fee, distance-based pay, and time/demand multipliers. Drivers also receive a dynamic minimum earnings guarantee and 100% of their tips.</li><li><strong>Local Focus:</strong> We prioritize and promote local, independent restaurants.</li><li><strong>Transparent Pricing:</strong> Our pricing model is transparent, with a clear breakdown of fees for customers.</li><li><strong>Ethical Practices:</strong> We are committed to ethical treatment of drivers, fair partnerships with restaurants, and supporting the local community.</li></ul>"
      },
      {
        question: 'Where will MunchRun be available?',
        answer: "MunchRun is currently in the research and development phase, with plans to launch initially in Melbourne, Victoria, Australia. We're focused on creating a platform specifically tailored to Melbourne's unique food culture and neighborhoods."
      },
      {
        question: 'When will MunchRun launch?',
        answer: "MunchRun is currently in the early development stages. While we don't have a specific launch date to share yet, we're working diligently to build a platform that truly delivers on our promises of fairness and transparency. Sign up for updates to be among the first to know when we're ready to launch."
      },
      {
        question: 'How can I get involved before launch?',
        answer: "If you're a restaurant owner, potential driver, or interested customer, please <a href=\"mailto:contact@munchrun.com.au\" class=\"text-primary underline hover:text-primary-focus\">email us</a>. We're looking for early partners and feedback on our concept as we develop the platform."
      }
    ],
    drivers: [
      {
        question: 'How will I become a MunchRun driver?',
        answer: "When we launch, you'll be able to apply through our website or app. You'll need to provide some basic information, undergo a background check, and complete our onboarding process. We're focused on creating a straightforward, respectful application process."
      },
      {
        question: 'What are the requirements to be a MunchRun driver?',
        answer: "You must be at least 18 years old, have a valid driver's license, a reliable vehicle, and appropriate insurance. You'll also need a smartphone with a data plan and to pass a background check. You must also supply your own insulated food delivery bag."
      },
      {
        question: 'How does MunchRun driver pay work?',
        answer: "<ul class='list-disc pl-5 space-y-2'><li><strong>Dynamic Pricing:</strong> You'll earn a base fee for each delivery, plus a distance-based fee (per kilometre beyond a set radius), and a time/demand multiplier that increases earnings during peak hours and in high-demand areas.</li><li><strong>Minimum Earnings Guarantee (MEG):</strong> MunchRun offers a dynamic minimum earnings guarantee that ranges from $30/hour to $38/hour, depending on your performance tier.</li><li>Drivers who do not meet the minimum requirements for Bronze will not be eligible for the minimum earnings guarantee.</li><li><strong>Wait Time Compensation:</strong> You'll be compensated for excessive wait times at restaurants ($0.20/min after 5 mins, $0.50/min after 20 mins).</li><li><strong>100% of Tips:</strong> You keep 100% of any tips you receive from customers.</li><li><strong>Large Order Bonus:</strong> You'll receive 33% of a 1% fee charged on orders over $100.</li></ul>"
      },
      {
        question: 'What are the tiers for the MEG and how do they work?',
        answer: "<ul class='list-disc pl-5 space-y-2'><li><strong>Newcomer:</strong> No guarantee. New drivers start here.</li><li><strong>Bronze:</strong> $30/hour guarantee during active time.</li><li><strong>Silver:</strong> $32/hour guarantee during active time.</li><li><strong>Gold:</strong> $35/hour guarantee during active time.</li><li><strong>Platinum:</strong> $38/hour guarantee during active time.</li></ul><br>Drivers can move up or down tiers based on their performance each week."
      },
      {
        question: 'What is the Driver Code of Conduct?',
        answer: 'The Driver Code of Conduct outlines the expectations for professional behavior, food safety, and performance standards for all MunchRun drivers. It includes guidelines on customer interactions, order handling, vehicle maintenance, and ethical practices.'
      }
    ],
    restaurants: [
      {
        question: 'How can my restaurant partner with MunchRun?',
        answer: "When we launch, you'll be able to register interest through our website. Our team will reach out to discuss partnership opportunities and guide you through the onboarding process."
      },
      {
        question: 'What are the fees for restaurants on MunchRun?',
        answer: "<ul class='list-disc pl-5 space-y-2'><li><strong>Zero Commission Fees:</strong> MunchRun does not charge any commission fees to restaurants.</li><li><strong>Fair Service Fee:</strong> There is a small, transparent markup (3.5-4.5%) on menu items, which is visible to customers and helps fund our operations and fair driver pay.</li><li><strong>Large Order Fee:</strong> Restaurants receive 33% of a 1% fee on orders over $100.</li><li><strong>Onboarding Fee:</strong> There is a one-time onboarding fee of $200 which covers setup, training, and hardware.</li></ul>"
      },
      {
        question: 'What are the benefits of partnering with MunchRun?',
        answer: "<ul class='list-disc pl-5 space-y-2'><li><strong>Keep More of Your Earnings:</strong> No commission fees mean you retain a larger share of your revenue.</li><li><strong>Control:</strong> Fine-grained control over order flow, driver management, and the ability to throttle orders during busy periods.</li><li><strong>Reach New Customers:</strong> Tap into MunchRun's customer base while maintaining your brand integrity.</li><li><strong>Operational Efficiency:</strong> Tools to manage your delivery operations more effectively, including driver ratings and controls.</li><li><strong>Support Local:</strong> Be part of a platform that prioritizes and supports local Melbourne businesses.</li></ul>"
      },
      {
        question: 'How will I manage my menu and orders on MunchRun?',
        answer: "You'll manage your menu, orders, and restaurant information through a dedicated Android tablet provided by MunchRun. You'll receive comprehensive training on how to use the restaurant platform during the onboarding process."
      },
      {
        question: 'Will MunchRun integrate with my POS system?',
        answer: "We're designing our platform with POS integration capabilities. We aim to support popular POS systems used by Melbourne restaurants to ensure seamless operation."
      }
    ]
  }

  // Reset expanded items when changing categories
  useEffect(() => {
    setExpandedItems({})
  }, [activeCategory])

  // Toggle an FAQ item's expanded state
  const toggleItem = (id) => {
    setExpandedItems(prev => ({
      ...prev,
      [id]: !prev[id]
    }))
  }

  // Filter FAQs based on search term
  const filteredFaqs = searchTerm
    ? Object.entries(faqData).flatMap(([category, items]) =>
      items.filter(item =>
        item.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
          item.answer.toLowerCase().includes(searchTerm.toLowerCase())
      ).map(item => ({ ...item, category }))
    )
    : faqData[activeCategory]

  return (
    <section className='py-20 bg-base-100' id='faq'>
      <div className='container mx-auto px-4'>
        <div className='text-center mb-12'>
          <div className='badge badge-lg badge-secondary mb-4'>FAQ</div>
          <h2 className='text-4xl font-bold mb-4'>Frequently Asked Questions</h2>
          <p className='text-lg max-w-2xl mx-auto opacity-80'>
            Find answers to common questions about MunchRun, our mission, and how our platform works.
          </p>
        </div>

        {/* Search Bar */}
        <div className='form-control mb-8 max-w-md mx-auto'>
          <div className='input-group'>
            <input
              type='text'
              placeholder='Search FAQs...'
              className='input input-bordered w-full'
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button className='btn btn-square btn-primary'>
              <svg xmlns='http://www.w3.org/2000/svg' className='h-6 w-6' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z' />
              </svg>
            </button>
          </div>
        </div>

        {/* Category Selection Tabs - only show if not searching */}
        {!searchTerm && (
          <div className='flex justify-center mb-8'>
            <div className='tabs tabs-boxed bg-base-200 p-1'>
              {categories.map((category) => (
                <a
                  key={category.id}
                  className={`tab tab-lg gap-2 transition-all duration-200 ${activeCategory === category.id ? 'tab-active' : ''}`}
                  onClick={() => setActiveCategory(category.id)}
                >
                  <span className='text-xl'>{category.icon}</span>
                  {category.label}
                </a>
              ))}
            </div>
          </div>
        )}

        {/* Display filtered FAQs or FAQs from active category */}
        <div className='max-w-3xl mx-auto'>
          {searchTerm && filteredFaqs.length === 0
            ? (
              <div className='alert alert-info'>
                <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' className='stroke-current flex-shrink-0 w-6 h-6'>
                  <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z' />
                </svg>
                <span>No results found. Try a different search term.</span>
              </div>
              )
            : (
              <div className='space-y-4'>
                {(searchTerm ? filteredFaqs : faqData[activeCategory]).map((item, index) => {
                  const itemId = `faq-${searchTerm ? item.category + '-' : ''}${index}`
                  return (
                    <div
                      key={itemId}
                      className={`collapse collapse-arrow bg-base-200 rounded-box transition-all duration-300 hover:shadow-md ${expandedItems[itemId] ? 'collapse-open' : 'collapse-close'}`}
                    >
                      <div
                        className='collapse-title text-xl font-medium flex items-center cursor-pointer pr-12'
                        onClick={() => toggleItem(itemId)}
                      >
                        {searchTerm && (
                          <span className='badge badge-sm mr-2' style={{ textTransform: 'capitalize' }}>
                            {item.category}
                          </span>
                        )}
                        {item.question}
                      </div>
                      <div className='collapse-content'>
                        <div className='pt-2 pb-4 text-base leading-relaxed' dangerouslySetInnerHTML={{ __html: item.answer }} />
                      </div>
                    </div>
                  )
                })}
              </div>
              )}
        </div>

        {/* CTA Section */}
        <div className='mt-16 text-center'>
          <p className='mb-4 text-lg'>Still have questions? We're happy to help!</p>
          <a
            href='mailto:contact@munchrun.com.au'
            className='btn btn-primary btn-lg gap-2'
          >
            <svg xmlns='http://www.w3.org/2000/svg' className='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'>
              <path d='M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z' />
              <path d='M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z' />
            </svg>
            Contact Us
          </a>
        </div>
      </div>
    </section>
  )
}

export default FaqSection
