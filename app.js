const express = require('express');
const books = require('./data/books.json');

const app = express();
const PORT = 3000;

// 1. ruta para obtener todos los libros
// prueba: http://localhost:3000/all
app.get('/all', (req, res) => {
  res.json(books);
});

// 2. ruta para obtener el primer libro
// prueba: http://localhost:3000/first
app.get('/first', (req, res) => {
  res.json(books[0]);
});

// 3. ruta para obtener el último libro
// prueba: http://localhost:3000/last
app.get('/last', (req, res) => {
  res.json(books[books.length - 1]);
});

// 4. ruta para obtener el libro del medio (número 50 en el array)
// prueba: http://localhost:3000/middle
app.get('/middle', (req, res) => {
  const shakuntalaBook = books.find(book => book.title === "The recognition of Shakuntala");
  res.json(shakuntalaBook);
});

// 5. ruta para obtener el titulo del libro de dante alighieri
// prueba: http://localhost:3000/author/dante-alighieri
app.get('/author/dante-alighieri', (req, res) => {
  const danteBook = books.find(book => book.author === 'Dante Alighieri');
  res.json(danteBook.title);
});

// 6. ruta para obtener el pais del libro de charles dickens
// prueba: http://localhost:3000/country/charles-dickens
app.get('/country/charles-dickens', (req, res) => {
  const dickensBook = books.find(book => book.author === 'Charles Dickens');
  res.json(dickensBook.country);
});

// 7. ruta para obtener paginas y ano del libro de miguel de cervantes
// prueba: http://localhost:3000/year&pages/cervantes
app.get('/year&pages/cervantes', (req, res) => {
  const cervantesBook = books.find(book => book.author === 'Miguel de Cervantes');
  res.json({ 
    pages: cervantesBook.pages, 
    year: cervantesBook.year 
  });
});

// 8. ruta para obtener el nro de libros de españa
// prueba: http://localhost:3000/country/count/spain
app.get('/country/count/spain', (req, res) => {
  const spanishBooks = books.filter(book => book.country === 'Spain');
  res.json(spanishBooks.length);
});

// 9. ruta para obtener verdadero/falso si hay al menos un libro de alemania
// prueba: http://localhost:3000/country/at-least/germany
app.get('/country/at-least/germany', (req, res) => {
  const hasGermanBook = books.some(book => book.country === 'Germany');
  res.json(hasGermanBook);
});

// 10. ruta para obtener verdadero/falso  si todos los libros tienen más de 200 páginas
// prueba: http://localhost:3000/pages/all-greater/200
app.get('/pages/all-greater/200', (req, res) => {
  const allBooksHaveMoreThan200Pages = books.every(book => book.pages > 200);
  res.json(allBooksHaveMoreThan200Pages);
});

// iniciar el servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});

// exportar la app para testing
module.exports = app;

