const number = 5;

for (let i = 1; i <= 10; i++) {
  const result = number * i;
  console.log(`${number} x ${i} = ${result}`);
}

let count = 1;

while (count <= 10) {
  const result = number * count;
  console.log(`${number} x ${count} = ${result}`);
  count++;
}
