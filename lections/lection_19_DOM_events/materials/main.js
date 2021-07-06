/*
   1. createElement
   2. attrs: getAttribute, setAttribute, removeAttribute,
    dataset,
   3. behavior -- example
*/


///  ---- Attrs -----
// const block = document.querySelector('.block');


// console.log(block.className, 'className');
// console.log(block.foo, 'foo');


// console.log(block.getAttribute('foo'), 'getAttribute');
// console.log(block.setAttribute('foo', 'Pety'), 'getAttribute');

// data-[name]="value"


// console.dir(document.querySelector('[data-login]').dataset)


// --------------- --------------------


const product = document.createElement('div');

console.log(product, 'product');

product.addEventListener('click', function() {
   console.log(123);
});

product.classList.add('product');

product.innerHTML = 'Pepsi';

//
// document.body.append();

// const container = document.querySelector('.container');



// const box = document.querySelector('.box');

// setTimeout(() => {
//    container.append(product);
//    // container.append(box);
   
//    setTimeout(() => {
//       // container.prepend(product);
//       container.before(product);

//       setTimeout(() => {
//          // container.prepend(product);
//          container.after(product);

//       }, 2000)
//    }, 2000)
// }, 1000)

/// ------------


const products = [
    { name: 'juice', price: 1, isBought: false },
    { name: 'cola', price: 2, isBought: true },
    { name: 'sprite', price: 3, isBought: false },
    { name: 'soda', price: 3, isBought: true },
    { name: 'milk', price: 30, isBought: false },
    { name: 'milk2', price: 30, isBought: false }
];

const productsNode = document.querySelector('.products');

// const container = document.createElement('div');
// container.classList.add('products');

const fragment = document.createDocumentFragment();

for(const { name, price } of products) {
   const productNode = document.createElement('div');

   productNode.classList.add('product');
   productNode.innerText = `${name},  - price $${price}`
   
   // productsNode.append(productNode)
   // container.append(productNode);
   fragment.append(productNode);
}

productsNode.append(fragment);

// -----------------------------
