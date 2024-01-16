// Get one random element from an array
'use strict';

const generateSampleIndex = (length) => Math.floor(Math.random() * length);

const getSample = (arr) => {
  const length = arr.length;
  const sampleIndex = generateSampleIndex(length);
  return arr[sampleIndex];
};

module.exports = getSample;
