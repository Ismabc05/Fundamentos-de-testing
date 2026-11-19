// Se pueden llamar assertions o matchers. Sirven para saber que datos esperamos.

// Cuando trabajamos con objetos se usa toEqual.
test('test objeto', () => {
  const data = { name: 'John'};
  data.lastname = 'Doe';
  expect(data).toEqual({ name: 'John', lastname: 'Doe' });
});

test('test null', () => {
  const data = null;
  expect(data).toBeNull();
  expect(data).toBeDefined();
  expect(data).not.toBeUndefined();
});

test('test boolean', () => {
  expect(true).toEqual(true);
  expect(false).toEqual(false);
  expect(0).toBeFalsy();
  expect('').toBeFalsy();
});

test('test string', () => {
  expect('hello').toMatch(/hello/);
});

test('list array', () => {
  const list = [1, 2, 3];
  expect(list).toContain(2);
  expect(list).not.toContain(4);
});
