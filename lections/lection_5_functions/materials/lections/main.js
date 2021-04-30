// /*
//   Lection 6 - Functions
//     * examp func declaration
//     * examplele func expression
//     * use/call func
//     * use/call func without args
//     * use/call func with args
//     * arguments
//     * callback
// */

// 1 + '2' = '12'
// 1 * '2' = 2

// true + true ==> 1 + 1 = 2
// arr = [1]; 

// arr[arr.length] = 2

/// ------------------------------------- function ---------------------

//  ----- DRY ---



// toDo();


function toDo() { // function declaration
   // body
   console.log('to do something');
}

// toDo();

// toDo();
// toDo();
// toDo();

// for(var i = 0; i < 5; i++) {
//    toDo();
// }


// console.log(toDoSecond, 'toDoSecond');

// toDoSecond();

var toDoSecond = function() {  // function expression
   // body
   console.log('to do second something');
};


toDoSecond();

console.log(toDoSecond, 'toDoSecond');

// toDoSecond(); // call
// toDoSecond();
// toDoSecond();
// toDoSecond();


//  ------------ IIFE (Immediately Invoked Function Expression) -------

(function() {
   // console.log('IIFE');
})();



(function() {
   var create = function() {
      // console.log('make candidate');
   };

   create();
})();



(function() {
   var create = function() {
      // console.log('make vacancies');
   };

   create();
})();


/// -------------

// console.log(alert, 'alert');

// alert();
// alert();
// alert();




function foo() {
 console.log('-- call function foo---')
//  foo2(); bad
}


function foo2() {
   console.log('-- call function foo2---')

   foo();
}


foo2();

// ----------------


// alert('Hello world');
// alert('Hello world --- 2');
// var arr = ['valera'];

function random(min, max) {
   return Math.round(Math.random() * (max - min) + min);
}

function arrayFiller(arr, size) { //   var arr =[]; var size = undefined
   // var arr = [];
   // return;
   arr = arr.slice() || []; 

   if (size === 0) return arr;

   arr = arr.slice() || []; //defualt value
   // size = size || 5;
   console.log(arr, 'arr from arrayFiller');


   for(var i = 0; i < size; i+= 1) {
      arr[i] = random(1, 50);
      // arr.push(Math.floor(Math.random() * 50));
   }

   console.log(arr, 'arr');

   return arr;
}

// arrayFiller([]);

// arrayFiller();
// console.log(arr, 'arr');
// console.log(i, 'i'); error


// var mass = [];
// var value = prompt('Hello');
// arrayFiller();
var arr = ['abc', 'aaa'];

// arr = arrayFiller(arr, 10);
// arr2 = arrayFiller([], 6);

// console.log(arr, 'arr');

//
// arrayFiller(mass, 6);

// console.log(arr, 'arr');


function sum(a, b, c, g) { // arguments = [1, 2, 3, 7, 10, 1, 1, 1, 1]
   // console.log(arguments, 'arguments');
   console.log(arguments, 'argums');

   for(var i = 0, sum = 0; i < arguments.length; i++) {
      // console.log(arguments[i], 'arg');
      sum += arguments[i];
   }
   // return a + b + c + g;

   return sum;
}


var result = sum(1, 2, 3, 7, 10, 1, 1, 1, 1);


var result = sum(1, 2, 3, 4, 5);

console.log(result, 'result');

// -----------------


var sum = function(a, b) {
   return a + b;
};


var mul = function(a, b) {
   return a * b;
};

var div = function(a, b) {
   return a / b;
}

function toDo(callback, a, b) {
   // console.log(callback, 'callback');
   console.log(callback(a, b));
}


toDo(sum, 10, 20);
toDo(mul, 5, 5);
toDo(div, 5, 5);