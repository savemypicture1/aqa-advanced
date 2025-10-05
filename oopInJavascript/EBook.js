import { Book } from "./Book.js";

export class EBook extends Book {
  constructor(title, author, year, format) {
    super(title, author, year);
    this.fileFormat = format;
  }

  printInfo() {
    console.log(
      `Title: ${this._title}, Author: ${this._author}, Year: ${this._year}, Format: ${this._fileFormat}`
    );
  }

  get fileFormat() {
    return this._fileFormat;
  }

  set fileFormat(format) {
    const validFormats = [".pdf", ".epub"];
    if (
      typeof format !== "string" ||
      !validFormats.includes(format.toLowerCase())
    ) {
      throw new Error(
        `Invalid format. Supported formats are: ${validFormats.join(", ")}`
      );
    }
    this._fileFormat = format.toLowerCase();
  }

  static createFromBook(book, format) {
    if (!(book instanceof Book)) {
      throw new Error("First argument must be an instance of Book");
    }
    return new EBook(book.title, book.author, book.year, format);
  }
}
