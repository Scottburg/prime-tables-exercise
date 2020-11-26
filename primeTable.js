'use strict'

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


  if (!Array.isArray(arr)) {throw new Error("Only Arrays of Numbers")};
  const maxDigits = ("" + (arr[arr.length-1] ** 2)).length;
  const resArr = Array.from(Array(arr.length + 1), x => new Array(arr.length + 1));
  const firstRow = arr.map(el => (""+el).padStart(maxDigits, " "));


  resArr[0] = [" ".padStart(maxDigits, " "), ...firstRow];

  for(let i = 1; i < resArr.length; i++){
  resArr[i][0] = ("" + resArr[0][i]).padStart(maxDigits, " ");

    for(let j = 1; j < resArr[i].length; j++){

      resArr[i][j] = ("" + (resArr[0][j] * resArr[i][0])).padStart(maxDigits, " ")
    } 
  };
  resArr.forEach((arr) => console.log(arr.join('|')));
};


function createPrimeTable(x){
if (x < 1 || !Number.isInteger(x)) {throw new Error("Only Positive Integers")};
const primeArr = createPrimeList(x)
return(createTable(primeArr));
};


exports.prime = checkifPrime;
exports.primeList = createPrimeList;
exports.table = createTable;
exports.primeTable = createPrimeTable;

if (process.mainModule.filename === __filename){
      createPrimeTable(Number(process.argv[2]));
      createPrimeTable(5)

};
