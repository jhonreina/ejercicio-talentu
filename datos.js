function capturar() {
  function Username(email, firstName, lastName, date) {
    this.email = email;
    this.firstName = firstName;
    this.lastName = lastName;
    this.date = date;
  }
  let emailCapturar = document.getElementById("email").value;

  let firstNameCapturar = document.getElementById("name").value;

  let lastNameCapturar = document.getElementById("lastName").value;

  let dateCapturar = document.getElementById("date").value;

  newUsername = new Username(
    emailCapturar,
    firstNameCapturar,
    lastNameCapturar,
    dateCapturar
  );

  add();
}

let baseDatos = [];
function add() {
  baseDatos.push(newUsername);
  document.getElementById("Usuario").innerHTML +=
    "<tbody><td>" +
    "</td><td>" +
    "</td><td>" +
    newUsername.firstName +
    "</td><td>" +
    newUsername.lastName +
    "</td><td>" +
    newUsername.email +
    "</td><td>" +
    newUsername.date +
    "</td></tbody>";
}
