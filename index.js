// 1.
const multiplesOfSixAndNine = () => { // can start at 6, increment by 3
  // because 6 and 9 is divisible by 3 anyway
  for (let i = 6; i <= 100; i+=3) {
    if (i%6==0 && i%9==0) {
      console.log(i);
    }
  }
}

// multiplesOfSixAndNine();

// 2.
const greaterNum = (a,b) => {
  // disqualify any non-numbers
  if (typeof(a) != 'number' || typeof(b) != 'number') {
    return null;
  }

  if (a == b) {
    return "both integers are equal";
  } else {
    return (a > b) ? a : b;
  }
}

// console.log(greaterNum(10, 7)) //returns 10
// console.log(greaterNum(1.14, 1.14)) //returns "both integers are equal"
// console.log(greaterNum("21", 21)) //returns null
// console.log(greaterNum("21", "21")) //returns null

// 3.
const sumOfFourAndSix = () => {
  // can start at 4 and increment by 2
  // because 4 and 6 is divisible by 2!
  let sum = 0;
  for (let i = 4; i <= 1000; i+=2) {
    if (i%4==0 && i%6==0) {
      sum += i;
    }
  }

  return sum;
}

// console.log(sumOfFourAndSix()) //returns 41832

// 4.
const oddAndEvenToN = (n) => {
  for (let i = 0; i <= n; i++) {
    console.log((i%2 == 0) ? `${i} is even` : `${i} is odd`);
  }
}

// oddAndEvenToN(5)

// 5.
const sumOfNotDivisibleByTen = () => {
  let sum = 0;
  for (let i = 0; i <= 1000; i++) {
    if (i%10 == 0) { continue ;}
    sum += i;
  }
  return sum;
}

// console.log(sumOfNotDivisibleByTen()) //returns 450000

// 6.
const greaterNums = (a,b,c,d) => {
  // disqualify non-numbers
  if (typeof(a) != 'number' || typeof(b) != 'number' || typeof(c) != 'number' || typeof(d) != 'number') {
    return null;
  }

  // put args in an array and sort them
  const arr = [a,b,c,d];
  arr.sort((a,b) => a < b);

  // initialize important counters
  let max = 0;
  let curr = 0;

  // scan the array every 2 numbers
  for (let i = 1; i < arr.length; i++) {
    // if the adjacent numbers are equal
    // +1 to current/temporary counter
    if (arr[i] == arr[i-1]) {
      curr++;
    // if the adjacent numbers are NOT equal
    // since the array is sorted, we can
    // reset the current/temporary counter
    // and update the **max** counter if applicable
    } else {
      max = Math.max(max,curr);
      curr = 0;
    }
  }

  /*
    SAMPLE VISUALIZATION:

    ===== EXAMPLE 1 =====
    input: let nums = [3,2,1,2]
               ->> sort <<--
               nums = [1,2,2,3]
    output: "two integers are equal"

    for loop:
        at i = 0: (max = 0, curr = 0)
            [1,2,2,3]
             ^ ^
            NOT equal! so update max and reset curr
            max  = Math.max(max,curr)
                 = Math.max(0,0)
                 = 0
            curr = 0
        at i = 1: (max = 0, curr = 0)
            [1,2,2,3]
               ^ ^
            equal! so update curr
            curr = curr + 1
                 = 0 + 1
                 = 1
        at i = 2: (max = 0, curr = 1)
            [1,2,2,3]
                 ^ ^
            NOT equal! so update max and reset curr
            max  = Math.max(max, curr)
                 = Math.max(0, 1)
                 = 1
            curr = 0


    ===== EXAMPLE 2 =====
    input: let nums = [1,1,5,5]
               ->> sort <<--
               nums = [1,1,5,5]
    output: "two integers are equal"

    for loop:
        at i = 0: (max = 0, curr = 0)
            [1,1,5,5]
             ^ ^
            equal! so update curr
            curr = curr + 1
                 = 0 + 1
                 = 1
        at i = 1: (max = 0, curr = 1)
            [1,1,5,5]
               ^ ^
            NOT equal! so update max and reset curr
            max  = Math.max(max, curr)
                 = Math.max(0, 1)
                 = 1
            curr = 0
        at i = 2: (max = 0, curr = 0)
            [1,1,5,5]
                 ^ ^
            equal! so update curr
            curr = curr + 1
                 = 0 + 1
                 = 1
        ** we don't update max if we are at the
           end of the loop, so we also update max
           after the loop (as seen in next line) **

    ===== EXAMPLE 3 =====
    input: let nums = [1,1,1,1]
               ->> sort <<--
               nums = [1,1,1,1]
    output: "all integers are equal"

    for loop:
        at i = 0: (max = 0, curr = 0)
            [1,1,1,1]
             ^ ^
            equal! so update curr
            curr = curr + 1
                 = 0 + 1
                 = 1
        at i = 1: (max = 0, curr = 1)
            [1,1,1,1]
               ^ ^
            equal! so update curr
            curr = curr + 1
                 = 1 + 1
                 = 2
        at i = 2: (max = 0, curr = 2)
            [1,1,1,1]
                 ^ ^
            equal! so update curr
            curr = curr + 1
                 = 2 + 1
                 = 3
        ** we don't update max if we are at the
           end of the loop, so we also update max
           after the loop (as seen in next line) **
  */

  // for the case where all arguments are equal
  // sadly the loop above doesn't cover it!
  max = Math.max(max, curr);

  // based on what the max number of equal args are,
  // return the proper value!
  switch (max) {
    case 0:
      return Math.max(a,b,c,d);
    case 1:
      return "two integers are equal";
    case 2:
      return "three integers are equal";
    case 3:
      return "all integers are equal";
  }
}

// console.log(greaterNums(10, 7, 16, 80)) //returns 80
// console.log(greaterNums(1.14, 1.14, 5, 7)) //returns "two integers are equal"
// console.log(greaterNums(1.14, 1.14, 1.14, 7)) //returns "three integers are equal"
// console.log(greaterNums(1.14, 1.14, 1.14, 1.14)) //returns "all are equal"
// console.log(greaterNums("21", 21, 60, 3)) //returns null

// 7.
const multiplesOfFourAndSix = () => {
  res = [];
  for (let i = 4; i <= 100; i+=2) {
    res.push(i);
  }

  return res;
}

// console.log(multiplesOfFourAndSix()) // returns [12, 24, 36, 48,60, 72, 84, 96]

// 8.
const countMultiplesOfTwo = (arr) => {
  res = [];
  arr.forEach((num) => {
    if (num%2 == 0) { res.push(num); }
  });

  return res;
}

// console.log(countMultiplesOfTwo([1,2,3,4,5,6,7,8])); // returns 2,4,6,8