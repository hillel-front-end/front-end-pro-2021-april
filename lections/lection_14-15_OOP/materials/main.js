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
 


// console.log(array, 'array');

// console.dir(Array, 'Array');


// ------------------------

// function HtmlElement(name) {
//   // this = {}
//     //this.__proto__ = HtmlElement.prototype

//     this.tagName = name;

// }

// HtmlElement.prototype.render = function(){
//     console.log('rendering', this.tagName);
// };

// let anchor = new HtmlElement('anchor');
// let img = new HtmlElement('img')

// console.log(anchor, 'anchor');
// console.log(img, 'img');

// anchor.render();
// img.render();


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

// -----------------------Additional---------------------------------------



function HtmlElement(name) {}
  
HtmlElement.prototype.render = function(){
    console.log('rendering', this.className);
};
  

function HtmlElementAnchor(id = '', className = '', href = '', flag) {
  this.id = id;
  this.className = className;
  this.href = href;

  if (flag) {
    this.redirect = function() {
      console.log('override redirect');
    }
  }
}

/*

class HtmlElementAnchor {}
*/


//HtmlElement.prototype < -- >HtmlElementAnchor.prototype 
// HtmlElementAnchor.prototype  = {
//   __proto__: HtmlElement.prototype
// }

// HtmlElementAnchor.prototype = Object.create(HtmlElement.prototype); 

// /*
// Object.create(HtmlElement.prototype) -->

// {
//   __proto__:HtmlElement.prototype
// }

// */

// HtmlElementAnchor.prototype.redirect = function() {
//   console.log('redirect');
// };


// const a1 = new HtmlElementAnchor('Link-1', '.link__foo', 'https://google.com', true);
// const a2 = new HtmlElementAnchor('Link-1', '.link__foo2', 'https://google2.com');

// console.log(a1, 'a1');
// console.log(a2, 'a2');

// // a1.render();


// a1.redirect();
// a2.redirect();

// ------------- Class ----------
class Parent {
  constructor(v) {
    console.log('call cnstr Parent', v);
  }

  drink() {
    console.log('drink from parent');
  }

  sum(a, b) {
    return a  + b;
  } 
}

class Child extends Parent {
  
  name = 'Valera';

  constructor(name) {
    //super
    // console.log(this, 'this');
    console.log('call cnstr Child');
    super('arguments from child constructor');

    this.name = name;
    this.run = function() {}

    console.log(this, 'this');
  }

  run() {

  }

  sum(a, b, c) {
    return super.sum(a, b) + c;
  }
}

const child = new Child('Valera');


// console.log(typeof Child)

console.log(child, 'child');

console.log(child.sum(1, 2, 3));



