export class Book {
  constructor(title, author, year) {
    this._title = title;
    this._author = author;
    this._year = year;
  }

  printInfo() {
    console.log(
      `Title: ${this._title}, Author: ${this._author}, Year: ${this._year}`
    );
  }

  get title() {
    return this._title;
  }

  get author() {
    return this._author;
  }

  get year() {
    return this._year;
  }

  set title(title) {
    if (typeof title !== "string" || title.trim() === "") {
      throw new Error("Title must be a non-empty string");
    }
    this._title = title;
  }

  set author(author) {
    if (typeof author !== "string" || author.trim() === "") {
      throw new Error("Author must be a non-empty string");
    }
    this._author = author;
  }

  set year(year) {
    if (typeof year !== "number") {
      throw new Error(
        "Year must be a number representing the publication year"
      );
    }
    this._year = year;
  }

  static findOldestBook(books) {
    if (!Array.isArray(books)) {
      throw new Error("Input must be a non-empty array of books");
    }
    if (books.length === 0) {
      throw new Error("Array must contain at least one book");
    }
    if (!books.every((book) => book instanceof Book)) {
      throw new Error("All elements must be instances of Book");
    }

    let oldest = books[0];

    for (const book of books) {
      if (book.year < oldest.year) {
        oldest = book;
      }
    }

    return oldest;
  }
}
