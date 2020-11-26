'use strict'

const { expect, should  } = require('chai');

const primeTableFuncs = require('../Primetable.js');
const prime = primeTableFuncs.prime;
const table = primeTableFuncs.table;
const primeList = primeTableFuncs.primeList;
const primeTable = primeTableFuncs.primeTable;



describe('checkIfPrime', function () {

  it('should return true if given a prime number', function () {
    expect(prime(2)).be.true;
    expect(prime(5)).be.true;
    expect(prime(1)).be.false;
    expect(prime(10)).be.false;
    expect(prime(5025)).be.false;
    expect(prime(89)).be.true;
  });

  it('should only acccept positive integers', function () {
    expect(()=> prime(-33)).to.throw(Error)
    expect(()=> prime("banana")).to.throw(Error)
    expect(()=> prime(12.27)).to.throw(Error)
  });



});
describe('create multiplication table', function () {

  it('should output a table of X+1 * X+1', function () {
    expect(false).be.true
  });

  it('should only acccept an array', function () {
    expect(()=> table(-33)).to.throw(Error)
    expect(()=> table("banana")).to.throw(Error)
    expect(()=> table(12.27)).to.throw(Error)
  });

});

describe('CreatePrimeList', function () {

  it('output should be an array of length n', function () {
    expect(primeList(10)).to.have.lengthOf(10);
    expect(primeList(1)).to.have.lengthOf(1);
    expect(primeList(9999)).to.have.lengthOf(9999);
  });

  it('should be performant and able to handle more than 20,000 primes', function () {
    expect(primeList(20000)).to.have.lengthOf(20000);
    expect(() => primeList(20000)).to.not.throw();
  });

  it('should be highly performant and able to handle more than 200,000 primes', function () {
    expect(primeList(200000)).to.have.lengthOf(200000);
    expect(() => primeList(200000)).to.not.throw();
  });

  it('should only acccept positive integers', function () {
    expect(()=> primeList(-33)).to.throw(Error)
    expect(()=> primeList("banana")).to.throw(Error)
    expect(()=> primeList(12.27)).to.throw(Error)
  });

});

describe('Create prime multiplication table', function () {

  it('should output a table of X+1 * X+1', function () {
    expect(false).be.true
  });

  it('should only acccept positive integers', function () {
    expect(()=> primeTable(-33)).to.throw(Error)
    expect(()=> primeTable("banana")).to.throw(Error)
    expect(()=> primeTable(12.27)).to.throw(Error)
  });



});