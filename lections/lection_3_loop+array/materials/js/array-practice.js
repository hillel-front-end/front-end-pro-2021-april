/*
  Задача - 3. Разсортировать положительные и отрицательные числа по разным массивам. 
   *   30 случайных чисел в деапазоне от -5 до 5 разсортировать по массивам А и В, где А - массив положительных чисел, 
        В - отрицательных.
  
   *   В массиве A найти min - значение, и max - значение. Min - max поменять местами.

*/


var arr = [-3, 5, -2, 6, 8, 10, -4];


var a = []; // 0
var b = [];


for(var i = 0, size = arr.length; i < size; i++) {
  var item = arr[i];

  if (item > 0) {
    a[a.length] = item;
  } else {
    b[b.length] = item;
  }
}


console.log(a, 'a');
console.log(b, 'b');



min = a[0], minIndex = 0;
max = a[0], maxIndex = 0;

//[5, 6, 8, 10] => min == 5, max === 10

for(var j = 1; j < a.length; j++) {
  console.log(a[j], 'a[j]');

  if (a[j] >= max) {
    max = a[j];
    maxIndex = j;
  }


  if (a[j] <= min) {
    min = a[j];
    minIndex = j;
  }
}

// console.log('--------------------------')
// console.log(min, 'min');
// console.log(minIndex, 'minIndex');
// console.log('--------------------------')
// console.log(max, 'max');
// console.log(maxIndex, 'maxIndex');



console.log(a[minIndex], 'a[minIndex]');
console.log(a[maxIndex], 'a[maxIndex]');

var save = a[minIndex];
a[minIndex] = a[maxIndex];
a[maxIndex] = save;

console.log(a, 'a');