function toDo() {
    var a = 12;

    // console.log(arguments.push(12), 'arguments')
    arguments[arguments.length] = 12;

    console.log(arguments, 'arguments');

    return 'hello';
}


// console.log(a, 'a');


var z;

console.log(toDo(1, 2, 3, 4))



// ---------


// function foo() {
//     return function() {
//         console.log('123');
//     }
// }

// var callback = foo();

// console.log(callback(), 'callback');


/* Object 

1. diff: link, primitive type
2. Object
3. add, read, update, delete --keys
4. nested object
4. loop
5. Object.entries(), keys(), values()
6. clone

*/

// ------------- primitive type ----------


var mass = [];

function foo(arr) { //arr = mass
    if (!arr) {
        return;
    }

    arr.push(12);

    console.log(arr, 'arr');
}

// foo(mass);

// console.log(mass, 'mass');


var a = 12;

function foo2(value) { // value = a;
    value = 13;
}

foo2(a);

// console.log(a, 'a');



/// --------

// var link1 = [];

// var link2 = link1;

// link2[link2.length] = 12;

// console.log(link2, 'link2');
// console.log(link1, 'link1');



// ----- primitive --------


var a1 = 12;

var a2 = a1;

// console.log(a1, 'a1 before mutation');
// console.log(a2, 'a2 before mutation');

a2 = 14;

// console.log(a1, 'a1 after mutation');
// console.log(a2, 'a2 after mutation');

// --------------

var team = [
    ['valera', 'ternavsky', 26],
    ['valera', 'ternavsky', 36]
]


// var valera = team[0];

// valera.reverse();
// console.log(valera, 'valera');

// var name = valera[0];
// var lastName = valera[1];
// var age = valera[2];

// console.log(name, 'name');
// console.log(lastName, 'lastName');
// console.log(age, 'age');


//

var human = {
    name: 'Valera',
    lastName: 'Ternavsky',
    age: 22,
    age: 26
};


//  --- read --

console.log(human, 'human');


var name = human.name;

console.log(name, 'name');

console.log(human.age, 'age');

var key = 'lastName';

console.log(human[key], 'age');

console.log(human.key)


// --- write ---- 


human.children = [1]; // create

human['children'] = [2]; // update

console.log(human, 'human');

console.log(human.children[0] ,'human.children')


human.sister = {
    name: 'kate'
};


console.log(human.sister.na, 'human');
// [2].push(3);


// ------ delete ---




delete human.children;

console.log(human, 'human');


// -------- loop ------

console.log(human.age, 'age');

// for(var key in human) {
//     // console.log(typeof key, 'key')
//     var value = human[key];

//     console.log(key, value, 'value');
// }


console.log(human, 'human');

var human2 = human;


function cloneObject(obj) { // obj = human
 var newObj = {};

 console.log(obj, 'obj');

    for(var key in obj) {
        console.log(key, 'key');

        newObj[key] = obj[key];
    }


    console.log(newObj, 'newObj');


    console.log(newObj == obj)
}

cloneObject(human);