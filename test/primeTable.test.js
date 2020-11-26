'use strict'

const { expect } = require('chai');

const primeTableFuncs = require('../Primetable.js');
const prime = primeTableFuncs.prime;
const table = primeTableFuncs.table;
const primeList = primeTableFuncs.primeList;
const primeTable = primeTableFuncs.primeTable;



describe.only('check if number is a Prime', function () {

  it('should return true if given a prime number', function () {
    expect(prime(2)).be.true;
    expect(prime(5)).be.true;
    expect(prime(1)).be.false;
    expect(prime(10)).be.false;
    expect(prime(5025)).be.false;
    expect(prime(89)).be.true;
  });

  it('should only acccept positive integers', function () {

  });



});
describe('create multiplication table', function () {

  it('should output a table of X+1 * X+1', function () {

  });


});

describe('create list of first n primes', function () {


  it('output should be of length n', function () {
  });

  it('output should be of length n', function () {
  });

  it('should  be performant and able to handle more than 20,000 primes', function () {
  });

});

describe('Create prime multiplication table', function () {
  
  it('should output a table of X+1 * X+1', function () {

  });

  it('should only acccept positive integers', function () {

  });



});