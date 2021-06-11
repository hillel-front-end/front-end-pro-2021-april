const products = [
    { name: 'juice', price: 1, isBought: true },
    { name: 'cola', price: 2, isBought: true },
    { name: 'sprite', price: 3, isBought: true },
    { name: 'soda', price: 3, isBought: true },
    { name: 'milk', price: 30, isBought: false }
  ];
  
  
//   products.forEach((product, index)  => {
//     console.log(product, 'product');
//     console.log(index, 'index');
//   });


  // ------ filter --------


//   const filtered = products.filter((product)  => {
//     return product.price > 2 && !product.isBought;
//   });

//   console.log(filtered, 'filtered');
  // --------- map --- 


//   const names = products.map((product, index)  => {
//    return product.name;
//   });



const names = products
    .filter(product => product.price > 2 && !product.isBought)
    .map(product => product.name);

// ------- Some, Every -------

// console.log(products.some(product => !product.isBought));
// console.log(products.every(product => product.isBought));



// ---- reduce ---

// let result = [1, 2, 3].reduce((acum, item, index) => {
//     console.log(acum, item, index, 'acum, item, index');
//     return acum + item
// }, 0);
//   console.log(result, 'result');
