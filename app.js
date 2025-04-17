const express = require('express');
const books = require('./data/books.json');

const app = express();
const PORT = 3000;

// 1. Route to get all books
app.get('/all', (req, res) => {
  res.json(books);
});

// 2. Route to get the first book
app.get('/first', (req, res) => {
  res.json(books[0]);
});

// 3. Route to get the last book
app.get('/last', (req, res) => {
  res.json(books[books.length - 1]);
});

// 4. Route to get the middle book (number 50 in the array)
app.get('/middle', (req, res) => {
  const shakuntalaBook = books.find(book => book.title === "The recognition of Shakuntala");
  res.json(shakuntalaBook);
});

// 5. Route to get ONLY THE TITLE of Dante Alighieri's book
app.get('/author/dante-alighieri', (req, res) => {
  const danteBook = books.find(book => book.author === 'Dante Alighieri');
  res.json(danteBook.title);
});

// 6. Route to get ONLY THE COUNTRY of Charles Dickens' book
app.get('/country/charles-dickens', (req, res) => {
  const dickensBook = books.find(book => book.author === 'Charles Dickens');
  res.json(dickensBook.country);
});

// 7. Route to get PAGES AND YEAR of Miguel de Cervantes' book
app.get('/year&pages/cervantes', (req, res) => {
  const cervantesBook = books.find(book => book.author === 'Miguel de Cervantes');
  res.json({ 
    pages: cervantesBook.pages, 
    year: cervantesBook.year 
  });
});

// 8. Route to get THE NUMBER OF BOOKS from Spain
app.get('/country/count/spain', (req, res) => {
  const spanishBooks = books.filter(book => book.country === 'Spain');
  res.json(spanishBooks.length);
});

// 9. Route to get TRUE/FALSE if there is at least one book from Germany
app.get('/country/at-least/germany', (req, res) => {
  const hasGermanBook = books.some(book => book.country === 'Germany');
  res.json(hasGermanBook);
});

// 10. Route to get TRUE/FALSE if all books have more than 200 pages
app.get('/pages/all-greater/200', (req, res) => {
  const allBooksHaveMoreThan200Pages = books.every(book => book.pages > 200);
  res.json(allBooksHaveMoreThan200Pages);
}); 
