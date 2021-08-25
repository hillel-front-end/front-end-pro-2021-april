// function fetchData() {
//   fetch("http://localhost:3005/google")
//     .then((config) => config.json())
//     .then((google) => {
//       console.log(google, "google");
//       return fetch("http://localhost:3005/facebook");
//     })
//     .then((config) => config.json())
//     .then((facebok) => {
//       console.log(facebok, "facebok");
//     });
// }
// async - await (then())

async function fetchData() {
  const config = await fetch("http://localhost:3005/google");
  console.log(config, "config");

  const response = await config.json();

  //   console.log(config, "config");

  console.log(response, "response");

  const config2 = await fetch("http://localhost:3005/facebook");

  console.log(config2, "config2");

  const response2 = await config2.json();

  console.log(response2, "response2");
}

console.log(fetchData());

function toDo() {
  return 1;
}

function getData() {
  setTimeout(() => {
    console.log(2222);
  });

  const a = toDo();

  console.log(a, "a");
}

getData();

const obj = {
    async toDo() {
      await fetch();
    }
};