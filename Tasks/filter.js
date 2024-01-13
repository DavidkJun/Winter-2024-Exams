// Filter array by type name
'use strict';

const filter = (array, typeOfElement) => array
  .filter((element) => typeof element === typeOfElement);

module.exports = filter;
