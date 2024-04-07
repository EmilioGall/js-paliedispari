/**
 * Description: function return a random number between a minimum and maximum numbers given.
 * @param {number} min minimum number.
 * @param {number} max maximum number.
 * @returns {number} random number between min and max.
 */
function getRandomNum(min, max) {

  return Math.floor(Math.random() * (max - min) + min + 1);

};

/**
 * Description: function return the sum of the numbers in an array.
 * @param {object} arrayToSum array of numbers to sum.
 * @returns {number} returns the sum of the numbers of the array.
 */
function sum(arrayToSum) {

  let sum = 0;

  for (let i=0; i< arrayToSum.length; i++) {

    sum += arrayToSum[i];

  };

  return sum;
};

/**
 * Description: funcion check if insert number is even.
 * @param {number} numToCheck number to check.
 * @returns {boolean} true if param/2 have no rest, else false.
 */
function isEven(numToCheck) {

  let result = "odd"; // boolean

  if (numToCheck % 2 === 0) {

    result = "even";

  };

  return result;

};