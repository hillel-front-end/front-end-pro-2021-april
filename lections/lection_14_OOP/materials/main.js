// const mass = [];
// const mass2 = [];


// console.log(mass.map === mass2.map);



// function sum(a, b) {
//     return a + b;
// }


// function modernSum(a, b, c) {
//     return sum(a, b) + c;
// }

// console.log(modernSum(1, 2, 3));

/// [[Prototype]]

// let animal = {
//     name: 'animal',
//     run() {
//         console.log('running', this);
//     }
// };


// let dog = { 
//     __proto__: animal,
//     bark() {
//         console.log('bark');
//     }
// };

// animal.__proto__ = dog;

// console.log(animal, 'animal');
// console.log(dog, 'dog');

// dog.run();

// console.log(dog.name, 'name');




// console.dir(HtmlElement, 'HtmlElement');


// console.log
const array = new Array();

const mass = [];
const mass2 = [];

console.log(mass.__proto__ === mass2.__proto__);


console.log(Array.prototype === [].__proto__);


// console.log(array, 'array');

// console.dir(Array, 'Array');


// ------------------------

function HtmlElement(name) {
  // this = {}
    //this.__proto__ = HtmlElement.prototype

    this.tagName = name;

}

HtmlElement.prototype.render = function(){
    console.log('rendering', this.tagName);
};

let anchor = new HtmlElement('anchor');
let img = new HtmlElement('img')

console.log(anchor, 'anchor');
console.log(img, 'img');

anchor.render();
img.render();


// let b = new HtmlElement();

// console.log(HtmlElement.prototype === a.__proto__);

// console.log(HtmlElement.prototype, 'HtmlElement.prototype');
// console.log(a)
/*

1) new --> {}
2) call HtmlElement()
3) this === {}(1)

*/


// let c = {
//     render() {

//     }
// }
// let a = {
//  __proto__: c
// };
// let b = {
//     __proto__: c
// }