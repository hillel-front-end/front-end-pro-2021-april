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




