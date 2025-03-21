import React from 'react';

function ExampleSelector({ exampleData, selectedExample, setSelectedExample }) {
  return (
    <div className="mb-8">
      <label className="form-control w-full mb-2">
        <div className="label">
          <span className="label-text font-medium">Choose a real-world example or customize:</span>
        </div>
      </label>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-2">
        {Object.keys(exampleData).map(key => (
          <div 
            key={key}
            className={`card card-compact cursor-pointer transition-all hover:shadow-md ${selectedExample === key ? 'bg-primary/10 border-2 border-primary' : 'bg-base-200 border border-base-300'}`}
            onClick={() => setSelectedExample(key)}
          >
            <div className="card-body p-3">
              <h4 className="font-bold text-sm">{exampleData[key].name}</h4>
              <p className="text-xs text-base-content/70">{exampleData[key].description}</p>
              {key !== 'custom' && (
                <div className="badge badge-sm mt-1">{exampleData[key].platform}</div>
              )}
              {exampleData[key].isPeakPeriod && (
                <div className="badge badge-sm badge-primary mt-1 ml-1">MEG Peak Period</div>
              )}
            </div>
          </div>
        ))}
      </div>
      
      {selectedExample !== 'custom' && (
        <div className="alert bg-info/10 mt-4 mb-6">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="stroke-info shrink-0 w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
          </svg>
          <div>
            <div className="font-bold">Real-World Example</div>
            <div className="text-sm">{exampleData[selectedExample].details}</div>
            {exampleData[selectedExample].isPeakPeriod ? (
              <div className="text-xs text-primary mt-1">This order was during a MEG peak period, making it eligible for minimum earnings guarantee.</div>
            ) : (
              <div className="text-xs text-warning mt-1">This order was not during a MEG peak period. Minimum earnings guarantee does not apply.</div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default ExampleSelector;
