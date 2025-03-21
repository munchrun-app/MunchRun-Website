import React from 'react';

function RequirementsTab() {
  return (
    <div className="card bg-base-200 shadow-xl">
      <div className="card-body">
        <h3 className="text-2xl font-bold mb-6">Requirements to Drive with MunchRun</h3>
        <p className="mb-6">
          Before applying to become a MunchRun driver, please ensure you meet all of the following requirements:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="card bg-base-100 shadow-md">
            <div className="card-body">
              <h4 className="card-title flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-primary" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                </svg>
                Personal Requirements
              </h4>
              <ul className="list-disc ml-6 space-y-2">
                <li>Be at least 18 years old</li>
                <li>Have a valid Australian driver's license</li>
                <li>Have an ABN (Australian Business Number)</li>
                <li>Pass a background check</li>
                <li>Have a smartphone with reliable data connection</li>
                <li>Have a bank account for receiving payments</li>
              </ul>
            </div>
          </div>

          <div className="card bg-base-100 shadow-md">
            <div className="card-body">
              <h4 className="card-title flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-primary" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M8 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM15 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
                  <path d="M3 4a1 1 0 00-1 1v10a1 1 0 001 1h1.05a2.5 2.5 0 014.9 0H10a1 1 0 001-1v-1h3a1 1 0 00.8-.4l3-4a1 1 0 00.2-.6V8a1 1 0 00-1-1h-3.05A2.5 2.5 0 0010 5.05V5a1 1 0 00-1-1H3zm11.54 10H14a1 1 0 01-1-1v-3h3.46l1.92 2.56-.84 1.44z" />
                </svg>
                Vehicle Requirements
              </h4>
              <ul className="list-disc ml-6 space-y-2">
                <li>A reliable vehicle (car, scooter, motorcycle, or e-bike)</li>
                <li>Current vehicle registration</li>
                <li>Comprehensive or third-party property damage insurance</li>
                <li>Vehicle must be clean and in good working condition</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="card bg-base-100 shadow-md mb-8">
          <div className="card-body">
            <h4 className="card-title flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-primary" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a1 1 0 01-1 1v1a1 1 0 11-2 0v-1H7v1a1 1 0 11-2 0v-1a1 1 0 01-1-1V4zm3 1h2v2H7V5zm2 4H7v2h2V9zm2-4h2v2h-2V5zm2 4h-2v2h2V9z" clipRule="evenodd" />
              </svg>
              Required Equipment
            </h4>
            <ul className="list-disc ml-6 space-y-2">
              <li>Insulated food delivery bag (commercial grade) to keep food at proper temperature</li>
              <li>Smartphone mount for your vehicle (for safe navigation)</li>
              <li>Phone charger or power bank to keep your device charged during shifts</li>
            </ul>
          </div>
        </div>

        <div className="card bg-base-100 shadow-md">
          <div className="card-body">
            <h4 className="card-title flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-primary" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clipRule="evenodd" />
              </svg>
              Documents You'll Need
            </h4>
            <p className="mb-4">During the application process, you'll need to provide the following documents:</p>
            <ul className="list-disc ml-6 space-y-2">
              <li>Valid Australian driver's license (front and back)</li>
              <li>Proof of vehicle registration</li>
              <li>Proof of vehicle insurance</li>
              <li>ABN details</li>
              <li>A clear profile photo of yourself</li>
              <li>Bank account details for payments</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RequirementsTab;
