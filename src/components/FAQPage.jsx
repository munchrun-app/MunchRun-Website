import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function FAQPage () {
  const [activeCategory, setActiveCategory] = useState('all')
  const [expandedItems, setExpandedItems] = useState({})

  // Toggle FAQ item expansion
  const toggleItem = (id) => {
    setExpandedItems(prev => ({
      ...prev,
      [id]: !prev[id]
    }))
  }

  // Filter items by category
  const filterItems = (items, category) => {
    if (category === 'all') return items
    return items.filter(item => item.category === category)
  }

  // FAQ data with categories
  const faqItems = [
    {
      id: 'what-is-munchrun',
      category: 'general',
      question: 'What is MunchRun?',
      answer: 'MunchRun is a fair and transparent food delivery platform based in Melbourne, Australia. We connect hungry customers with local restaurants and dedicated delivery drivers, while ensuring everyone in the ecosystem is treated fairly.'
    },
    {
      id: 'how-different',
      category: 'general',
      question: 'How is MunchRun different from other food delivery services?',
      answer: 'MunchRun stands out by offering zero commissions for restaurants, fair pay for drivers, and transparent pricing for customers. We believe in creating a sustainable delivery ecosystem where all participants can thrive.'
    },
    {
      id: 'delivery-areas',
      category: 'customer',
      question: 'Where does MunchRun deliver?',
      answer: 'Currently, MunchRun is planning to launch in select areas of Melbourne. As we grow, we\'ll expand to more suburbs and eventually to other cities across Australia.'
    },
    {
      id: 'delivery-fees',
      category: 'customer',
      question: 'How much does delivery cost?',
      answer: 'Our delivery fees are transparent and based on distance, with no hidden markups. The exact fee is shown before you place your order. We aim to keep delivery costs reasonable while ensuring our drivers receive fair compensation.'
    },
    {
      id: 'driver-earnings',
      category: 'driver',
      question: 'How much do MunchRun drivers earn?',
      answer: 'MunchRun drivers earn a fair base rate plus additional compensation based on distance, time, and order size. Our payment structure ensures drivers receive appropriate compensation for their work, typically higher than industry averages.'
    },
    {
      id: 'restaurant-fees',
      category: 'restaurant',
      question: 'What fees do restaurants pay to use MunchRun?',
      answer: 'Unlike traditional delivery platforms that charge up to 30% commission, MunchRun charges restaurants zero commission on orders. We instead use a transparent flat fee structure that allows restaurants to keep more of their profits.'
    },
    {
      id: 'become-driver',
      category: 'driver',
      question: 'How do I become a MunchRun driver?',
      answer: 'To become a MunchRun driver, you need to be at least 18 years old, have a reliable vehicle (car, bicycle, or scooter), a valid driver\'s license (for motor vehicles), and the legal right to work in Australia. Visit our Drivers page to apply.'
    },
    {
      id: 'restaurant-partner',
      category: 'restaurant',
      question: 'How can my restaurant partner with MunchRun?',
      answer: 'Restaurant owners can apply to partner with MunchRun through our Restaurants page. We\'ll guide you through the simple setup process, including menu creation, payment setup, and staff training on our ordering system.'
    },
    {
      id: 'order-issues',
      category: 'customer',
      question: 'What if there\'s an issue with my order?',
      answer: 'If you experience any issues with your order, you can report them through the app or website. Our customer service team will work quickly to resolve the problem, whether it\'s missing items, quality issues, or delivery concerns.'
    },
    {
      id: 'payment-methods',
      category: 'customer',
      question: 'What payment methods does MunchRun accept?',
      answer: 'MunchRun accepts most major credit and debit cards, as well as digital payment methods like Apple Pay and Google Pay. We\'re exploring additional payment options to provide more flexibility for our customers.'
    },
    {
      id: 'launch-date',
      category: 'general',
      question: 'When will MunchRun launch?',
      answer: 'MunchRun is currently in the early planning and development stages. We\'re working hard to build a platform that truly serves the needs of all participants. Sign up for our newsletter to be notified when we launch in your area.'
    }
  ]

  const displayedItems = filterItems(faqItems, activeCategory)

  return (
    <div className='container mx-auto py-20 px-4 mt-16'>
      <div className='text-center mb-12'>
        <h1 className='text-4xl font-bold mb-4'>Frequently Asked Questions</h1>
        <p className='text-lg max-w-2xl mx-auto'>
          Find answers to common questions about MunchRun's food delivery service, driver opportunities, and restaurant partnerships.
        </p>
      </div>

      <div className='max-w-3xl mx-auto'>
        {/* FAQ Categories */}
        <div className='tabs tabs-boxed justify-center mb-8'>
          <button
            className={`tab ${activeCategory === 'all' ? 'tab-active' : ''}`}
            onClick={() => setActiveCategory('all')}
          >
            All Questions
          </button>
          <button
            className={`tab ${activeCategory === 'customer' ? 'tab-active' : ''}`}
            onClick={() => setActiveCategory('customer')}
          >
            For Customers
          </button>
          <button
            className={`tab ${activeCategory === 'driver' ? 'tab-active' : ''}`}
            onClick={() => setActiveCategory('driver')}
          >
            For Drivers
          </button>
          <button
            className={`tab ${activeCategory === 'restaurant' ? 'tab-active' : ''}`}
            onClick={() => setActiveCategory('restaurant')}
          >
            For Restaurants
          </button>
        </div>

        {/* FAQ Items */}
        <div className='space-y-4'>
          {displayedItems.map((item) => (
            <div
              key={item.id}
              className='collapse collapse-arrow bg-base-200'
            >
              <input
                type='checkbox'
                id={item.id}
                checked={expandedItems[item.id] || false}
                onChange={() => toggleItem(item.id)}
                className='peer'
              />
              <label htmlFor={item.id} className='collapse-title text-xl font-medium cursor-pointer'>
                {item.question}
              </label>
              <div className='collapse-content'>
                <p>{item.answer}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Contact section */}
        <div className='mt-12 p-6 bg-base-200 rounded-lg text-center'>
          <h2 className='text-2xl font-bold mb-4'>Still have questions?</h2>
          <p className='mb-6'>
            If you can't find the answer you're looking for, our team is here to help.
          </p>
          <Link to='/contact' className='btn btn-primary'>
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  )
}

export default FAQPage
