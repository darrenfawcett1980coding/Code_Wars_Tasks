///////************************************************************//////

function spinWords(string) {
  const str = string.split(' ');

  const result = str.map((wrd) =>
    wrd.length >= 5 ? wrd.split('').reverse().join('') : wrd
  );
  return result.join(' ');
}

// console.log(spinWords('Hey fellow warriors')); // "Hey wollef sroirraw"
// console.log(spinWords('This is a test')); // "This is a test"
// console.log(spinWords('This is another test')); // "This is rehtona test"

///////************************************************************//////

function towerBuilder(nFloors) {
  let stars = 1;
  let space = (nFloors -= 1);

  for (let i = 0; i <= nFloors; i++) {
    console.log(' '.repeat(space) + '*'.repeat(stars) + ' '.repeat(space));
    stars += 2;
    space--;
  }
}

// towerBuilder(5); // Output the tower with 5 floors

///////************************************************************//////

function flickSwitch(arr) {
  const result = [];
  let flick = true;

  arr.forEach(function (y) {
    flick = y === 'flick' ? !flick : flick;
    result.push(flick);
  });
  return result;
}

const f1 = flickSwitch(['codewars', 'flick', 'code', 'wars']);
const f2 = flickSwitch(['flick', 'chocolate', 'adventure', 'sunshine']);
const f3 = flickSwitch(['bicycle', 'jarmony', 'flick', 'sheep', 'flick']);
const f4 = flickSwitch(['apple', 'fig', 'duck', 'flick', 'kiwi']);
const f5 = flickSwitch(['grape', 'plum', 'flick', 'flick', 'duck']);
const f6 = flickSwitch(['cherry', 'duck', 'flick', 'flick', 'grapefruit']);

// console.log(f1);  // (4) [true, false, false, false]
// console.log(f2);  // (4) [false, false, false, false]
// console.log(f3);  // (5) [true, true, false, false, true]
// console.log(f4);  // (5) [true, true, true, false, false]
// console.log(f5);  // (5) [true, true, false, true, true]
// console.log(f6);  // (5) [true, true, false, true, true]

///////************************************************************//////

function descendingOrderRedo(n) {
  return parseInt(
    n
      .toString()
      .split('')
      .map(Number)
      .sort((a, b) => b - a)
      .join(''),
    10
  );
}

// console.log(descendingOrderRedo(42145));
// console.log(descendingOrderRedo(145263));
// console.log(descendingOrderRedo(123456789));
// console.log(descendingOrderRedo(0));

///////************************************************************//////

function removeSmallest(numbers) {
  return numbers.sort((a, b) => a - b);
}

// console.log(removeSmallest([1, 2, 3, 4, 5]));
// console.log(removeSmallest([5, 3, 2, 1, 4]));
// console.log(removeSmallest([2, 2, 1, 2, 1]));

///////************************************************************//////

function firstNonRepeatingLetter(s) {
  const lowerCaseWrd = s.toLowerCase();

  const letters = lowerCaseWrd.split('').reduce((acc, w) => {
    acc[w] = (acc[w] || 0) + 1;
    return acc;
  }, {});
  // console.log(letters);

  for (let i = 0; i < s.length; i++) {
    if (letters[lowerCaseWrd[i]] === 1) {
      return s[i];
    }
  }
  return '';
}

// firstNonRepeatingLetter('stress');

// console.log(firstNonRepeatingLetter('')); // answer = ''
// console.log(firstNonRepeatingLetter('aabbcc')); // answer = 'a'
// console.log(firstNonRepeatingLetter('stress')); // answer = 't'
// console.log(firstNonRepeatingLetter('todo')); // answer = 't'
// console.log(firstNonRepeatingLetter('Cchallenge')); // answer = 'h'
// console.log(firstNonRepeatingLetter('rrtthhgg')); // answer = 't'

///////************************************************************//////

// Scramblies

function scramble(str1, str2) {
  const charCount = {};

  for (let char of str1) {
    charCount[char] = (charCount[char] || 0) + 1;
  }
  for (let char of str2) {
    if (!charCount[char]) {
      return false;
    }
    charCount[char]--;
  }
  return true;
}

// console.log(scramble('rkqodlw',           'world'      ))      // true
// console.log(scramble('cedewaraaossoqqyt', 'codewars'   ))      // true
// console.log(scramble('katas',             'steak'      ))      // false
// console.log(scramble('scriptjavx',        'javascript' ))      // false
// console.log(scramble('scriptingjava',     'javascript' ))      // true
// console.log(scramble('scriptsjava',       'javascripts'))      // true
// console.log(scramble('javscripts',        'javascript' ))      // false
// console.log(scramble('jscripts',          'javascript' ))      // false
// console.log(scramble('aabbcamaomsccdd',   'commas'     ))      // true
// console.log(scramble('commas',            'commas'     ))      // true
// console.log(scramble('sammoc',            'commas'     ))      // true

///////************************************************************//////

//// Valid Braces

function validBraces(braces) {
  //TODO
}

// "(){}[]"   =>  True
// "([{}])"   =>  True
// "(}"       =>  False
// "[(])"     =>  False
// "[({})](]" =>  False

///////************************************************************//////

//// Multiples of 3 or 5

function solution(number) {
  if (number < 0) {
    return 0;
  }

  let sum = 0;
  for (let i = 3; i < number; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
      sum += i;
    }
  }
  return sum;
}

// console.log(solution(10))

///////************************************************************//////

function titleCase(title, minorWords) {
  const newStr = [];
  const tl = title.toLowerCase().split(' ');
  const exclude = minorWords ? minorWords.toLowerCase().split(' ') : '';

  for (const wrd of tl) {
    const capital = wrd.charAt(0).toUpperCase() + wrd.slice(1);
    if (newStr.length === 0) {
      newStr.push(capital);
    } else {
      if (exclude.includes(wrd)) {
        newStr.push(wrd);
      } else {
        newStr.push(capital);
      }
    }
  }

  return newStr.join(' ');
}

// console.log(titleCase('')); // ''
// console.log(titleCase('a clash of KINGS', 'a an the of')); // 'A Clash of Kings'
// console.log(titleCase('THE WIND IN THE WILLOWS', 'The In')); // 'The Wind in the Willows'
// console.log(titleCase('the quick brown fox')); // 'The Quick Brown Fox'

///////************************************************************//////

const arr1 = ['yes', 'no', 'maybe', 'ducks', 'are', 'gods'];
const arr2 = ['yes', 'no'];

for (const wrd of arr1) {
  if (!arr2.includes(wrd)) {
  }
}

const capitalizeWrd = function (...str) {
  return str.map(function (wrd) {
    return wrd.charAt(0).toUpperCase() + wrd.slice(1).toLowerCase();
  });
};
// capitalizeWrd('ducks', 'tits').forEach(word => console.log(word));

///////************************************************************//////
/////eg. 39 --> 3 (because 3*9 = 27, 2*7 = 14, 1*4 = 4 and 4 has only one digit)
/////eg. 999 --> 4 (because 9*9*9 = 729, 7*2*9 = 126, 1*2*6 = 12, and finally 1*2 = 2)
/////eg. 4 --> 0 (because 4 is already a one-digit number)

function persistence(num) {
  let count = 0;
  while (num > 9) {
    num = num
      .toString()
      .split('')
      .reduce((acc, digit) => acc * Number(digit), 1);
    count++;
  }
  return count;
}

// console.log(persistence(35)); // =>  1
// console.log(persistence(39));  // =>  3
// console.log(persistence(4));   // =>  0
// console.log(persistence(25));  // =>  2
// console.log(persistence(999)); // =>  4

// const arrReduce = function(nums) {
//   return nums.reduce((acc, num) => Number(num) * Number(num) , 0)
// }

// const ar = console.log(arrReduce([2,2,5]));
// console.log(`Answer: ${2*2*5}`);

///////************************************************************//////

function singleNumberRedo(num) {
  while (num > 9) {
    num = num
      .toString()
      .split('')
      .reduce((acc, n) => acc * +n);
  }
  return num;
}

// singleNumberRedo(35);
// console.log(singleNumberRedo(35)); /// =>  5
// console.log(singleNumberRedo(39)); /// =>  4
// console.log(singleNumberRedo(4)); //// =>  4
// console.log(singleNumberRedo(25)); /// =>  0
// console.log(singleNumberRedo(999)); // =>  2
// console.log(singleNumberRedo(52562)); // =>  2

///////___************************************************************___//////

function comp(array1, array2) {
  const arr1 = array1.sort((a, b) => a - b);
  const arr2 = array2.sort((a, b) => a - b).map((n) => Math.sqrt(n));

  if (!arr1 || !arr2 || arr1.length !== arr2.length) return false;
  console.log(arr1);
  console.log(arr2);

  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }

  return true;
}

// Test cases
const compArr1 = [121, 144, 19, 161, 19, 144, 19, 11];
const compArr2 = [121, 14641, 20736, 361, 25921, 361, 20736, 361];
const compArr3 = [121, 14641, 20736, 361, 25921, 361, 20736, 484];
const compArr4 = [132, 14641, 20736, 361, 25921, 361, 20736, 361];

// console.log(comp(compArr11, compArr22)); // true
// console.log(comp(compArr11, compArr33)); // true
// console.log(comp(compArr11, compArr44)); // false

///////___************************************************************___//////

function inArray(array1, array2) {
  const result = [];
  array2.filter((subWrd) => {
    if (array1.some((str) => str.includes(subWrd))) {
      result.push(subWrd);
    }
  });
  result.sort();
  return result;
}

const inArrayWrds = ['lively', 'alive', 'harp', 'sharp', 'armstrong'];

const check1 = ['xyz', 'live', 'strong']; // [live, strong]
const check2 = ['live', 'strong', 'arp']; // ["arp", "live", "strong"]
const check3 = ['tarp', 'mice', 'bulls']; // []

// console.log(inArray(inArrayWrds, check1));
// console.log(inArray(inArrayWrds, check2));
// console.log(inArray(inArrayWrds, check3));

///////___************************************************************___//////

function firstNonRepeatingLetter(s) {
  const lowerCase = s.toLowerCase();
  const letters = lowerCase.split('').reduce((acc, l) => {
    acc[l] = (acc[l] || 0) + 1;
    return acc;
  }, {});

  console.log(letters);
  for (let i = 0; i < s.length; i++) {
    if (letters[lowerCase[i]] === 1) {
      return s[i];
    }
  }
  return '';
}

// NOTES: did all with no help. struggled with the for loop

// firstNonRepeatingLetter('stress');

// console.log(firstNonRepeatingLetter('stress')); // answer = 't'
// console.log(firstNonRepeatingLetter('')); // answer = ''
// console.log(firstNonRepeatingLetter('aabbcc')); // answer = 'a'
// console.log(firstNonRepeatingLetter('todo')); // answer = 't'
// console.log(firstNonRepeatingLetter('Cchallenge')); // answer = 'h'
// console.log(firstNonRepeatingLetter('rrThhgg')); // answer = 't'

///////___************************************************************___//////

function beeramid(bonus, price) {
  if (bonus < 0) return 0
  let totalCost = 0;
  let level = 0;
  
  while (totalCost <= bonus) {
    level++;
    totalCost += level ** 2 * price;
    console.log(`level: ${level}`);
    console.log(`$${totalCost}`);
  }
  return level -= 1;
}

// console.log(beeramid(1500, 2)); // Output: 12
// console.log(beeramid(5000, 3)); // Output: 16
// console.log(beeramid(9, 2));    // 1
// console.log(beeramid(10, 2));   // 2
// console.log(beeramid(11, 2));   // 2
// console.log(beeramid(21, 1.5)); // 3
// console.log(beeramid(454, 5));  // 5
// console.log(beeramid(455, 5));  // 6
// console.log(beeramid(-1, 4));  // 0


///////______________________________NEW TASKS___________________________//////
///////___************************************************************___//////

// Write a function that when given a number >= 0, returns an Array of ascending length subarrays.

function pyramid(n) {
  // your code here
}

pyramid(3) // [[1], [1, 1], [1, 1, 1]]
// console.log(pyramid(0)) // []
// console.log(pyramid(1)) // [[1]]
// console.log(pyramid(2)) // [[1], [1, 1]]
// console.log(pyramid(3)) // [[1], [1, 1], [1, 1, 1]]

///////___************************************************************___//////

// You will be given an array of numbers. You have to sort the odd numbers in ascending order while leaving the even numbers at their original positions.

function sortArray(array) {
  // Return a sorted array.
}

// console.log(sortArray([5, 3, 2, 8, 1, 4])) // [1, 3, 2, 8, 5, 4]);
// console.log(sortArray([5, 3, 1, 8, 0])) ///// [1, 3, 5, 8, 0]);
// console.log(sortArray([])) ////////////////// [];

///////___************************************************************___//////
// If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. 
// The sum of these multiples is 23.
// Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in.
// Additionally, if the number is negative, return 0.
// Note: If the number is a multiple of both 3 and 5, only count it once.

function solution(number) {
  
}
