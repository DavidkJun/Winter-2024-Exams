// Get day number

'use strict';

const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

const getDayNumber = (dayToFind) => {
  let i;
  for (i = 0; i < days.length; i++) {
    if (dayToFind.startsWith(days[i].toLowerCase())) {
      return i + 1;
    }
  }
  return -1;
};

module.exports = getDayNumber;
