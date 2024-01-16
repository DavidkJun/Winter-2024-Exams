// Generate random password
'use strict';
const generateRandomIndex = (maxLength) => Math.floor(Math.random() * maxLength);

const generatePassword = (alphabet, length) => {
  
  const maxLength = alphabet.length;
  let password = '';

  for (let i = 0; i < length; i++) {
    const index = generateRandomIndex(maxLength);
    password = password + alphabet[index];
  }
  return password;
};

module.exports = generatePassword;
