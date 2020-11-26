'use strict'

/* TO DO -

Create primeChecking function that returns True or false if prime 
Create a function that outputs a list of the first N primes
Create a function that takes an array of numbers and from this output a multiplication list to the console
Create a function that puts all the functions together


Consistent formatting on the table. 
Prime list should work for 20,000+ Primes 
*/

function checkifPrime(num){
if (num < 1 || !Number.isInteger(num)) {throw new Error("Only Positive Integers")}
 
if (num === 2) {return true};
if (num === 1 || num % 2 === 0) return false; 

for (let i = 3; i <= Math.sqrt(num); i += 2) {
 if (num % i === 0) return false;
}
  return true;
};



function createPrimeList(x){};


function createTable(arr){};


function createPrimeTable(n){};


exports.prime = checkifPrime;
exports.primeList = createPrimeList;
exports.table = createTable;
exports.primeTable = createPrimeTable;
