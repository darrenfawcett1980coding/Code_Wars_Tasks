///////___************************************************************___//////
///////________________________________EASY _____________________________//////

// If word is 5 or more spin word = return new string

function spinWordsRedo(str) {
  const result = [];
  str.split(' ').map((wrd) => {
    if (wrd.length >= 5) {
      result.push(wrd.split('').reverse().join(''));
    } else {
      result.push(wrd);
    }
  });
  return result.join(' ');
}

// console.log(spinWordsRedo('Hey fellow warriors')); // "Hey wollef sroirraw"
// console.log(spinWordsRedo('This is a test')); // "This is a test"
// console.log(spinWordsRedo('This is another test')); // "This is rehtona test"

///////___************************************************************___//////

function towerBuilderRedo(nFloors) {
  let stars = 1;
  let space = (nFloors -= 1);
  for (let i = 0; i <= nFloors; i++) {
    console.log(' '.repeat(space) + '*'.repeat(stars) + ' '.repeat(space));
    stars += 2;
    space--;
  }
}

// NOTES: no real problems
// towerBuilderRedo(5);

///////___************************************************************___//////

function descendingOrderRedo(num) {
  return parseInt(
    Array.from(String(num), Number)
      .sort((a, b) => b - a)
      .join('')
  );

  return parseInt(
    num
      .toString()
      .split('')
      .sort((a, b) => b - a)
      .join('')
  );
}

// NOTES: forgot the return

const oneDec = descendingOrderRedo(42145);
const twoDec = descendingOrderRedo(145263);
const threeDec = descendingOrderRedo(123456789);
// const fourDec = descendingOrderRedo(0);

// console.log(oneDec); //// = 54421
// console.log(twoDec); //// = 654321
// console.log(threeDec); // = 987654321
// console.log(fourDec); /// = 0
// console.log(typeof oneDec); // = number

///////___************************************************************___//////

function sortRemoveFirstAndLastRedo(nums) {
  let numsCopy = [...nums];

  const minIndex = numsCopy.indexOf(Math.min(...numsCopy));
  numsCopy.splice(minIndex, 1);

  const maxIndex = numsCopy.indexOf(Math.max(...numsCopy));
  numsCopy.splice(maxIndex, 1);

  return numsCopy.sort((a, b) => a - b);
}

//  NOTES: took 30 secs no help
const removeLow1 = sortRemoveFirstAndLastRedo([1, 2, 3, 4, 5]);
const removeLow2 = sortRemoveFirstAndLastRedo([5, 3, 2, 1]);
const removeLow3 = sortRemoveFirstAndLastRedo([2, 2, 1, 2, 1, 9, 5]);
// console.log(removeLow1); // [2, 3, 4]
// console.log(removeLow2); //  [2, 3]
// console.log(removeLow3); //  [1, 2, 2, 2, 5]

///////___************************************************************___//////
///////_______________________________MEDIUM_____________________________//////

///////___************************************************************___//////

function flickSwitchRedo(arr) {
  const result = [];
  let flick = true;

  arr.map((wrd) => {
    if (wrd !== 'flick') {
      result.push(flick);
    } else {
      flick = !flick;
      result.push(flick);
    }
  });
  return result;
}

const flickOne = flickSwitchRedo(['codewars', 'flick', 'code', 'wars']);
const flickTwo = flickSwitchRedo(['flick', 'chocolate', 'adventure', 'sun']);
const flickThr = flickSwitchRedo(['bike', 'jar', 'flick', 'sheep', 'flick']);

// console.log(flickOne); // (4) [true, false, false, false]
// console.log(flickTwo);  // (4) [false, false, false, false]
// console.log(flickThr);  // (5) [true, true, false, false, true]

///////___************************************************************___//////

function firstNonRepeatingLetterRedo(str) {
  if (str === '') return 'none'
  const letters = str.split('').reduce((acc, i) => {
    const iLow = i.toLowerCase()
    acc[iLow] = (acc[iLow] || 0) + 1;
    return acc;
  }, {});
  // console.log(letters);

  let result = 'none'
  for (const i of str) {
    if (letters[i.toLowerCase()] === 1) {
      result = i;
      break;
    }
    // return false
  }

  return result;
}

// NOTES: did all with no help. struggled with the for loop

firstNonRepeatingLetterRedo('stress');

console.log(firstNonRepeatingLetterRedo('stress')); // answer = 't'
console.log(firstNonRepeatingLetterRedo('')); // answer = none
console.log(firstNonRepeatingLetterRedo('aabbcc')); // answer = none
console.log(firstNonRepeatingLetterRedo('todo')); // answer = 't'
console.log(firstNonRepeatingLetterRedo('Cchallenge')); // answer = 'h'
console.log(firstNonRepeatingLetterRedo('rrThhgg')); // answer = 'T'

///////___************************************************************___//////

// Scramblies

function scramble(str1, str2) {
  const charCount = {};

  for (let char of str1) {
    charCount[char] = (charCount[char] || 0) + 1;
  }

  for (let char of str2) {
    if (!charCount[char]) {
      return console.log(false);
    }
    charCount[char]--;
  }
  return console.log(true);
}

// NOTES: rusty but some where in the ball park

// scramble('rkqodlw', 'world');
// console.log(scramble('rkqodlw',                 'world'));     // true
// console.log(scramble('cedewaraaossoqqyt', 'codewars'   ))      // true
// console.log(scramble('katas',                   'steak'));     // false
// console.log(scramble('scriptjavx',        'javascript' ))      // false
// console.log(scramble('scriptingjava',     'javascript' ))      // true
// console.log(scramble('scriptsjava',       'javascripts'))      // true
// console.log(scramble('javscripts',        'javascript' ))      // false
// console.log(scramble('jscripts',          'javascript' ))      // false
// console.log(scramble('aabbcamaomsccdd',   'commas'     ))      // true
// console.log(scramble('commas',            'commas'     ))      // true
// console.log(scramble('sammoc',            'commas'     ))      // true

///////___************************************************************___///////

function persistenceRedo(num) {
  let result = 0;
  while (num > 9) {
    num = Array.from(num.toString(), Number).reduce((acc, n) => acc * n);
    // console.log(num);
    result++;
  }
  return result;
  // return console.log(result);
}

//  NOTES: mostly completed the task but needed halp at the en all the right ideas but in tye wrong order.
//  no code wrote first time but needed help to get to work

// persistenceRedo(999);
// console.log(persistenceRedo(35)); // =>  2
// console.log(persistenceRedo(39)); // =>  3
// console.log(persistenceRedo(4));   // =>  0
// console.log(persistenceRedo(25));  // =>  2
// console.log(persistenceRedo(999)); // =>  4

///////___************************************************************___//////

function singleNumberRedo(num) {}

// singleNumberRedo(35);
// console.log(singleNumberRedo(35)); /// =>  5
// console.log(singleNumberRedo(39)); /// =>  4
// console.log(singleNumberRedo(4)); //// =>  4
// console.log(singleNumberRedo(25)); /// =>  0
// console.log(singleNumberRedo(999)); // =>  2
// console.log(singleNumberRedo(52562)); // =>  2

///////___************************************************************___//////

function compRedo(array1, array2) {
  if (!array1 || !array2 || array1.length !== array2.length) return false;
  const arr1 = array1.sort((a, b) => a - b);
  const arr2 = array2.map((n) => Math.sqrt(n)).sort((a, b) => a - b);
  // console.log(arr1);
  // console.log(arr2);

  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
}

// Test cases
const compArr11 = [121, 144, 19, 161, 19, 144, 19, 11];
const compArr22 = [121, 14641, 20736, 361, 25921, 361, 20736, 361];
const compArr33 = [121, 14641, 20736, 361, 25921, 361, 20736, 484];
const compArr44 = [784, 14641, 20736, 361, 53824, 361, 529, 484];
4;
const compArr55 = [];
const compArr66 = null;

compRedo(compArr11, compArr22);
// console.log(compRedo(compArr11, compArr22)); // true
// console.log(compRedo(compArr11, compArr33)); // false
// console.log(compRedo(compArr11, compArr44)); // false
// console.log(compRedo(compArr11, compArr55)); // false
// console.log(compRedo(compArr11, compArr66)); // false

///////___************************************************************___//////

function inArrayRedo(arr1, arr2) {
  const result = [];
  arr2.filter((subWrd) => {
    if (arr1.some((str) => str.includes(subWrd))) {
      result.push(subWrd);
    }
  });
  result.sort();
  return result;
}

const inArrayWrds1 = ['lively', 'alive', 'harp', 'sharp', 'armstrong'];

const check11 = ['xyz', 'live', 'strong']; // [live, strong]
const check22 = ['live', 'strong', 'arp']; // ["arp", "live", "strong"]
const check33 = ['tarp', 'mice', 'bulls']; // []

// console.log(inArrayRedo(inArrayWrds1, check11));
// console.log(inArrayRedo(inArrayWrds1, check22));
// console.log(inArrayRedo(inArrayWrds1, check33));
// inArrayRedo(inArrayWrds, check11);

///////___************************************************************___//////
///////_______________________________MEDIUM_____________________________//////

function decode(code, n) {
  // Convert n to a string to get its digits
  // const nStr = n.toString();
  const nLength = nStr.length;
  // console.log(nLength);

  // Initialize an empty string to store the decoded message
  let decodedMessage = '';

  // Loop through the code array
  for (let i = 0; i < code.length; i++) {
    // Get the corresponding digit from n (use modulo to repeat digits)
    const digit = parseInt(nStr[i % nLength]);
    // console.log(digit);

    // Decode the character
    const charCode = code[i] - digit;
    // console.log(charCode);
    const decodedChar = String.fromCharCode(charCode + 96); // 'a' is 97 in ASCII
    // console.log(decodedChar);
    // Append to the decoded message
    decodedMessage += decodedChar;
  }

  return decodedMessage;
}

// console.log(decode([20, 12, 18, 30, 21], 1939)); // Output: "scout"
// console.log(decode([14, 10, 22, 29, 6, 27, 19, 18, 6, 12, 8], 1939)); // Output: "masterpiece"

///////___************************************************************___//////
