/*
 var xhttp = new XMLHttpRequest();
 xhttp.onreadystatechange = func(){} -- вызываеися всякий раз когда изменяеться, readyState
 xhttp.readyState - cодержит состояние объекта XMLHttpRequest. Изменяется от 0 до 4:
    0: вызван конструктор
    1: вызван метод open
    2: запрос получен
    3: обработка запроса
    4: запрос завершен и ответ готов
   xhttp.open("GET", "req_url", true);
   xhttp.send();
*/

function sendAjax({ method, url, success, body = null }) {
  const xhr = new XMLHttpRequest();

  xhr.addEventListener("load", () => success(xhr.responseText));

  xhr.open(method, url);

  if (method.toLowerCase() === "post") {
    xhr.send(body);
  } else {
    xhr.send();
  }
}

sendAjax({
  method: "get",
  url: " http://localhost:6060/users",
  success(response) {
    const data = JSON.parse(response);
    console.log(data);
  },
  body: {},
});

function renderUsers(users) {
  if (!users.length) return;

  //.....
}

// sendAjax({
//     method: 'get',
//     url: ' http://localhost:6060/cards',
//     success: function (response){
//
//     }
// })
