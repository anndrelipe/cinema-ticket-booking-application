const sum = require("/home/andre-linux/Área de Trabalho/calculadora/functions/sum.js");

test('adds 1 + 2 equal to 3', () => {
    expect(sum(1,2)).toBe(3);
})