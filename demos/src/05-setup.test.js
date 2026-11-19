// describe permite agrupar diferentes pruebas, es decir, diferentes test. Esto es útil para organizar el código y tenerlo más legible.
describe('Set', () => {

  // beforeAll se ejecuta antes de todos los test, es decir, antes de ejecutar case 1 y case 2.
  beforeAll(() => {
    console.log('beforeAll');
    // Como por ejemplo levantar la base de datos antes de ejecutar los test.
  });

  afterAll(() => {
    console.log('afterAll');
    // Como por ejemplo cerrar la base de datos después de ejecutar los test.
  });

  beforeEach(() => {
    console.log('beforeEach');
    // Se ejecuta antes de cada test, es decir, antes de ejecutar case 1 y case 2.
  });

  afterEach(() => {
    console.log('afterEach');
    // Se ejecuta después de cada test, es decir, después de ejecutar case 1 y case 2.
  });

  test('case 1', () => {
    console.log('case 1');
    expect( 1 + 1 ).toBe(2);
  });
  test('case 2', () => {
    console.log('case 2');
    expect( 1 + 3 ).toBe(4);
  });

  describe('SubSet', () => {
    beforeAll(() => {
      console.log('beforeAll');
    });

    test('case 3', () => {
      console.log('case 3');
      expect( 1 + 5 ).toBe(6);
    });
    test('case 4', () => {
      console.log('case 4');
      expect( 1 + 7 ).toBe(8);
    });
  });
});
