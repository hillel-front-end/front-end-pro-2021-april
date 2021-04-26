// Массив [1, 2, 3, 4, 5] вывести на экран через разделитель ‘_’

mass = [1, 2, 3, 4, 5, 6]

document.write(mass.join('_'));


// Организовать вывод массива [6,7,2,3,5,7] в виде списка, при помощи тегов ul-li


// document.write('<ul>');


// for(var i = 0, size = mass.length; i < size; i++) {
//     document.write('<li>' +  mass[i] +'</li>');
// }

// document.write('</ul>');
 
// document.write('<ul><li>');
// // document.write(mass.join('</li><li>'));
// document.write('</li></ul>');

//<ul><li> 1</li><li> 2 </li><li> </li></ul>


// ------------------------------
// В массиве [1,2,3,4,5,6] вырезать центральный элемент, если длина массива парная 
// – вырезать два элемента, которые можно считать центральными


var arr = [1, 2, 3, 4, 5, 6];
var count = arr.length % 2 === 0 ? 2 : 1;
var position = Math.ceil(arr.length / 2) - 1; // 2.5 -> 3 - 1 = 2


arr.splice(position, count);

console.log(arr, 'arr');
// console.log(position, 'position');


// console.log(count, 'count');