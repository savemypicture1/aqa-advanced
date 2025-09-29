const numbers = [2, -5, 0, 7, -3, 0, 10, -8];
let positiveCount = 0;
let negativeCount = 0;
let zeroCount = 0;

for (const num of numbers) {
  if (num > 0) {
    positiveCount++;
  } else if (num < 0) {
    negativeCount++;
  } else {
    zeroCount++;
  }
}

console.log("Positive count:", positiveCount);
console.log("Negative count:", negativeCount);
console.log("Zero count:", zeroCount);
