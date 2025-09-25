function kurwa(num) {
  console.log(num);
  if (num <= 0) {
    return;
  }
  kurwa(num - 1);
}

kurwa(5);
