function sendAjax({ url, method, data }) {
  return new Promise((resolve, reject) => {
    const xhttp = new XMLHttpRequest();

    xhttp.onload = () => {
      const response =
        typeof xhttp.response === "string"
          ? JSON.parse(xhttp.response)
          : xhttp.response;

      resolve(response, xhttp.status);
    };

    xhttp.onerror = () => {
      reject({ message: "xhttp.error" });
    };

    xhttp.open(method, url);

    method.toLowerCase() === "post" ? xhttp.send(data) : xhttp.send();
  });
}
