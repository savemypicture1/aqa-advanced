const numbers = [1, 2, 3, 4, 5];

const multiplyByIndex = (num, index) => num * index;
const mutatedNumbers = numbers.map(multiplyByIndex);

console.log("Mutated array:", mutatedNumbers);
