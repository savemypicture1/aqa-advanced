import { Book } from "./Book.js";
import { EBook } from "./EBook.js";

// task 1
const beginnerBook = new Book("JavaScript for Beginners", "John Doe", 2020);
const advancedBook = new Book("Advanced JavaScript", "Jane Smith", 2021);
console.log("Books info:");
beginnerBook.printInfo();
advancedBook.printInfo();

// task 2
const cleanCodeEBook = new EBook("Clean Code", "Robert Martin", 2008, ".pdf");
const orwellEBook = new EBook("1984", "George Orwell", 1949, ".epub");
console.log("\nEBooks info:");
cleanCodeEBook.printInfo();
orwellEBook.printInfo();

// task 3
console.log("\nUpdated Book details:");
beginnerBook.title = "JavaScript for Beginners Updated";
beginnerBook.author = "John Doe Updated";
beginnerBook.year = 2021;
advancedBook.title = "JavaScript for Beginners Updated";
advancedBook.author = "John Doe Updated";
advancedBook.year = 2022;
cleanCodeEBook.title = "Clean Code Updated";
cleanCodeEBook.author = "Clean Code Updated";
cleanCodeEBook.year = 2010;
cleanCodeEBook.fileFormat = ".epub";
orwellEBook.title = "1984 Updated";
orwellEBook.author = "George Orwell Updated";
orwellEBook.year = 1950;
orwellEBook.fileFormat = ".pdf";
cleanCodeEBook.printInfo();
orwellEBook.printInfo();

// task 4
const oldest = Book.findOldestBook([
  beginnerBook,
  advancedBook,
  cleanCodeEBook,
  orwellEBook,
]);
console.log("\nOldest book:");
oldest.printInfo();

// task 5
const regularBook = new Book("JavaScript Guide", "Lorem Ipsum", 2018);
const ebook = EBook.createFromBook(regularBook, ".pdf");
console.log("\nEBook created from Book:");
ebook.printInfo();
