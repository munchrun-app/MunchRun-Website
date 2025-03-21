import React, { useState } from 'react';

function FaqTab() {
  const [expandedItems, setExpandedItems] = useState({});

  const toggleItem = (id) => {
    setExpandedItems(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const faqs = [
    {
      question: "How does the Minimum Earnings Guarantee work?",
      answer: "Our hybrid MEG provides both a base hourly guarantee plus an active time bonus. It includes a base guarantee for your online hours and an additional active time bonus for time spent on deliveries. As you move up tiers from Bronze to Platinum, your guarantees increase, reaching up to $38/hour during active time."
    },
    {
      question: "How is pay calculated for each delivery?",
      answer: "Pay consists of a base fee ($3.50-$4.50), plus distance-based pay ($0.60-$0.80/km beyond the first 1.5-2km), multiplied by time and demand factors. Peak hours can increase your earnings by up to 60%, and high-demand areas can add another 20-35%."
    },
    {
      question: "Do I get to keep 100% of my tips?",
      answer: "Absolutely! You keep 100% of all customer tips. Unlike some platforms, we never use tips to subsidize your base pay."
    },
    {
      question: "When and how do I get paid?",
      answer: "You'll be paid weekly via direct deposit to your nominated bank account. You'll receive a detailed breakdown of all your earnings including delivery fees, tips, wait time compensation, and any MEG top-ups."
    },
    {
      question: "How do I move up to higher tiers?",
      answer: "Your performance is evaluated weekly. If you meet all the requirements for a higher tier (acceptance rate, completion rate, on-time rate, customer rating, and minimum hours), you'll move up one tier. You can only move up one tier per week."
    },
    {
      question: "What happens if I need to unassign an order?",
      answer: "You can unassign orders before confirming pickup, but this will affect your acceptance rate. After confirming pickup (using the geofenced button), you cannot unassign through the app and must contact support if issues arise."
    },
    {
      question: "How does wait time compensation work?",
      answer: "After a 5-minute grace period at the restaurant, you'll earn $0.20 per minute for waiting. After 20 minutes, this increases to $0.50 per minute. Wait time is calculated from when you mark 'Arrived at Restaurant' in the app."
    },
    {
      question: "What if a customer is unavailable for a 'Hand it to Me' delivery?",
      answer: "If a customer is unavailable, make multiple contact attempts and wait 5-10 minutes. If still unreachable, contact support. You may be instructed to leave the order in a safe place with a photo or return it. You'll be compensated for your time and effort in these situations."
    },
    {
      question: "Can I deliver with multiple apps at the same time?",
      answer: "While we don't prohibit multi-apping, we strongly encourage you to prioritize MunchRun orders when online. Multi-apping in a way that causes significant delays may affect your on-time delivery rate and tier status."
    },
    {
      question: "What documents do I need to apply?",
      answer: "You'll need a valid Australian driver's license, proof of vehicle registration and insurance, ABN (Australian Business Number), a profile photo, and bank account details for payments."
    }
  ];

  return (
    <div className="card bg-base-200 shadow-xl">
      <div className="card-body">
        <h3 className="text-2xl font-bold mb-6">Frequently Asked Questions</h3>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={`faq-${index}`}
              className={`collapse collapse-arrow bg-base-100 rounded-box transition-all duration-300 hover:shadow-md ${expandedItems[`faq-${index}`] ? 'collapse-open' : 'collapse-close'}`}
            >
              <div 
                className="collapse-title text-xl font-medium cursor-pointer pr-12"
                onClick={() => toggleItem(`faq-${index}`)}
              >
                {faq.question}
              </div>
              <div className="collapse-content"> 
                <p className="pt-2 pb-4">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="alert bg-primary text-primary-content mt-8 shadow-xl">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="stroke-current shrink-0 w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
          </svg>
          <div>
            <h3 className="font-bold">Have more questions?</h3>
            <div className="text-sm">
              Check out the detailed <a href="#" className="underline font-bold">Driver Code of Conduct</a> or contact us directly at{' '}
              <a href="mailto:contact@munchrun.com.au" className="underline font-bold">contact@munchrun.com.au</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FaqTab;
