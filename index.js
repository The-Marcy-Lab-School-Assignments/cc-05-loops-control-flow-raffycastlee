// 1.
const multiplesOfSixAndNine = () => {
  for (let i = 6; i <= 100; i+=3) {
    if (i%6==0 && i%9==0) {
      console.log(i);
    }
  }
}

// multiplesOfSixAndNine();

// 2.
const greaterNum = (a,b) => {
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
  if (typeof(a) != 'number' || typeof(b) != 'number' || typeof(c) != 'number' || typeof(d) != 'number') {
    return null;
  }

  const arr = [a,b,c,d];
  arr.sort((a,b) => a < b);
  let max = 0;
  let curr = 0;
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] == arr[i-1]) {
      curr++;
    } else {
      max = Math.max(max,curr);
      curr = 0;
    }
  }

  max = Math.max(max, curr);
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