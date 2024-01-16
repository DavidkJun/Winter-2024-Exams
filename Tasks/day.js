// Get day number

'use strict';
const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

const getDayNumber = (dayToFind) => {
  const weekLength = days.length;
  for (let i = 0; i < weekLength; i++) {
    const loweredDay = days[i].toLowerCase();
    if (dayToFind.startsWith(loweredDay)) return i + 1; 
  }
  return -1;
};

module.exports = getDayNumber;
