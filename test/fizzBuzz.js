var fizzBuzz = require('../fizzBuzz');
var expect = require('chai').expect;

describe('fizzBuzz', () => {
  it('returns number', () => {
    expect(fizzBuzz(2)).to.equal(2)
  })

  it('fizz when value is 3', () => {
    expect(fizzBuzz(3)).to.equal('fizz')
  })

  it('buzz when value is 5', () => {
    expect(fizzBuzz(5)).to.equal('buzz')
  })

  it('fizz when values is multiple of 3', () => {
    expect(fizzBuzz(6)).to.equal('fizz')
  })

  it('buzz when values is multiple of 5', () => {
    expect(fizzBuzz(10)).to.equal('buzz')
  })

  it('fizzBuzz when values is multiple 3 and 5', () => {
    expect(fizzBuzz(15)).to.equal('fizzBuzz')
  })
})
