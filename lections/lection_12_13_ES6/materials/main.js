/*
  1) Array es5 methods 
  2) let, cosnt, freeze
  3) arrow
  4) object
  5) template string
  6) rest, spread
  7) destruction
*/

// var products = [
//     { name: 'juice', price: 1, isBought: false },
//     { name: 'cola', price: 2, isBought: true },
//     { name: 'sprite', price: 3, isBought: false },
//     { name: 'soda', price: 3, isBought: true },
//     { name: 'milk', price: 30, isBought: false }
// ];

// -------- es6 ------------

// let, const

// if (false) {
//   var a = 12;
// }

// console.log(a, 'a');

let a = 1;

console.log(a, 'a');

// let a = 2; -- error

a = 3;


// --------------------

if (false) {
  // var b = 12
  let b = 12;

}

// console.log(b, 'b');

// for(let i = 0; i < 10; i++) {
//   setTimeout(function() {
//     console.log(i, 'i');
//   }, 3000);
// }

const PI = 3.14;

// PI = 3.16; --> exception

const arr = [1, 2, 3];

// arr = [2, 4, 5]; --> exception

arr[0] = 3;

console.log(arr, 'arr');

const person = Object.freeze({name: 'Valera'});

person.name = 'Pety';

console.log(person, 'person');

/// ----------------- arrow -----------


// const sum = (a, b) => {
//   console.log(this, 'this');
//   return a + b;
// };

// console.log(sum(1, 2));

const converter = {
  rate: '16.5'
};

// console.log(converter, 'converter');

// converter.sum();


  // const sum = () => {
  //   console.log(this, 'this -- in arrow');
  //   console.log(arguments, 'arg');
  // };

  // sum();

function foo() {
  console.log(this, 'this');

  const sum = (a, b) => {
    // console.log(this, 'this -- in arrow');
    console.log(arguments, 'arg');
    console.log(a,b, 'a,b');
  }

  sum(1, 2);
}

// foo.call(converter);
foo('c1', 'c2');


// const mull = (a, b) => ({
//   a: a,
//   b: b,
//   result: a * b
// });


let person3 = {
  name: 'Valera', 
  getName: function() {
    return this.name
  }
};
let person4 = {name: 'Pety'};

function foo3() {

  let sayName = name => person3.getName();

  foo2 = foo2.bind(person4);

  sayName(this.name);
  
}

// foo3.call(person3);

// console.log(mull(1,2));

// ------------------ OBJECT------------------------



let key1 = 'write';
let key2 = 'write2'

// const SET_SUMMARY = 'SET_SUMMARY';
// const SET_USER_NAME = 'SET_USER_NAME';

const obj = {
  action: function() {},
  read() {

  },
  // [key]: true,
};



const store = {
  summary: 0,
  name: ''
}

const mutations = {
  store: store,
  setUserName(summary) {
    console.log(this, 'this');
    this.store.summary = summary
  },
  [SET_USER_NAME](name) {
    this.store.name = name;
  }
};


// console.log(mutations, 'mutations');

// console.log(obj[key]);



// ------------ template string --------------


// let html = 
// '<div>' 
// + (1 + 1) + 
// '</div> ';
const greating = (name) => `Welcome ${name}`;

let html = 
`<div>
    ${1 + 1}
    ${greating('Valera')};
</div>
`


// console.log(html, 'html');  

const products = [
  { name: 'juice', price: 1, isBought: false },
  { name: 'cola', price: 2, isBought: true },
  { name: 'sprite', price: 3, isBought: true },
  { name: 'soda', price: 3, isBought: false },
  { name: 'milk', price: 30, isBought: false },
  { name: 'milk - 2', price: 30, isBought: false }
];

const template = `
<article class="products"> 
 ${
    products.map(product => (`
      <section class="products__product ${product.isBought? 'bought': ''}">
        ${product.name}
      </section>`
    )).join('')
  }
</article>
`

// const a1 =products.map(product => (`
//     <section class="products__product">
//       ${product.name}
//     </section>`
// ))

// console.log(
//   a1
// )
document.write(template);

// ------------ Destruction --------


const foo1 = {
  a1: 'aaa',
  a2: 'bbb',
  a3: 'ccc',
  a4: {
    a5: 'inner'
  }
};


// const key1 = foo1.key1;
// const key2 = foo1.key2;
// const a5 = foo1.a4.a5;

const { 
  a3:b1, 
  a1, 
  a2, 
  a4 : {
    a5
  }
} = foo1;

console.log(b1, 'b1');

console.log(a5 ,'  a5');

console.log(a1, a2, 'a1, a2, a3');

// --------------- destruction array -----------
const foo4 = ['value-0','value-1', 'value-2', 'value-3'];

const [ v0, , , v3 ] = foo4;

// console.log(v0, v1, v2, v3, 'v0, v1, v2, v3');
console.log(v0, v3, 'v0, v3');  



function sum({ j, o, p}) { // let {j, o, p,} = obj;
  //  console.log(j, o, p, 'j, o, p');
  // console.log(item, 'item');

}
// sum(p, j, o)

let obj3 = {
  p: 2,
  j: 3,
  o: 1,
};



sum({
  p: 2,
  j: 3,
  o: 1,
});


let o = 1;
let p = 2;
let j = 3;
let valera = 'Pety';

const obj6 =  { o, p, j, valera };

console.log(obj6, 'obj6');


// ------- rest, spread ---


// function mul(a, ...foo) {
//   // console.log(arguments, 'argumenta');
//   console.log(foo, 'foo');
//   console.log(a, 'a');
// }

// mul(1, 2, 3, 5)


function mul(a1, a2, a3) {
  // console.log(arguments, 'argumenta');
  // console.log(foo, 'foo');
  // console.log(a, 'a');

  console.log(a1, a2, a3);
}

const array = [1, 2, 3];

// mul(...array);
// mul.apply(null, array);



// const u = {
//   a1: 2,
//   a2: 3
// };

// const u1 = {
//   ...u,
//   a2: 'valera'
// };

let u = {
  a1: 2,
  a2: 3
};

// u.a1 = 4;
u = {
  ...u,
  a2: 'valera'
};