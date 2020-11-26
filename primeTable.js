'use strict'

/* TO DO - s
Create a function that takes an array of numbers and from this output a multiplication list to the console
Create a function that puts all the functions together


Consistent formatting on the table. 

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



function createPrimeList(x){

if (x < 1 || !Number.isInteger(x)) {throw new Error("Only Positive Integers")}
const resArr = [2];
let primePos = 1;
let num = 1;

while (primePos < x) {
  num = num + 2;

  if (checkifPrime(num)){
    resArr.push(num);
    primePos++;
  }};

return resArr;

};


function createTable(arr){

const resArr = Array.from(Array(arr.length + 1), x => new Array(arr.length + 1));
// console.log(resArr);

resArr[0] = [" ", ...arr];

for(let i = 1; i < resArr.length; i++){
resArr[i][0] = resArr[0][i];

  for(let j = 1; j < resArr[i].length; j++){

    resArr[i][j] = (resArr[0][j] * resArr[i][0]);
  } 
};
resArr.forEach((arr) => console.log(arr.join('|')));
};


function createPrimeTable(n){};


exports.prime = checkifPrime;
exports.primeList = createPrimeList;
exports.table = createTable;
exports.primeTable = createPrimeTable;

if (process.mainModule.filename === __filename){
  console.log(createTable([2,3,5,7,11,13]));
};
