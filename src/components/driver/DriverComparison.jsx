import React, { useState, useEffect } from 'react'
import { exampleData, megTiers, formatTime, formatMoney, calculateMonthlyEarnings } from './calculators/DriverCalculatorTypes'
import { calculateEarnings } from './calculators/EarningsCalculator'
import ExampleSelector from './comparison/ExampleSelector'
import TierSelector from './comparison/TierSelector'
import InputControls from './comparison/InputControls'
import ResultsComparison from './comparison/ResultsComparison'
import MonthlyProjection from './comparison/MonthlyProjection'
import BenefitsCards from './comparison/BenefitsCards'
import MEGExplanation from './comparison/MEGExplanation'

function DriverComparison () {
  // State for the comparison calculator
  const [activeTime, setActiveTime] = useState(49)
  const [waitTime, setWaitTime] = useState(79)
  const [totalTime, setTotalTime] = useState(162)
  const [distance, setDistance] = useState(15.6)
  const [orders, setOrders] = useState(2)
  const [selectedExample, setSelectedExample] = useState('example1')
  const [driverTier, setDriverTier] = useState('gold')
  const [isPeakTime, setIsPeakTime] = useState(false)
  const [isHighDemand, setIsHighDemand] = useState(false)
  const [isPeakPeriod, setIsPeakPeriod] = useState(false)

  // Update form values when example changes
  useEffect(() => {
    if (selectedExample !== 'custom') {
      const example = exampleData[selectedExample]
      setActiveTime(example.activeTime)
      setWaitTime(example.waitTime)
      setTotalTime(example.dashTime)
      setDistance(example.distance)
      setOrders(example.orders)
      setIsPeakPeriod(example.isPeakPeriod)
    }
  }, [selectedExample])

  // Calculate earnings based on inputs
  const earnings = calculateEarnings({
    selectedExample,
    activeTime,
    waitTime,
    totalTime,
    distance,
    orders,
    driverTier,
    isPeakTime,
    isHighDemand,
    isPeakPeriod
  })

  // Handle input changes
  const handleInputChange = (setter) => (e) => {
    const value = parseFloat(e.target.value) || 0
    setter(value)
    setSelectedExample('custom')
  }

  return (
    <section className='py-16 bg-base-200' id='driver-comparison'>
      <div className='container mx-auto px-4'>
        <div className='text-center mb-12'>
          <h2 className='text-3xl md:text-4xl font-bold'>See How Much More You'll Earn</h2>
          <p className='mt-4 text-lg max-w-2xl mx-auto text-base-content/80'>
            Compare your potential earnings with MunchRun versus other delivery platforms based on real driver data.
          </p>
        </div>

        <div className='max-w-4xl mx-auto'>
          {/* Comparison card */}
          <div className='card bg-base-100 shadow-xl mb-8'>
            <div className='card-body p-6 md:p-8'>
              <h3 className='text-2xl font-bold text-center mb-6'>Driver Earnings Calculator</h3>

              {/* Example selector */}
              <ExampleSelector
                exampleData={exampleData}
                selectedExample={selectedExample}
                setSelectedExample={setSelectedExample}
              />

              {/* Tier selector */}
              <TierSelector
                megTiers={megTiers}
                driverTier={driverTier}
                setDriverTier={setDriverTier}
              />

              {/* Input controls */}
              <InputControls
                activeTime={activeTime}
                waitTime={waitTime}
                distance={distance}
                orders={orders}
                isPeakTime={isPeakTime}
                isHighDemand={isHighDemand}
                isPeakPeriod={isPeakPeriod}
                handleInputChange={handleInputChange}
                setActiveTime={setActiveTime}
                setWaitTime={setWaitTime}
                setDistance={setDistance}
                setOrders={setOrders}
                setIsPeakTime={setIsPeakTime}
                setIsHighDemand={setIsHighDemand}
                setIsPeakPeriod={setIsPeakPeriod}
                formatTime={formatTime}
              />

              {/* Results comparison */}
              <ResultsComparison
                earnings={earnings}
                distance={distance}
                waitTime={waitTime}
                formatTime={formatTime}
              />

              {/* Monthly projection */}
              <MonthlyProjection
                earnings={earnings}
                calculateMonthlyEarnings={calculateMonthlyEarnings}
                formatMoney={formatMoney}
              />
            </div>
          </div>

          {/* Key benefits cards */}
          <BenefitsCards />

          {/* MEG explanation */}
          <MEGExplanation
            megTiers={megTiers}
            driverTier={driverTier}
          />
        </div>
      </div>
    </section>
  )
}

export default DriverComparison
