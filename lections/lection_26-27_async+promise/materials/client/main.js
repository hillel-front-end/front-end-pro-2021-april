/*
    1)Async,
    2)Promise (catch) (callback hell)
    3)PromiseAll
    4)Practice
*/

// function foo2() {}

// function foo() {
//   foo2();
// }

// function render() {
//   console.log("rendered");
//   foo();
// }

// // setTimeout(() => {
// //   console.log("timeout");
// // }, 800);

// for (let i = 0; i < 100000; i++) {}

// // console.log("after loop");
// render();

// render();

// function ajax() {
//   let sum = 0;

//   for (let i = 0; i < 1e9; i++) {
//     sum += i;
//   }

//   console.log("finish", sum);
// }

// setTimeout(() => console.log('hello') , 10000)

// document.querySelector("#send").addEventListener("click", () => {
//   ajax();
// });

// document.querySelector("#show").addEventListener("click", () => {
//   alert("hello world");
// });

// -------------- callback hell -----------------
// let id = null; //bad bad bad

// sendAjax({
//   url: "...",
//   method: "..",
//   success(id) {
//     id = id;
//   },
// });

// // bad
// setTimeout(() => {
//     sendAjax({
//         url: `?id=${id} `,
//         method: "..",
//         success(id) {
//           id = id;
//         },
//       });
// },2000);

// very bad
// if (id) {
// sendAjax({
//     url: `?id=${id} `,
//     method: "..",
//     success(id) {
//       id = id;
//     },
//   });
// }

// not bad

// sendAjax({
//   url: "/auth",
//   method: "..",
//   success(id) {
//       if (!id) return

//     sendAjax({
//         url: `?id=${id} `,
//         method: "..",
//         success(products) {

//             sendAjax({
//                 url: '',
//                 method: "..",
//                 body: products,
//                 success(foo) {

//                     sendAjax({
//                         url: 'annother',
//                         method: "..",
//                         body: foo,
//                         success(data) {

//                             sendAjax({
//                                 url: '',
//                                 method: "..",
//                                 body: data,
//                                 success(foo2) {

//                                 },
//                               });
//                         },
//                       });

//                 },
//               });
//         },
//       });

//   });

// ------------------- PROMISE ------------------

// const random = (max, min) => Math.ceil(Math.random() * (max - min) + min);

// const promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     const number = random(1, 10);
//     // console.log(number, "< --- is even");

//     if (number % 2 === 0) {
//       resolve([number]);
//     } else {
//       reject({ number });
//     }
//   }, 1000);

//   resolve();
//   reject();
// });

// console.log(promise, "promise");

// promise
//   .then(
//     (number) => {
//       console.log("call then - 1.1");
//       //   return new Promise((res, rej) =>  {
//       //     rej();
//       //   });

//       // return Promise.reject();
//       return "aaa"; //Promise.resolve('aaa'); --default
//     },
//     (number) => {
//       // alert("call alert", number);
//       console.log("call then - 1.2");
//     }
//   ) // Prmise.resolve()

//   .then(
//     (v) => {
//       console.log("call then - 2.1", v);
//     },
//     (v) => {
//       console.log("call then - 2.2", v);
//     }
//   );
// -----------------------------------------

const getApiUrl = (path) => `http://localhost:3005${path}`;
const baseConfig = {
  method: "get",
};

const authConfig = {
  url: getApiUrl("/auth"),
  ...baseConfig,
};

const requestGoogleConfig = {
  url: getApiUrl("/google"),
  ...baseConfig,
};

sendAjax(authConfig)
  .then(({ id }) => (id ? id : Promise.reject("Id is not defined")))
  .then((id) => sendAjax(requestGoogleConfig))
  .then((response) => {
    if (response.length > 0) {
      return response;
    }
    return Promise.reject("Products ....");
  })
  .then((googleUsers) => {
    return new Promise((resolve, rej) => {
      sendAjax(requestGoogleConfig).then((facebookUsers) =>
        resolve([...facebookUsers, ...googleUsers])
      );
    });
  })
  .then((users) => render(users))
  .catch((error) => alert(error));

function render(info) {
  document.body.innerHTML = JSON.stringify(info);
}
