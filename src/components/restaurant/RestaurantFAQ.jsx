import React from 'react'

function RestaurantFAQ () {
  const faqs = [
    {
      question: "How does MunchRun make money if there's no commission?",
      answer: "MunchRun adds a Platform Contribution Charge to the customer's order, which is transparent on the checkout page. This charge is not taken from your earnings - you receive 100% of your menu prices."
    },
    {
      question: 'What is the platform contribution charge?',
      answer: "The Platform Contribution Charge is a small fee added to each item on the menu that the customer pays. It helps cover our delivery operations while ensuring restaurants keep their full menu prices. This is different from commission models where the fee is hidden and taken from the restaurant's earnings."
    },
    {
      question: 'Can I set different prices on MunchRun compared to my in-store menu?',
      answer: "No. MunchRun's policy requires that you maintain the same prices as your dine-in menu. This ensures pricing transparency for customers and maintains the integrity of our zero-commission model. The Platform Contribution Charge is added separately and clearly shown to customers."
    },
    {
      question: 'Is there any cost for restaurants to join MunchRun?',
      answer: 'Yes, there is a one-time $200 onboarding fee that covers setup, training, and the Android tablet we provide for order management. This is the only upfront cost, and there are no hidden fees or monthly charges unless you opt for a PRO subscription.'
    },
    {
      question: 'What are the PRO and PRO+ subscription options?',
      answer: 'PRO and PRO+ are optional subscription plans that reduce the Platform Contribution Fee your customers pay when ordering. This can lead to more orders and higher revenue. PRO offers a reduced fee and increased visibility, while PRO+ provides even greater benefits. These are entirely optional and designed to help your business grow on our platform.'
    },
    {
      question: 'How quickly will I receive my payments?',
      answer: 'We process payments weekly. All orders completed from Monday to Sunday will be paid out to your account by the following Wednesday.'
    },
    {
      question: 'Can I use my own delivery drivers?',
      answer: 'MunchRun provides the full delivery service, but if you have your own delivery team, we can discuss a hybrid model. Contact us for more details.'
    },
    {
      question: 'What happens with customer tips?',
      answer: 'All tips intended for the restaurant go directly to you, with no deductions. Driver tips go to the drivers.'
    },
    {
      question: 'How do I change my menu or prices?',
      answer: 'You have full control over your menu through our restaurant dashboard. Changes can be made instantly and will be reflected on the customer app immediately.'
    },
    {
      question: 'What areas does MunchRun cover?',
      answer: 'We currently operate throughout Melbourne and surrounding suburbs, with plans to expand to additional areas soon. Contact us to confirm service in your specific location.'
    },
    {
      question: 'Why do other platforms lead to inflated menu prices?',
      answer: "Due to the high commission fees (25-35%) on other platforms, many restaurants feel forced to inflate their menu prices by 10-15% to maintain profitability. This creates a lose-lose situation where customers pay more, yet restaurants still earn less. MunchRun's zero-commission model allows you to maintain your standard dine-in prices, resulting in better value for customers and higher earnings for you."
    },
    {
      question: 'How does the Platform Contribution Fee appear to customers?',
      answer: 'When browsing your menu, customers will see the item price with the Platform Contribution Fee included. During checkout, this fee is broken out separately for transparency. This approach balances a clean browsing experience with honest disclosure of all costs.'
    },
    {
      question: 'How do the dynamic delivery fees work?',
      answer: 'Delivery fees are calculated based on several factors: a base fee ($3.50-$4.50), distance charge ($0.60-$0.80/km beyond an initial radius), time of day (up to 1.6x during peak hours), and restaurant demand (up to 1.5x during high-volume periods). These multipliers help manage order flow to your kitchen and ensure driver availability. You can set a maximum delivery radius to control customer expectations and delivery costs.'
    }
  ]

  return (
    <section className='py-16 px-4 container mx-auto' id='faq'>
      <div className='text-center mb-12'>
        <h2 className='text-3xl md:text-4xl font-bold'>Frequently Asked Questions</h2>
        <p className='mt-4 text-lg max-w-2xl mx-auto text-base-content/80'>
          Have questions about partnering with MunchRun? Find answers to common questions below.
        </p>
      </div>

      <div className='max-w-4xl mx-auto'>
        <div className='join join-vertical w-full'>
          {faqs.map((faq, index) => (
            <div key={index} className='collapse collapse-arrow join-item border border-base-300'>
              <input type='radio' name='faq-accordion' defaultChecked={index === 0} />
              <div className='collapse-title text-lg font-medium'>
                {faq.question}
              </div>
              <div className='collapse-content'>
                <p>{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>

        <div className='text-center mt-8'>
          <p className='mb-4'>Don't see your question answered?</p>
          <button className='btn btn-outline'>Contact Us</button>
        </div>
      </div>
    </section>
  )
}

export default RestaurantFAQ
