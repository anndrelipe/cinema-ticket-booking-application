const dif = require('/home/andre-linux/Área de Trabalho/calculadora/functions/dif.js');

test('4 - 5 equals to -1', () => {
    expect(dif(4,5)).toBe(-1);
});