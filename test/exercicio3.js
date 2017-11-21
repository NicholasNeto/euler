var findClosestPrimo = require("../exercicios3")
var expect = require('chai').expect;

describe('findNumberPrimos', () => {
  it('when 6 returns 5', () => {
    var number = 6
    expect(findClosestPrimo(number)).to.be.equal(3)
  });

  it('when 5 returns 5', () => {
    var number = 5
    expect(findClosestPrimo(number)).to.be.equal(number)
  });

  it('when 4 returns 3', () => {
    var number = 4
    expect(findClosestPrimo(number)).to.be.equal(2)
  });

  it('when 3 returns 3 ', () => {
    var number = 3
    expect(findClosestPrimo(number)).to.be.equal(number)
  });

  it('when 2 returns 2 ', () => {
    var number = 2
    expect(findClosestPrimo(number)).to.be.equal(number)
  });
});
