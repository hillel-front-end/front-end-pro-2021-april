/*
   Dom navigation
*/

/*events [ 
    click, 
    mousemove, 
    mouseleave, 
    onmousedown,  
    onmouseup,
    onmouseover, 
    onmouseout,
    onmousemove,
    contextmenu 
]
*/

// const boxes = document.querySelectorAll(".box");

// console.dir(box, "box");

// box.onclick = function () {
//   console.log("work", this);
// };

// for (let i = 0; i < boxes.length; i++) {
//   //   console.log(boxes[i], "i");
//   boxes[i].innerHTML = i + 1;

//   boxes[i].onclick = function () {
//     console.log(this.innerText, "innerHtml");
//   };
// }

const box = document.querySelector(".box");

// box.onclick = function () {
//   console.log("click");

//   //   this.classList.add("drag");
// };
// box.onmousedown = function () {
//   console.log("onmousedown");

//   this.classList.add("drag");
// };

// box.onmouseup = function () {
//   console.log("onmouseup");

//   this.classList.remove("drag");
// };

// box.onmousemove = function () {
//   console.log("onmousemove");

//   this.classList.remove("drag");
// };

function handler() {
  //   this.classList.toggle("drag");
  console.log("send request");
}

function handler2() {
  //   this.classList.toggle("drag");
  console.log("show popup");
}

// box.onclick = handler;
// box.onclick = handler2;

// box.onmousemove = handler;
// box.onmouseenter = handler;
// box.onmouseleave = handler;

// box.oncontextmenu = handler;

// -------------

// box.addEventListener("click", handler); // addEventListener('event', handler);
// box.addEventListener("click", handler2);

function handler(event) {
  //   console.log("event.type", event.type);
  //   console.log("target", event.target);

  console.log(event.clientX, "clientX");
  console.log(event.clientY, "clientY");

  this.innerHTML = `
    clientX = ${event.clientX},
    clientY = ${event.clientY},
    pageX = ${event.pageX},
    pageY = ${event.pageY},
    shiftX = ${event.offsetX},
    shiftY = ${event.offsetY},
  `;

  console.log(event);
}

// box.addEventListener("click", handler);
// box.addEventListener("mouseenter", handler);
// box.addEventListener("contextmenu", handler);

// document.addEventListener("mousemove", function () {
//   console.log("event", event.clientY);
// });
