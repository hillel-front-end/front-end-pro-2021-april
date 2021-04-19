/*
Lection 3 - Array
 * Math
 * [], [].length
 * Доступ по индексу
 * Обращение к первому/последнему элементу массива
 * Добавление элемента в массив
 * [].length = 20 || data[30] = 'foo'
 * Заполнения массива случайными числами
 * Пример - перебор
 * new Array()
 * 
 * Практика:
  - min, max (10 - 20),
*/


/*
  1. Math
  Math​.round() - возвращает число, округлённое к ближайшему целом
  Math.floor() - возвращает целое число, которое меньше или равно данному 
  Math.ceil() - округляет аргумент до ближайшего большего целого.
  Math.random() - получени случайного числа от 0 - 1
  Форумула получени случайного числа в диапазоне от min (включительно) до max (не включительно):
    Math.random() * (max - min) + min;
*/


console.log(Math.floor(1.5), 'floor');// 1
console.log(Math.ceil(1.5), 'ceil');// 2
console.log(Math.round(1.5), 'round');// 2
console.log(Math.random(), 'random');

var random = Math.random();
var round = Math.round(random);

console.log(round, 'round');


var max = 60;
var min = 10;

var random = Math.round(Math.random() * (max - min) + min);

console.log(random, 'random');


// --------------- Array ---------------


// var user = 'Valera' + ' Perty';


var mass = ['Valera', 'Pety', 'Alex', 'Foo', 'Foo - 2'];

console.log(mass, 'mass');
console.log(mass.length, 'mass length');

// ---------- read from array -------------

console.log(mass[0], 'always first');
console.log(mass[1], 'index === 1');
console.log(mass[2], 'index === 2');

var size = mass.length;

// console.log(mass[size - 1], size - 1, 'always last');



var array = [1, '2', false, null, undefined]; //bad practice

// console.log(array, 'array');

// ------------- write -----------

var arr = [1, 2, 3]; /// литерал ==> []


// arr.length = 13;
// console.log(arr.length, 'length before'); // 3

arr[9999] = 4;

// console.log(arr.length, 'length after'); 


// console.log(arr[500], 'arr');
// console.log(arr, 'arr');



/// ----------- diff create ------------
var arr = [];
arr.length = 4;


var mass = new Array(4);





// console.log(arr, 'arr');
// console.log(mass, 'mass');


// -------------

var mass = new Array(4, 5);// [4, 5]

// console.log(mass.length, 'length');


// ------------------ 



// for(var i = 0; i < mass.length; i++) {
//   console.log(mass[i], i,'i');
// }


var arr = [];
arr.length = 2;


// debugger;
// 3 -

for(var i = 3, size = arr.length; i < 10; i++) {
  arr[i] = Math.round(Math.random() * 60);
}


console.log(arr, 'arr');






