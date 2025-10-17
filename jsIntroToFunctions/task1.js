const width = 5;
const height = 10;

// Function Declaration
function calculateAreaDeclaration(width, height) {
  return width * height;
}

// Function Expression
const calculateRectangleAreaExpression = function (width, height) {
  return width * height;
};

// Arrow Function Expression
const calculateRectangleAreaArrow = (width, height) => {
  return width * height;
};

// Concise Arrow Function Expression
const calculateRectangleAreaConciseArrow = (width, height) => width * height;

console.log("Function Declaration:", calculateAreaDeclaration(width, height));
console.log(
  "Function Expression:",
  calculateRectangleAreaExpression(width, height),
);
console.log(
  "Arrow Function Expression:",
  calculateRectangleAreaArrow(width, height),
);
console.log(
  "Concise Arrow Function Expression:",
  calculateRectangleAreaConciseArrow(width, height),
);
