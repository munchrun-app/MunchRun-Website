import React, { useState } from 'react';
import EarningsTab from './tabs/EarningsTab';
import HowItWorksTab from './tabs/HowItWorksTab';
import RequirementsTab from './tabs/RequirementsTab';
import FaqTab from './tabs/FaqTab';

function DriverContent() {
  const [activeTab, setActiveTab] = useState('earnings');

  // Create a mapping of tab components for more reliable rendering
  const tabComponents = {
    earnings: <EarningsTab />,
    how: <HowItWorksTab />,
    requirements: <RequirementsTab />,
    faq: <FaqTab />
  };

  return (
    <section className="py-16 bg-base-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Everything You Need to Know</h2>

        <div className="tabs tabs-boxed justify-center mb-8 overflow-x-auto">
          <a 
            className={`tab ${activeTab === 'earnings' ? 'tab-active' : ''} cursor-pointer`}
            onClick={() => setActiveTab('earnings')}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
            </svg>
            Earnings
          </a>
          <a 
            className={`tab ${activeTab === 'how' ? 'tab-active' : ''}`}
            onClick={() => setActiveTab('how')}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
            </svg>
            How It Works
          </a>
          <a 
            className={`tab ${activeTab === 'requirements' ? 'tab-active' : ''}`}
            onClick={() => setActiveTab('requirements')}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10 2a1 1 0 00-1 1v1a1 1 0 002 0V3a1 1 0 00-1-1zM4 4h3a3 3 0 006 0h3a2 2 0 012 2v9a2 2 0 01-2 2H4a2 2 0 01-2-2V6a2 2 0 012-2zm2.5 7a1.5 1.5 0 100-3 1.5 1.5 0 000 3zm2.45 4a2.5 2.5 0 10-4.9 0h4.9zM12 9a1 1 0 100 2h3a1 1 0 100-2h-3zm-1 4a1 1 0 011-1h2a1 1 0 110 2h-2a1 1 0 01-1-1z" clipRule="evenodd" />
            </svg>
            Requirements
          </a>
          <a 
            className={`tab ${activeTab === 'faq' ? 'tab-active' : ''}`}
            onClick={() => setActiveTab('faq')}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
            </svg>
            FAQ
          </a>
        </div>

        {/* Improved Tab Content rendering */}
        <div className="w-full block">
          {tabComponents[activeTab]}
        </div>
      </div>
    </section>
  );
}

export default DriverContent;
