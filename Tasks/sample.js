// Get one random element from an array
'use strict';

const getSample = (arr) => {
let sampleIndex = 0;
sampleIndex = Math.floor(Math.random() * arr.length);
  return arr[sampleIndex];
};

module.exports = getSample;
