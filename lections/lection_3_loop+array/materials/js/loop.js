//  --- > &&
// -- > ||
// null, NaN, undefined, "", false 

//-------------------- loop -----------------


// 4! == 1 * 2 * 3 * 4 * 5 //24


var factorial = 1;
var step = 1;

// factorial = factorial * 1;
// factorial = factorial * 2;
// factorial = factorial * 3;
// factorial = factorial * 4;

console.log(factorial, 'factorial');


var factorial = 1;

factorial = factorial * step++; 
factorial = factorial * step++; 
factorial = factorial * step++; 
factorial = factorial * step++; 

console.log(factorial, 'factorial');

// ----------------- loop ---------------

var index = 1;
var factorial = 1;
var max = 4;// (1)

// while(index <= max) { // true (2)
//     //body

//     factorial = factorial * index; (3)


//     index++; (4)
// }


// for(1; 2; 4) {
//  3
// }


// 1 => 2(true) => 3
// 4 =>  2(true) => 3
// 4 =>  2(true) => 3
// 4 =>  2(true) => 3

for(var i = 1, fact = 1; i <= 4 ; i++) {
    // console.log(i, 'i');

    // console.log(j, 'j');
    fact = fact * i; //(3)
}


console.log(fact, 'fact');
    



// =========

var index = 0;


// do {

//     console.log(index, 'index do');

//     index++;
// } while(index < 4)


// do {
//     var value = prompt('input number');

//     console.log(value, 'value');

// } while(!value || isNaN(value)) // true || false

// value ==> Bolean(null) => !false => true
// value ===> Boolean(123) => !true => false
