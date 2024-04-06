/**
 * Description: funcion check if insert word is palindrome.
 * @param {string} wordToCheck
 * @returns {boolean} true if palindrome, else false.
 */
function isPalindrome(wordToCheck) {

  let result = false; // boolean

  let invertedWord = "";

  for (let i = wordToCheck.length - 1; i >= 0; i--) {

    console.log(invertedWord, typeof invertedWord);

    invertedWord += wordToCheck[i];

  };

  console.log(invertedWord, typeof invertedWord);

  if (wordToCheck.toLowerCase() === invertedWord.toLowerCase()) {

    result = true;

  };

  return result;

};

