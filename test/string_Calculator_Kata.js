var calculadoraKata = require('../string_Calculator_Kata.js');
var expect = require('chai').expect;


describe('Calculadora Kata', () => {
  it.only('When empty string return 0 ', () => {
    expect(calculadoraKata(' ')).to.equal(0)
  });

  it.only('When string have 1 number return this number', () => {
    expect(calculadoraKata('1')).to.equal(1)
  });

  it.only('When string have 2 number returns soma this numbers', () => {
    expect(calculadoraKata('1,2')).to.equal(3)
  });
});
