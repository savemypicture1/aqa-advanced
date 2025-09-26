function handleNum(num, onEven, onOdd) {
  num % 2 === 0 ? onEven() : onOdd();
}

const handleEven = () => console.log("number is even");
const handleOdd = () => console.log("number is odd");

handleNum(30, handleEven, handleOdd);
