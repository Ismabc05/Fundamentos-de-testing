const { generateManyBooks } = require('../fakes/book.fake');
const BooksService = require('./books.service');

const mockGetAll = jest.fn();

// Cuando se llama a mongoLib, se va a llamar al mock MongoLinStub.
jest.mock('../lib/mongo.lib', () => jest.fn().mockImplementation(() => ({
  getAll: mockGetAll,
  create: () => {},
})));

describe('Test for books services', () => {
  let booksService;
  // eslint-disable-next-line max-len
  // Se ejecuta antes de cada prueba para crear una nueva instancia de BooksService y limpiar los mocks.
  beforeEach(() => {
    booksService = new BooksService();
    jest.clearAllMocks();
  });

  describe('Test for getBooks method', () => {
    test('should call the getAll method', async () => {
      const fakeBooks = generateManyBooks(20);
      mockGetAll.mockResolvedValue(fakeBooks);
      const books = await booksService.getBooks();
      console.log(books);
      expect(books.length).toEqual(fakeBooks.length);
      expect(mockGetAll).toHaveBeenCalled();
      expect(mockGetAll).toHaveBeenCalledWith('books', undefined);
    });
  });
  describe('Test for getBooks method', () => {
    test('should call the getAll method', async () => {
      const fakeBooks = generateManyBooks(3);
      mockGetAll.mockResolvedValue(fakeBooks);
      const books = await booksService.getBooks();
      console.log(books);
      // Assert
      expect(books[0].name).toEqual(fakeBooks[0].name);
      expect(mockGetAll).toHaveBeenCalled();
      expect(mockGetAll).toHaveBeenCalledTimes(1);
    });
  });
});
