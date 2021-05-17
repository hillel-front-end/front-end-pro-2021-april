
// ---------- hoisting ----------------
// a = undefined;
// z = undefined;
// foo = udefined;


console.log(a, 'a');
console.log(z, 'z');

var a = 12;
var z = 'aaa';


// foo();

var foo = function() {

};


if (false) {
     (function(){
        var j = 12;
     })()
}

// console.log(j, 'j');

foo2(); ///before call

function foo2() {
    console.log('foo-2');
}

foo2(); //  after call



var z = 16;

function local() {
    console.log(z, 'z');
    // var z;


    z = 15;

}

local();


// ------------- Lexical Environment ------------

var a = 1;

function foo3() {
    c1();
    console.log(a, 'a');
    console.log(b, 'b');
    
    /*
        LE = {a: undefined, c1: func(){} }
    */

    var a = 12; //
    console.log(window.a, 'global ----> a');
    /*
        LE = {a: 12, c1: func(){} }
    */


    return;

    
    function c1() {
        console.log('-----c1 ----');
    }
}

console.log(window.z, 'window.z');


// ---------- SCOPE -----------------

var z1 = 'global';

function k1() {
    var i = 1;
    var l = 15;
    /* LE-K1 = { k2: func(), i: 1, scope: window, l: 15 } */

    // console.log(z1, 'z1');

    // [[SCOPE]] --> window

    function k2() {

        /* LE-K2 = {  scope: LE-K1 } */
        // console.log(z1, 'z1');
        l = 12;
        // [[SCOPE]] ---> LE-K1
    }
}

function b1() {
    var z1 = 'local b1';

    k1();
}

// ---------- CLOSURE -------------


function counter() {
    var i = 0;
    // LE-counter = { i: 0, scope: window}
    //  console.log(++i);
     function g() {
    // LE-anonyme = {scope: LE-counter }

        console.log(++i, 'i');
    }

    g();
    g();
}


var interate =  counter();
// counter = null; 
// counter();
// counter();
// counter();
console.log(interate, 'interate');


interate();
interate();
interate();
interate();
interate();