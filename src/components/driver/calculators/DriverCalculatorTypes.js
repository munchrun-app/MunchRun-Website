// This file contains shared types and constants for the driver calculator components

// Real-world example data sets
export const exampleData = {
  example1: {
    name: "Platform A Example 1",
    description: "2 orders over 2hr 42min",
    dashTime: 162, // 2hr 42min in minutes
    activeTime: 49,
    waitTime: 79, // 1hr 19min (60min + 19min) from example
    distance: 15.6, // 10km + 5.6km
    orders: 2,
    earnings: 20.26, // $10.77 + $9.49
    details: "2 Orders: 10km for $10.77 (1hr wait), 5.6km for $9.49 (19min wait)",
    platform: "Platform A",
    isPeakPeriod: false
  },
  example2: {
    name: "Platform A Example 2",
    description: "4 orders over 1hr 48min",
    dashTime: 108, // 1hr 48min in minutes
    activeTime: 52,
    waitTime: 42, // 4min + 4min + 15min + 19min
    distance: 24.1, // 4.5km + 13km + 2km + 4.6km
    orders: 4,
    earnings: 34.94, // $6.40 + $14.08 + $7.46 + $7.00
    details: "4 Orders: 4.5km ($6.40), 13km ($14.08), 2km ($7.46), 4.6km ($7.00)",
    platform: "Platform A",
    isPeakPeriod: true
  },
  example3: {
    name: "Platform B Example",
    description: "1 order over 18min",
    dashTime: 18,
    activeTime: 13.2, // 13min 12sec
    waitTime: 0, // Not specified, assumed 0
    distance: 2.83,
    orders: 1,
    earnings: 5.40,
    details: "1 Order: 2.83km for $5.40 (13min 12sec)",
    platform: "Platform B",
    isPeakPeriod: false
  },
  custom: {
    name: "Custom Values",
    description: "Adjust the sliders below",
    dashTime: 120,
    activeTime: 60,
    waitTime: 30,
    distance: 15,
    orders: 3,
    earnings: 25,
    details: "Your custom scenario",
    platform: "Custom",
    isPeakPeriod: true
  }
};

// MEG tier data
export const megTiers = {
  bronze: {
    name: "Bronze",
    baseGuarantee: 10,
    activeTimeBonus: 20,
    totalHourlyGuarantee: 30,
    requirements: {
      acceptanceRate: 80,
      completionRate: 90,
      onTimeRate: 80,
      customerRating: 4.5,
      minHours: 20
    }
  },
  silver: {
    name: "Silver",
    baseGuarantee: 11,
    activeTimeBonus: 21,
    totalHourlyGuarantee: 32,
    requirements: {
      acceptanceRate: 80,
      completionRate: 95,
      onTimeRate: 85,
      customerRating: 4.7,
      minHours: 25
    }
  },
  gold: {
    name: "Gold",
    baseGuarantee: 12.5,
    activeTimeBonus: 22.5,
    totalHourlyGuarantee: 35,
    requirements: {
      acceptanceRate: 85,
      completionRate: 97,
      onTimeRate: 90,
      customerRating: 4.8,
      minHours: 30
    }
  },
  platinum: {
    name: "Platinum",
    baseGuarantee: 14,
    activeTimeBonus: 24,
    totalHourlyGuarantee: 38,
    requirements: {
      acceptanceRate: 90,
      completionRate: 99,
      onTimeRate: 95,
      customerRating: 4.9,
      minHours: 35
    }
  }
};

// Helper functions
export const formatTime = (minutes) => {
  const hours = Math.floor(minutes / 60);
  const mins = minutes % 60;
  return hours > 0 ? `${hours}h ${mins}m` : `${mins}m`;
};

export const formatMoney = (amount) => {
  return amount.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
};

export const calculateMonthlyEarnings = (hourlyRate, hoursPerWeek) => {
  // Average 4.33 weeks per month (52 weeks / 12 months)
  const weeksPerMonth = 4.33;
  return hourlyRate * hoursPerWeek * weeksPerMonth;
};
