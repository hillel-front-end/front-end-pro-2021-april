// + Глобальные обьекты Window
//
// ================ Browser object model(BOM) =======================
/*
  + window innerH\W 
  + navigators
  + location
  + screen
  + Спецификация HTML
 */

// navigator.getBattery().then((l) => {
//   console.log(l, "l");
// });

// console.log(navigator.userAgent, "navigator.userAgent");
// console.log(navigator.platform);

// console.log(location, 'location');
//+ setTimeout,  setInterval, alert, confirm

// console.log(window.innerHeight, window.innerWidth, "wh");
//================== Document Object Model(DOM) ======================

/*
+ Глобальные обьект Document
+ DOM иерархия 
+ JS обращение в html, closest, match, contain
+ html коллекция
+ html элемент
+ Обьекты classList, className, innerText
+ Style
*/

console.log(location, "location");

console.dir(document, "document");

const bodyId = document.body.id;
const bodyClass = document.body.className;

console.log("bodyId == ", bodyId);
console.log(bodyClass, "bodyClass");

const body = document.body;

console.dir(body.children, "children");
console.dir(body.childNodes, "childNodes");

const arrNodes = [...body.children];

// console.log(body.innerText, "innerText");
// console.log(body.innerHTML, "innerHtml");

setTimeout(() => {
  // body.innerText = "<span>Hello world</span>";
  // body.innerHTML = "<span>Hello world</span>";
}, 3000);

// console.log(arrNodes, "arrNodes");

/// ---------- Dom Methods --------

const collectionByTagName = document.getElementsByTagName("span");
// collectionByTagName = [{ name: valera}]

// collectionByTagName[0].name

console.dir(collectionByTagName, "collectionByTagName");

const collectionByClass = document.getElementsByClassName("foo");

console.log(collectionByClass, "collectionByClass");

const elementById = document.getElementById("moo");

console.log(elementById, "elementById");

/// -------- query -------

// document.querySelector('css selector'); ===> element

// document.querySelectorAll('css selector'); => collection

console.log(document.querySelector("#moo.foo"));

console.log(document.querySelectorAll(".foo"));

// -------- class ---------

// const container = document.querySelector(".container");

// // container.className = "box";
// console.log(container.className, "container.classList");
// console.log(container.classList, "container.classList");

setTimeout(() => {
  // container.className += " box";
  // container.classList.add("box");
  // container.classList.remove("box");
  // container.classList.toggle("box");
}, 1000);

// setInterval(() => {
//   container.classList.toggle("box");
// }, 300);
// ------------ Style ----

// console.log(container.style, "container.style");
// setTimeout(() => {
//   container.style.color = "yellow";
//   container.style.backgroundColor = "blue";
// }, 1000);

/// ----------------- Practice ------------

const box = document.querySelector(".box");

console.log(box, "box");

// setTimeout(() => {
box.style.left = "100px";
box.style.top = "200px";
// }, 2000);


// -------------------- 