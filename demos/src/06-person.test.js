const Person = require('./06-person');

describe('Person', () => {
  let person;
  beforeEach(() => {
    person = new Person('John', 70, 1.8);
  });
  test('should be down', () => {
    person.weight = 45;
    const imc = person.calcIMC();
    expect(imc).toBe('down');
  });
  test('should be normal', () => {
    person.weight = 59;
    const imc = person.calcIMC();
    expect(imc).toBe('normal');
  });
});
