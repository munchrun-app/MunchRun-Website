import { exampleData, megTiers } from './DriverCalculatorTypes';

// Calculate earnings based on various inputs
export const calculateEarnings = ({
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
}) => {
  // Competitor's actual data (from real world example)
  const example = exampleData[selectedExample];
  const competitorBaseOrderPay = selectedExample === 'custom' ? (distance * 1.3) : example.earnings;
  const competitorWaitTimePay = 0; // No compensation for wait time
  const competitorTotalPay = competitorBaseOrderPay;
  const competitorHourlyRate = (competitorTotalPay / totalTime) * 60;
  const competitorActiveHourlyRate = (competitorTotalPay / activeTime) * 60;
  
  // MunchRun's model
  const munchrunBaseFeePerOrder = 4.99; // Updated from $3.50 to $4.50
  const munchrunDistanceFeePerKm = 1.0;
  const munchrunWaitTimePerMinute = 0.25; // $15/hr wait time compensation
  
  // Peak time and demand multipliers
  const munchRunPeakMultiplier = isPeakTime ? 1.5 : 1.0; // 30% increase during peak hours
  const munchRunDemandMultiplier = isHighDemand ? 1.3 : 1.0; // 20% increase during high demand
  // Cap combined multiplier at 1.6x as per MunchRun's fair pricing policy
  const munchRunCombinedMultiplier = Math.min(munchRunPeakMultiplier * munchRunDemandMultiplier, 2.0);
  
  // Get MEG rates based on driver tier
  const tier = megTiers[driverTier];
  
  // Calculate MunchRun earnings with multipliers
  const munchrunDistancePay = distance * munchrunDistanceFeePerKm * munchRunCombinedMultiplier;
  const munchrunBasePay = orders * munchrunBaseFeePerOrder * munchRunCombinedMultiplier;
  const munchrunDeliveryFees = munchrunBasePay + munchrunDistancePay;
  
  // MunchRun pays 95% of delivery fees to drivers
  const munchrunDeliveryPay = munchrunDeliveryFees * 0.95;
  const munchrunWaitPay = waitTime * munchrunWaitTimePerMinute;
  
  // Calculate basic earnings before MEG
  const munchrunBasicPay = munchrunDeliveryPay + munchrunWaitPay;
  
  // Only apply MEG during peak periods
  // Use the example's isPeakPeriod property or the isPeakPeriod state for custom
  const shouldApplyMeg = (selectedExample === 'custom' ? isPeakPeriod : example.isPeakPeriod);
  
  let munchrunTotalPay = munchrunBasicPay;
  let megApplied = false;
  let baseGuarantee = 0;
  let activeTimeBonus = 0;
  let totalMEG = 0;
  
  // Only calculate MEG if in a peak period
  if (shouldApplyMeg) {
    // Calculate hours for MEG components
    const onlineTimeHours = totalTime / 60;
    const activeWaitTimeHours = (activeTime + waitTime) / 60;
    
    // Calculate the MEG components using the hybrid model
    baseGuarantee = tier.baseGuarantee * onlineTimeHours;
    activeTimeBonus = tier.activeTimeBonus * activeWaitTimeHours;
    totalMEG = baseGuarantee + activeTimeBonus;
    
    // Apply MEG if basic pay is less than minimum guarantee
    if (totalMEG > munchrunBasicPay) {
      munchrunTotalPay = totalMEG;
      megApplied = true;
    }
  }
  
  // Calculate MunchRun hourly rates
  const munchrunHourlyRate = (munchrunTotalPay / totalTime) * 60;
  const munchrunActiveHourlyRate = (munchrunTotalPay / (activeTime + waitTime)) * 60;
  
  // Calculate differences
  const payDifference = munchrunTotalPay - competitorTotalPay;
  const percentDifference = (payDifference / competitorTotalPay) * 100;
  
  return {
    competitor: {
      basePay: competitorBaseOrderPay,
      waitPay: competitorWaitTimePay,
      totalPay: competitorTotalPay,
      hourlyRate: competitorHourlyRate,
      activeHourlyRate: competitorActiveHourlyRate,
      perOrder: competitorBaseOrderPay / orders,
      perKm: competitorBaseOrderPay / distance,
      platform: selectedExample === 'custom' ? 'Other Platforms' : example.platform
    },
    munchrun: {
      basePay: munchrunBasePay * 0.95,
      distancePay: munchrunDistancePay * 0.95,
      waitPay: munchrunWaitPay,
      megBaseGuarantee: baseGuarantee,
      megActiveBonus: activeTimeBonus,
      megTotal: totalMEG,
      megAmount: megApplied ? (totalMEG - munchrunBasicPay) : 0,
      megApplied: megApplied,
      megEligible: shouldApplyMeg,
      basicPay: munchrunBasicPay,
      totalPay: munchrunTotalPay,
      hourlyRate: munchrunHourlyRate,
      activeHourlyRate: munchrunActiveHourlyRate,
      perOrder: munchrunTotalPay / orders,
      perKm: munchrunDeliveryPay / distance,
      tier: tier,
      multiplier: munchRunCombinedMultiplier
    },
    difference: {
      amount: payDifference,
      percent: percentDifference
    }
  };
};
