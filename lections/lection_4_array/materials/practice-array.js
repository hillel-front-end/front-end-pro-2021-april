
// ------ practice (two-dimensional array) ------ 


/*

1)  В двумерном массиве A размером n(рядов) на m(столбцов). Заполнить случайными числами.
    1. Найти ряд, где сумма элементов наименьшая
    2. Найти ряд, где сумма элементов найбольшая
    3. Поменять ряды местами (1 и 2 пункт)

    
*/

var countRow = 3;
var countColumn = 3;
var mass = new Array(countRow);


for(var i = 0; i < countRow; i++) {
  mass[i] = new Array(countColumn);

  for(var j = 0, row = mass[i]; j < countColumn; j++) {
    mass[i][j] = Math.round(Math.random() * 10);
  }
}


var maxRowIndex = 0;
var minRowIndex = 0;


var maxSum = 0;
var minSum = 0;

// var sums = []

for(var k = 0; k < mass.length; k++) {
    for(var f = 0, sum = 0; f < mass[0].length; f++) {
        // console.log(k , 'k --- row', f, ' --- column');

        // console.log(mass[k][f], 'mass[k][f]');

        sum += mass[k][f];
    }

    // sums.push(sum);

    if (k === 0) {
        maxSum = sum;
        minSum = sum;
    }


    if (sum >= maxSum) {
        maxSum = sum;
        maxRowIndex = k;
    }

    if (sum <= minSum) {
        minSum = sum;
        minRowIndex = k;
    }

    console.log('row -->', k, 'sum ===', sum);
}



console.log('max row sum --> ', maxRowIndex);
console.log('min row sum --> ', minRowIndex);

// console.log(mass, 'mass');


var swap = mass[minRowIndex];
mass[minRowIndex] = mass[maxRowIndex];
mass[maxRowIndex] = swap;


console.log(mass, 'mass');