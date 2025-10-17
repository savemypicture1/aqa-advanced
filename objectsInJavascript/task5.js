const users = [
  { name: "John", email: "john@example.com", age: 25, country: "Belgium" },
  { name: "Bob", email: "bob@example.com", age: 30, country: "Germany" },
  { name: "Anna", email: "anna@example.com", age: 35, country: "Canada" },
];

for (const { name, email, age, country } of users) {
  console.log(
    `Name: ${name}, Email: ${email}, Age: ${age}, Country: ${country}`,
  );
}
