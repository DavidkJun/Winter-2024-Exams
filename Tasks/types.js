// Count types in an array
'use strict';

const typesCount =  (arrayOfTypes) => {
  const types = {
    number: 0,
    string: 0,
    boolean: 0,
  };
  for (const type of arrayOfTypes) {
    const t = typeof type;
    types[t]++;
  }
  arrayOfTypes.push('string');
  return types;
  s.length;
};

module.exports = typesCount;
