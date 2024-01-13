// Return an remove without listed values
'use strict'

const skip = (array, ...elementsToRemove) => {
    const result = [];
    
    for (const value of array) {
        if (!elementsToRemove.includes(value)) {
            result.push(value);
        }
    }

    return result;
};

module.exports = skip;
