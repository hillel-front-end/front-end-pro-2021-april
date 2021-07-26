function ajax({ url, method, data, success, error = () => {} }) {
    const xhttp = new XMLHttpRequest();
  
    xhttp.onload = () => {
      const response =
        typeof xhttp.response === "string"
          ? JSON.parse(xhttp.response)
          : xhttp.response;
  
      success(response, xhttp.status);
    };
  
    xhttp.onerror = () => {
      console.log('show error meessage');
    }
  
  
    xhttp.open(method, url);
  
    method.toLowerCase() === "post"
      ? xhttp.send(data)
      : xhttp.send();
}