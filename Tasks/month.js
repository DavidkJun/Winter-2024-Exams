// Get month number
'use strict'
const months = ['jan','feb', 'mar','apr','may','jun','jul','aug','sep','oct','nov', 'dec',];

const findMonth = (monthToFind) => {
  const numberOfMonths = months.length;
  const lowered = monthToFind.toLowerCase()
  for (const month of months) {
    if (lowered.startsWith(month)) return months.indexOf(month) + 1;
  }
  return -1;
};

module.exports = findMonth;
