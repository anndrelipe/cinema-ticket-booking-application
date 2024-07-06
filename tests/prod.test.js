const prod = require('/home/andre-linux/Área de Trabalho/calculadora/functions/prod.js');

test('multiply 6 * 4 * 3 equals to 72', () => { 
    expect(prod(6,4,3)).toBe(72);
 })