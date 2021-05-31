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

    console.log(this, arguments);
    console.log(greeting, 'greeting');
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