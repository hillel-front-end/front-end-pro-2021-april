/* Lection - 7 (recursive) */
// function foo() {
//     foo();
// }


// foo();


function inter(array, i) {
    // debugger;
    i = i || 0;
    if (array.length === i) {
        return;
    }

    console.log(array[i], 'array[i]');
    inter(array, i + 1);
    console.log('*');
    // console.log(array[i], 'array[i]');
}


inter(['a1', 'b2', 'c3']);

console.log('***');

// --------------------------------------

// sum(5) // 5 + 4 + 3 + 2 + 1

function sum(n) {
    if (n === 1) {
        return 1;
    }

    return n + sum(n - 1);
}

var result = sum(3); // 3 + 2 + 1 === 6;

console.log(result, 'result');

// ----------------------




// Array.isArray();

// console.log(mass, 'mass');

// for(var i = 0; i < mass.length; i++) {
//     // console.log(mass[i], i);
//     for(var j = 0; j < mass[i].length; j++) {
//         // console.log(mass[i][j]);
//         if (Array.isArray(mass[i][j])) {
//             for(var k = 0; k < mass[i][j].length; k++) {
//                 console.log(mass[i][j][k]);

//             }
//         } else {
//             mass[i][j] = Math.round(Math.random() * 30);
//         }
//     }
// }

// -----------------

var mass = new Array(new Array(4), new Array(3), new Array(4));

console.log('original array --->', mass)

function arrayFiller(arr) {
    for(var i = 0; i < arr.length; i++) {

        if (Array.isArray(arr[i])) {
            arrayFiller(arr[i]);
        } else {
            arr[i] = Math.round(Math.random() * 30);
        }
    } 

}

arrayFiller(mass);

console.log(mass, 'mass');