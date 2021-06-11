function getName() {
    return console.log('Hello' + this.name);
}

var person = {
    name: "Valera"
};

var person2 = {
    name: 'Pety'
};

person.getName = getName;
person2.getName = getName;

console.log(person, 'person');
console.log(person2, 'person2');


person.getName();// this ===> person
person2.getName();// this ===> person2

// delete person2.getName;

console.log(person2, 'person2 after delete');


// ---------- call, apply ---------


var person = {
    name: "Valera"
};

var person2 = {
    name: 'Pety'
};

function getName(greeting, a, b, c, d) {

        // console.log(this, arguments);
        // console.log(greeting, 'greeting');
    // return console.log(greeting + '' + this.name);
}

getName.call(person, 'hello', 1, 2 ,3); // call(context, a1, a1,..., an)

var mass =  ['hello', 1, 2 ,3];
mass.push(4)
getName.apply(person, mass);

 ///// ----------------------------- 

 function foo() {
    console.log(arguments, 'arguments');
    var mass = [];
    // var slice = [].slice;
    // var push = [].push;

    // push.apply(arguments, ['aaaa']);

    // console.log(arguments, 'arguments');
    // console.log(slice, 'slice');
    // var arr = slice.call(arguments, 1, 2);//. arguments.slice(1, 2)
    // arguments.slice = slice;

    // console.log(arr, 'arr');

    var arr = [].slice.call(arguments)

 }



 
 foo(1, 2, 3, 4, 5);

 var arr = [];


 arr.myPush = function() {
     
 }

  // ------------------- bind -------------------


  
var person = {
    name: "Valera"
};

function getName(a, b) {
    console.log(this);

    console.log(a, b, 'a, b');

}

//   getName.call(person, 'hello', 1, 2 ,3)

// getName();

// function myBind(context) {
//     return function() {
        
//     }
// }

var getNameWithPerson = getName.bind(person);

console.log(getNameWithPerson, 'getNameWithPerson');

console.log(getName, 'getName');

// console.log(getNameWithPerson === getName);

getNameWithPerson(1, 2);
getNameWithPerson(3, 4);
getNameWithPerson(5, 6);


// -------- use cases - 1 ------

var human = {
    name: 'Valera',
    run: function() {
        console.log(this.name,' ...run');
    }
}


// human.run();

function toDo(callback) { // callback = human.run
    if (!callback) return;

    callback();
}


toDo.call(human);

toDo(human.run.bind(human));


// function foo2() {
//     console.log('fooo-2');
// }

// setTimeout(foo2, 3000);
setTimeout(human.run.bind(human), 3000);

// ---------------------------

function sumPlusOne(a, b, c) {
    return a + b + c;
}

sumPlusOne(1, 2, 3);
sumPlusOne(1, 5, 7);
sumPlusOne(1, 2, 17);

sumPlusOne = sumPlusOne.bind(null, 1);

// ---- pseudo code -------
// function myBind(context, arg) {
//     return function(arg) {
        
//     }
// }

// function sumPlusOne(a, b, c) {
//     return a + b + c;
// }

// function decorateSumplusOne(c1, c2, c3) {
//     return sumPlusOne(c2,c1, c3)
// }

// sumPlusOne(1, 2, 3)
// sumPlusOne() 

// sumPlusOne = sumPlusOne.myBind(null, 1)
// ==>function(1) {
        
//     }

// sumPlusOne(2, 3)
//sumPlusOne(5, 6)


//-------------------