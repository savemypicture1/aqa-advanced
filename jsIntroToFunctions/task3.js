function checkOrder(available, ordered) {
  if (ordered === 0) {
    return "Your order is empty";
  }

  if (ordered > available) {
    return "Your order is too large, we don't have enough goods.";
  }

  return "Your order is accepted";
}

console.log("Case 1 (empty order):", checkOrder(10, 0));
console.log("Case 2 (too large):", checkOrder(10, 15));
console.log("Case 3 (accepted):", checkOrder(10, 5));
