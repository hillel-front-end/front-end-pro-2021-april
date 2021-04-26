/*
  Lection 4 - Array
    * Двумерные массивы
    * Зубчатые массива\ Ступенчатые массивы
*/

var mass = [];


// var twoDemArray = [
//   [1, 2, 3, 4],
//   [5, 6, 7, 8],
//   [5, 6, 7, 8]
// ];

// console.log(twoDemArray, 'twoDemArray');



/// ------ read ----------
// var row = twoDemArray[0];

// console.log(row, 'row');
// console.log(row[2], 'row[2]');


// console.log(twoDemArray[1][2], 'twoDemArray[0][2]');



var size = 3;
var mass = new Array(size);


for(var i = 0; i < size; i++) {
  mass[i] = new Array(size);

  for(var j = 0, row = mass[i]; j < size; j++) {
    mass[i][j] = Math.round(Math.random() * 10);
  }
}

console.log(mass, 'mass');