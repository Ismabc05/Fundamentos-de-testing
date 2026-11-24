const Person = require('./06-person');

describe('Person', () => {
  let person;
  // Arrange
  beforeEach(() => {
    person = new Person('John', 70, 1.8);
  });

  beforeAll(() => {
    console.log('Test completed');
  });
  test('should be down', () => {
    // Metodology AAA (Arrange, Act, Assert)
    // Arrange
    person.weight = 45;
    // Act
    const imc = person.calcIMC();
    // Assert
    expect(imc).toBe('down');
  });
  test('should be normal', () => {
    person.weight = 59;
    const imc = person.calcIMC();
    expect(imc).toBe('normal');
  });
  test('should be overweight', () => {
    person.weight = 80;
    const imc = person.calcIMC();
    expect(imc).toBe('overweight');
  });
});
