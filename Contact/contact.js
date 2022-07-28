let userForm = document.getElementById("form");
let alertButton = document.getElementById("alert-button");
let dialogContent = document.getElementById("dialog-content");
let handles = document.getElementsByClassName("handle");
let dialog = document.getElementById("dialog");
let contact = document.getElementById("gambarcontact");

let userName = "";

userForm.addEventListener("submit", function (event) {
  event.preventDefault();

  let formObject = new FormData(userForm);
  let formValue = Object.fromEntries(formObject);

  // console.log(formValue.nama);

  userName = formValue.nama;

  let h1 = document.createElement("h1");

  h1.textContent = userName;

  dialogContent.appendChild(h1);

  showAlert();

  userForm.reset();
});

function showAlert() {
  dialog.classList.remove("hide");
  userForm.classList.add("hide");
  contact.classList.add("hide");
  alertButton.classList.add("hide");
}

alertButton.addEventListener("click", showAlert);

function handler() {
  userForm.classList.remove("hide");
  contact.classList.remove("hide");
  dialog.classList.add("hide");
  alertButton.classList.remove("hide");
}

for (let i = 0; i < handles.length; i++) {
  handles[i].addEventListener("click", handler);
}
