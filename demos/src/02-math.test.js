const { sum, rest, multiply, divide} = require('./02-math')

test("add 1 + 3 should be 4", () => {
  const prueba = sum(1,3);
  expect(prueba).toBe(4);
});

test("rest 3- 1 should be 2", () => {
  const prueba = rest(3,1);
  expect(prueba).toBe(2);
})

test("multiply 2 * 3 should be 6", () => {
  const prueba = multiply(2,3);
  expect(prueba).toBe(6);
})

test("should divide", () => {
  const prueba = divide(6,2);
  expect(prueba).toBe(3);
  const prueba2 = divide(4,2);
  expect(prueba2).toBe(2);
})

test("should divide for 0", () => {
  const prueba = divide(6,0);
  expect(prueba).toBeNull();
  const prueba2 = divide(4,0);
  expect(prueba2).toBeNull();
})
