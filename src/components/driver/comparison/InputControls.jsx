import React from 'react'

function InputControls ({
  activeTime,
  waitTime,
  distance,
  orders,
  isPeakTime,
  isHighDemand,
  isPeakPeriod,
  handleInputChange,
  setActiveTime,
  setWaitTime,
  setDistance,
  setOrders,
  setIsPeakTime,
  setIsHighDemand,
  setIsPeakPeriod,
  formatTime
}) {
  return (
    <div className='mb-8'>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-4 mb-6'>
        {/* Peak time toggle */}
        <div className='form-control'>
          <label className='cursor-pointer label justify-start gap-3'>
            <input
              type='checkbox'
              className='toggle toggle-warning'
              checked={isPeakTime}
              onChange={() => setIsPeakTime(!isPeakTime)}
            />
            <span className='label-text'>Peak Time</span>
            {isPeakTime && (
              <span className='badge badge-warning badge-sm'>Active</span>
            )}
          </label>
          {isPeakTime && (
            <p className='text-xs text-base-content/60 mt-1 ml-10'>
              Dinner time, weekends, etc. (30% increase)
            </p>
          )}
        </div>

        {/* High demand toggle */}
        <div className='form-control'>
          <label className='cursor-pointer label justify-start gap-3'>
            <input
              type='checkbox'
              className='toggle toggle-error'
              checked={isHighDemand}
              onChange={() => setIsHighDemand(!isHighDemand)}
            />
            <span className='label-text'>High Demand</span>
            {isHighDemand && (
              <span className='badge badge-error badge-sm'>Active</span>
            )}
          </label>
          {isHighDemand && (
            <p className='text-xs text-base-content/60 mt-1 ml-10'>
              Bad weather, special events, etc. (20% increase)
            </p>
          )}
        </div>

        {/* MEG Peak Period toggle */}
        <div className='form-control'>
          <label className='cursor-pointer label justify-start gap-3'>
            <input
              type='checkbox'
              className='toggle toggle-primary'
              checked={isPeakPeriod}
              onChange={() => setIsPeakPeriod(!isPeakPeriod)}
            />
            <span className='label-text'>MEG Peak Period</span>
            {isPeakPeriod && (
              <span className='badge badge-primary badge-sm'>Eligible for MEG</span>
            )}
          </label>
          {isPeakPeriod
            ? (
              <p className='text-xs text-base-content/60 mt-1 ml-10'>
                MEG guarantee will apply if earnings are below minimum
              </p>
              )
            : (
              <p className='text-xs text-base-content/60 mt-1 ml-10'>
                MEG only applies during peak periods
              </p>
              )}
        </div>
      </div>

      {(isPeakTime || isHighDemand) && (
        <div className='alert mb-6'>
          <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' className='stroke-info shrink-0 w-6 h-6'>
            <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z' />
          </svg>
          <div>
            <div className='font-bold'>Delivery Fee Multipliers</div>
            <div className='text-xs'>
              MunchRun caps multipliers at 1.6x total, while other platforms can exceed 2.5x during high demand
            </div>
          </div>
        </div>
      )}

      <div className='grid grid-cols-1 md:grid-cols-2 gap-6 mb-2'>
        <div className='space-y-4'>
          <div className='form-control'>
            <label className='label'>
              <span className='label-text font-medium'>Active Driving Time:</span>
              <span className='label-text-alt'>{formatTime(activeTime)}</span>
            </label>
            <input
              type='range'
              min='10'
              max='120'
              value={activeTime}
              onChange={(e) => handleInputChange(setActiveTime)(e)}
              className='range range-primary'
            />
            <div className='flex justify-between text-xs'>
              <span>10m</span>
              <span>2h</span>
            </div>
          </div>

          <div className='form-control'>
            <label className='label'>
              <span className='label-text font-medium'>Restaurant Wait Time:</span>
              <span className='label-text-alt'>{formatTime(waitTime)}</span>
            </label>
            <input
              type='range'
              min='0'
              max='120'
              value={waitTime}
              onChange={(e) => handleInputChange(setWaitTime)(e)}
              className='range range-warning'
            />
            <div className='flex justify-between text-xs'>
              <span>0m</span>
              <span>2h</span>
            </div>
          </div>
        </div>

        <div className='space-y-4'>
          <div className='form-control'>
            <label className='label'>
              <span className='label-text font-medium'>Total Distance:</span>
              <span className='label-text-alt'>{distance.toFixed(1)} km</span>
            </label>
            <input
              type='range'
              min='1'
              max='30'
              step='0.5'
              value={distance}
              onChange={(e) => handleInputChange(setDistance)(e)}
              className='range range-primary'
            />
            <div className='flex justify-between text-xs'>
              <span>1 km</span>
              <span>30 km</span>
            </div>
          </div>

          <div className='form-control'>
            <label className='label'>
              <span className='label-text font-medium'>Number of Orders:</span>
              <span className='label-text-alt'>{orders}</span>
            </label>
            <input
              type='range'
              min='1'
              max='6'
              value={orders}
              onChange={(e) => handleInputChange(setOrders)(e)}
              className='range range-primary'
            />
            <div className='flex justify-between text-xs'>
              <span>1 order</span>
              <span>6 orders</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default InputControls
