// Get month number
'use strict'

const months = ['jan','feb', 'mar','apr','may','jun','jul','aug','sep','oct','nov', 'dec',];

const findMonth = (monthToFind) => {
  const l = months.length;
  for (let i = 0; i < l; i++) {
    if (monthToFind.toLowerCase().startsWith(months[i])) return i + 1;
  }
  return -1;
};

module.exports = findMonth;
