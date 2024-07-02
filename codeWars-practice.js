'use strict';

const practiceContainter = function () {
  //////////////////////////////////////////////////______practice container
  //////////////////////////////////////////////////////////////////////////

  const arrForEach = [200, 450, -400, 3000, -650, -130, 70, 1300];
  const positive = [];
  const negative = [];

  const forEachTest = function (arr) {
    arr.forEach(function (mov, i) {
      mov > 0 ? positive.push(mov) : negative.push(mov);
    });
    console.log(`forEach(pos): ${positive}`);
    console.log(`forEach(deg): ${negative}`);
  };

  // forEachTest(arrForEach);

  //////////////////////////////////////////////////////////////////////////

  const forLet = function (n) {
    let stars = 1;
    let space = n - 1;

    const sp = ' ';
    const st = '*';

    for (let i = 0; i < n; i++) {
      console.log(sp.repeat(space) + st.repeat(stars) + sp.repeat(space));
      stars += 2;
      space--;
    }
  };
  // forLet(5);

  //////////////////////////////////////////////////////////////////////////

  //// ___ save to array___  / ___ forEach___  / ___ for (in)___

  const firstNoneRepeatLetter = function (wrd) {
    const letters = {};
    const result = [];

    wrd.split('').forEach(function (l) {
      if (letters[l]) {
        letters[l]++;
      } else {
        letters[l] = 1;
      }
    });

    for (const key in letters) {
      if (letters[key] === 1) {
        result.push(key);
      }
    }
    return result[0];
  };
  // console.log(firstNoneRepeatLetter('stress'));

  ///////////////////////////////////____ more info on for (of) and for(in) methods

  const letters = { s: 4, t: 1, r: 1, e: 2 };

  for (const key in letters) {
    // console.log(key); // Outputs: 's', 't', 'r', 'e'
    // console.log(letters[key]); // Outputs: 4, 1, 1, 2
  }

  const array = [4, 1, 1, 2];

  for (const value of array) {
    // console.log(value); // Outputs: 4, 1, 1, 2
  }
  //////////////////////////////////////////////////////////////////////////

  ///////////////////////////////////____ more info on for (of) and for(in) methods
  //////////////////////////////////____capitalizw words includes map slice charAt uppercase and lowerase

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

  //////////////////////////////////////////////////////////////////////////
  ///////// forEach some includes push new Set
  const mainArray = ['lively', 'alive', 'harp', 'sharp', 'armstrong'];
  const subArray = ['xyz', 'live', 'strong', 'live', 'strong', 'arp'];

  function inWordChech(arr1, arr2) {
    const result2 = [];
    subArray.some((subWrd) => {
      if (mainArray.some((mainWrd) => mainWrd.includes(subWrd))) {
        result2.push(subWrd);
      }
    });
    //  gets rid of duplicates
    return console.log([...new Set(result2)]);
  }

  // inWordChech(mainArray, subArray);

  // console.log(result2);
  // console.log([...new Set(result2)]);

  //////////////////////////////////////////////////////////////////////////
  ///////// some filter includes
  const numbers = [1, 2, 3, 4, 5];
  const hasEvenNums = numbers.some((num) => num % 2 === 0);
  // console.log(hasEvenNums);

  const words = ['duck', 'horse', 'fish', 'dog'];
  const wrd = 'do';

  const checkWrd = function (word, wordArray) {
    const result = wordArray.filter((arrWrd) => arrWrd.includes(word));

    if (result.length > 0) {
      console.log(...result);
    } else {
      return console.log('Word not in array.');
    }
  };

  // checkWrd(wrd, words);

  //////////////////////////////////////////////////////////////////////////
  //////////
  const forOfForInLoops = function (wrd) {
    const lettersOf = {};
    const lettersIn = {};

    const reduceWrd = wrd.split('').reduce((acc, l) => {
      acc[l] = (acc[l] || 0) + 1;
      return acc;
    }, {});
    console.log('Reduce:', reduceWrd);

    for (const l of wrd) {
      lettersOf[l] = (lettersOf[l] || 0) + 1;
    }
    console.log('For of: ', letters);

    for (const l in lettersOf) {
      lettersIn[l] = (lettersIn[l] || 0) + 1;
    }
    console.log('For in: ', lettersIn);
  };

  // forOfForInLoops('ducks');
  // forOfForInLoops('stress');
  // forOfForInLoops('sausages');
  // forOfForInLoops('wheel');

  //////////////////////////////////////////////////////////////////////////

  const space = 4;
  const stars = 3;
  // console.log('-'.repeat(space) + '*'.repeat(stars) + '-'.repeat(space));

  //////////////////////////////////////////////////////////////////////////

  const reduceTest = function (num) {
    return num
      .toString()
      .split('')
      .reduce((acc, num) => acc * +num, 1);
  };
  // console.log(reduceTest(52458));

  //////////////////////////////////////////////////////////////////////////

  function testScramble(str1, str2) {
    const objOne = str1.split('').reduce((acc, char) => {
      acc[char] = (acc[char] || 0) + 1;
      return acc;
    }, {});

    console.log(objOne);
  }
  // testScramble('rkqodlw', 'world');

  //////////////////////////////////////////////////////////////////////////

  function testComp(array1, array2) {
    if (!array1 || !array2) return false;
    const arr1 = array1.sort((a, b) => a - b);
    const arr2 = array2.sort((a, b) => a - b);
    const arrSqrd = arr1.map((v) => v ** 2)
    const check = arrSqrd.every((v, i) => v === arr2[i]);

    console.log(arr1);
    console.log(arr2);
    console.log(arrSqrd);
    return check;
  }

  // console.log(testComp(compArr11, compArr22)); // true
  // console.log(testComp(compArr11, compArr33)); // false
  // console.log(testComp(compArr11, compArr44)); // false
  // console.log(testComp(compArr11, compArr55)); // false
  // console.log(testComp(compArr11, compArr66)); // false
  //////////////////////////////////////////////////////////////////////////

  //////////////////////////////////////////////////////////////////////////
  /////////////////////////////////////////////////______practice container
};
practiceContainter();
