console.log("connected");

/*
Exercise 1
Make 3 functions:

Function that takes a number through a parameter and returns how many digits that number has 
Function that takes a number through a parameter and returns if its even or odd
Function that takes a number through a parameter and returns if its positive or negative
Create a function that takes a number through a parameter and calls all three functions for the 
number that was passed.
 It should show the results in the console.

Ex:
Code: getNumberStats(-25); Console: 2 Digits, Odd, Negative
*/


// FIRST FUNCTION
function numberOfDigits(number) {
    let i = 0;
    if (number >= 1) ++i;
  
    while (number / 10 >= 1) {
      number /= 10;
      ++i;
    }
  
    return i;
  }
  
  console.log(numberOfDigits(5794638));

  //SECOND FUNCTION
  function evenOrOdd(num) {
   
    if (num  % 2 === 0) {
      return `${num} is even number`;
    } else {
      `${num} is odd number`
        } 
      }
     
  console.log(evenOrOdd(6));
  
  //THIRD FUNCTION

  function positiveOrNegative(someNumber){
    if (Math.sign(someNumber) > 0) {
      return ` the number ${someNumber} is positive`
    } else {
      return `the number ${someNumber} is negative`
    }
  }
  console.log(positiveOrNegative(6));

  // LAST FUNCTION

  function threeInOne(oneNumber){
   return `${numberOfDigits(oneNumber)} digits ${evenOrOdd(oneNumber)} ${positiveOrNegative(oneNumber)}`;
  }

  console.log(threeInOne(70));