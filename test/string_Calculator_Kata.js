var calculadoraKata = require('../string_Calculator_Kata.js');
var expect = require('chai').expect;


describe.only('Calculadora Kata', () => {
  it('When empty string return 0 ', () => {
    expect(calculadoraKata(' ')).to.equal(0)
  });

  it('When string have 1 number return this number', () => {
    expect(calculadoraKata('1')).to.equal(1)
  });

  it('When string have 2 number returns soma this numbers', () => {
    expect(calculadoraKata('1,2')).to.equal(3)
  });

  it('Quando enviado mais de dois numeros', () => {
    expect(calculadoraKata('1,2,3')).to.equal('invalido')
  });

  it.skip('Quando enviado letras deve informar entrada invalida', () => {
    expect(calculadoraKata('a')).to.equal('invalido')
  });
});
