// ~~ is the double NOT bitwise operator, used as a shorthand for Math.floor

// solution from ktarriba9

// PROBLEM: "Given two non-negative integers low and high. Return the count of odd numbers between low and high (inclusive)."

let countOdds = function (low, high) {
  let res = ~~((high - low) / 2);
   //  The counter variable equals the difference between high and low divided by two, 
       or the number of odd (or even) numbers between them.
  if (low % 2 != 0 || high % 2 != 0) {
    res += 1;
  }
  // if either the low or the high number is odd, there is one more odd number between the high and low,
       since the problem specifies that the count should be inclusive.
  return res;
};
