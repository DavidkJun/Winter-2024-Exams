// Get day number

'use strict';

const getDayNumber = (dayToFind) => {
  const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  for (let i = 0; i < days.length; i++) {
    if (dayToFind.startsWith(days[i].toLowerCase())) {
      return i + 1;
    }
  }
  return -1;
};

module.exports = getDayNumber;
