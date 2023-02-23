// Iteration #1: Find the maximum

console.log("Iteration #1: Find the maximum");
console.log("----------------------------");

// Implement the function maxOfTwoNumbers that takes two numbers as arguments and returns the bigger number.

function maxOfTwoNumbers(num1, num2) {
  if (num1 > num2) {
    return num1;
  } else {
    return num2;
  }
}

console.log(maxOfTwoNumbers(5, 10));
console.log(maxOfTwoNumbers(20, 8));
console.log(maxOfTwoNumbers(-3, 0));

console.log("----------------------------");

// Iteration #2: Find the longest word

console.log("Iteration #2: Find the longest word");
console.log("----------------------------");

/* Implement the function findLongestWord that takes as an argument an array of words and returns the longest one. If there are 2 with the same length, it should return the first occurrence.

You can use the following array to test your solution:

const words = ['mystery', 'brother', 'aviator', 'crocodile', 'pearl', 'orchard', 'crackpot']; */

function findLongestWord(words) {
  let longestWord = "";
  for (let i = 0; i < words.length; i++) {
    if (words[i].length > longestWord.length) {
      longestWord = words[i];
    }
  }
  return longestWord;
}

const words = ['mystery', 'brother', 'aviator', 'crocodile', 'pearl', 'orchard', 'crackpot'];
console.log(findLongestWord(words));

console.log("----------------------------");

// Iteration #3: Calculate the sum
// Iteration #3.1: Sum numbers

console.log("Iteration #3: Calculate the sum");
console.log("Iteration #3.1: Sum numbers");
console.log("----------------------------");

/* Calculating a sum can be as simple as iterating over an array and adding each of the elements together.

Implement the function named sumNumbers that takes an array of numbers as an argument, and returns the sum of all of the numbers in the array. Later in the course, we will learn how to do this by using the reduce array method, which will make your work significantly easier. For now, let's practice the "declarative" way of adding values, using loops.

You can use the following array to test your solution:

const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10]; */


function sumNumbers(numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  return sum;
}

const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];
console.log(sumNumbers(numbers));

console.log("----------------------------");

// Iteration #4: Calculate the average
// Iteration #4.1: Array of numbers

console.log("Iteration #4: Calculate the average");
console.log("Iteration #4.1: Array of numbers");
console.log("----------------------------");


/* Implement the function averageNumbers that expects an array of numbers and returns the average of the numbers.

You can use the following array to test your solution:

const numbers = [2, 6, 9, 10, 7, 4, 1, 9]; */

function averageNumbers(numbers2) {
  let sum = 0;
  for (let i = 0; i < numbers2.length; i++) {
    sum += numbers2[i];
  }
  return sum / numbers2.length;
}

const numbers2 = [2, 6, 9, 10, 7, 4, 1, 9];
console.log(averageNumbers(numbers2));

console.log("----------------------------");

// Iteration #4.2: Array of strings

console.log("Iteration #4.2: Array of strings");
console.log("----------------------------");

/* Implement the function named averageWordLength that receives as a single argument an array of words and returns the average length of the words:

You can use the following array to test your solution:

const words = ['seat', 'correspond', 'linen', 'motif', 'hole', 'smell', 'smart', 'chaos', 'fuel', 'palace']; */

function averageWordLength(words2) {
  let totalLength = 0;
  for (let i = 0; i < words2.length; i++) {
    totalLength += words2[i].length;
  }
  return totalLength / words2.length;
}

const words2 = ['seat', 'correspond', 'linen', 'motif', 'hole', 'smell', 'smart', 'chaos', 'fuel', 'palace'];
console.log(averageWordLength(words));

console.log("----------------------------");

// Iteration #5: Unique arrays

console.log("Iteration #5: Unique arrays");
console.log("----------------------------");

/* Take the following array, remove the duplicates, and return a new array. You are more than likely going to want to check out the Array methods indexOf and includes.

Do this in the form of a function uniquifyArray that receives an array of words as an argument.

You can use the following array to test your solution:

const words = [
  'crab',
  'poison',
  'contagious',
  'simple',
  'bring',
  'sharp',
  'playground',
  'poison',
  'communion',
  'simple',
  'bring'
]; */

function uniquifyArray(words3) {
  const uniqueWords = [];
  for (let i = 0; i < words3.length; i++) {
    if (!uniqueWords.includes(words3[i])) {
      uniqueWords.push(words3[i]);
    }
  }
  return uniqueWords;
}

const words3 = [
  'crab',
  'poison',
  'contagious',
  'simple',
  'bring',
  'sharp',
  'playground',
  'poison',
  'communion',
  'simple',
  'bring'
];
console.log(uniquifyArray(words3));

console.log("----------------------------");

// Iteration #6: Find elements

console.log("Iteration #6: Find elements");
console.log("----------------------------");

/* Let's create a simple array search.

Declare a function named doesWordExist that will take in an array of words as one argument, and a word to search for as the other. Return true if the word exists in the array, otherwise, return false.

You can use the following array to test your solution:

const words = ['machine', 'subset', 'trouble', 'starting', 'matter', 'eating', 'truth', 'disobedience']; */

function doesWordExist(words4, word) {
  for (let i = 0; i < words4.length; i++) {
    if (words4[i] === word) {
      return true;
    }
  }
  return false;
}

const words4 = ['machine', 'subset', 'trouble', 'starting', 'matter', 'eating', 'truth', 'disobedience'];
console.log(doesWordExist(words4, 'subset'));
console.log(doesWordExist(words4, 'bacon'));

console.log("----------------------------");

// Iteration #7: Count repetition

console.log("Iteration #7: Count repetition");
console.log("----------------------------");

/* Declare a function named howManyTimes that will take in an array of words as the first argument, and a word to search for as the second argument. The function will return the number of times that word appears in the array.

You can use the following array to test your solution:

const words = [
  'machine',
  'matter',
  'subset',
  'trouble',
  'starting',
  'matter',
  'eating',
  'matter',
  'truth',
  'disobedience',
  'matter'
]; */

function howManyTimes(words5, word) {
  let count = 0;
  for (let i = 0; i < words5.length; i++) {
    if (words5[i] === word) {
      count++;
    }
  }
  return count;
}

const words5 = [
  'machine',
  'matter',
  'subset',
  'trouble',
  'starting',
  'matter',
  'eating',
  'matter',
  'truth',
  'disobedience',
  'matter'
];

console.log(howManyTimes(words5, 'matter'));
console.log(howManyTimes(words5, 'bacon'));

console.log("----------------------------");
