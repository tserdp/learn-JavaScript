// JavaScript code​​​​​‌​​​​​​​​​‌‌‌‌​‌​​​​‌‌‌‌‌​ below
// Write your answer here, and then test your code.
// Your job is to implement the findLargest() method.

// Change these boolean values to control whether you see 
// the expected answer and/or hints.
const showExpectedResult = false;
const showHints = false;

const bookTitle = "Alice's Adventures in Wonderland"
const bookAuthor = "Lewis Carroll";
const bookISBN = 9798369203415;
const bookPubYear = 1865;

// Your code goes here

let propName = "title";

class Book {
  constructor(title, author, ISBN, publicationYear) {
    this.title = title;
    this.author = author;
    this.ISBN = ISBN;
    this.publicationYear = publicationYear;
  }
}

let myBook = new Book(bookTitle, bookAuthor, bookISBN, bookPubYear);

let bookTitleValue = myBook[propName];

console.log(bookTitleValue);