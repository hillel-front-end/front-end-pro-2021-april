console.log("Lection_21");

window.onload = function () {
  const authForm = document.querySelector("#auth");

  const appendDataToForm = (form, data) => {
    if (!(form && data)) return;

    for (let formItem of form) {
      if (formItem.tagName.toLowerCase() !== "button") {
        const key = formItem.name;
        const payload = data[key];

        if (payload) {
          formItem.value = payload;
        }
      }
    }
  };

  const data = JSON.parse(localStorage.getItem("user"));

  appendDataToForm(authForm, data);

  const serializeForm = (form) => {
    if (!form) return null;

    const data = {};

    for (let formItem of form) {
      if (formItem.tagName.toLowerCase() !== "button") {
        data[formItem.name] = formItem.value;
      }
    }

    return Object.keys(data).length ? JSON.stringify(data) : null;
  };

  authForm.addEventListener("submit", function (event) {
    event.preventDefault();
    const userSerialized = serializeForm(authForm);
    localStorage.setItem("user", userSerialized);
  });

  // authFo
};
