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
  test('should be overweight level 1', () => {
    person.weight = 85;
    const imc = person.calcIMC();
    expect(imc).toBe('overweight level 1');
  });
  test('should be overweight level 2', () => {
    person.weight = 100;
    const imc = person.calcIMC();
    expect(imc).toBe('overweight level 2');
  });
  test('should be overweight level 3', () => {
    person.weight = 150;
    const imc = person.calcIMC();
    expect(imc).toBe('overweight level 3');
  });
  test('should be not found', () => {
    person.weight = -10;
    const imc = person.calcIMC();
    expect(imc).toBe('no found');
  });
  test('should be not found', () => {
    person.weight = 0;
    const imc = person.calcIMC();
    expect(imc).toBe('normal');
  });
});
