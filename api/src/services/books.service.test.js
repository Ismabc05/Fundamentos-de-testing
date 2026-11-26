const BooksService = require('./books.service');

// Se crea un arreglo de libros falsos para simular la respuesta de la base de datos.
const fakeBooks = [
  {
    _id: '1',
    name: 'Harry Potter',
  },
  {
    _id: '2',
    name: 'Poltergeist',
  },
];

// MongoLinStub tienes los metodos que contiene el servicio booksservice.
const MongoLinStub = {
  getAll: () => [...fakeBooks],
  create: () => {},
};

// Cuando se llama a mongoLib, se va a llamar al mock MongoLinStub.
jest.mock('../lib/mongo.lib', () => jest.fn().mockImplementation(() => MongoLinStub));

describe('Test for books services', () => {
  let booksService;
  beforeEach(() => {
    booksService = new BooksService();
    // Limpiar los mocks antes de cada prueba para evitar interferencias entre pruebas.
    jest.clearAllMocks();
  });

  describe('Test for getBooks method', () => {
    test('should call the getAll method', async () => {
      // Arrange
      // Act
      const books = await booksService.getBooks();
      console.log(books);
      // Assert
      expect(books.length).toEqual(2);
    });
  });
  describe('Test for getBooks method', () => {
    test('should call the getAll method', async () => {
      // Arrange
      // Act
      const books = await booksService.getBooks();
      console.log(books);
      // Assert
      expect(books[1].name).toEqual('Poltergeist');
    });
  });
});
