function handleNum(num, isEven, is_Odd) {
  num % 2 === 0 ? isEven() : is_Odd();
}

const handleEven = () => console.log("number is even");
const handleOdd = () => console.log("number is odd");

handleNum(30, handleEven, handleOdd);
