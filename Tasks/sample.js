// Get one random element from an array
'use strict';

const getSample = (arr) => {
  arr = arr[Math.floor(Math.random() * arr.length)];
  return arr;
};

module.exports = getSample;
