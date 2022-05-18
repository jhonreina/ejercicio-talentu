const email = document.getElementById("email");
const firstName = document.getElementById("name");
const lastName = document.getElementById("lastName");
const date = document.getElementById("date");
const parrafo = document.getElementById("warnings");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let warnings = "";
  let entrar = false;
  let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;

  if (!regexEmail.test(email.value)) {
    warnings += `El email no es valido <br>`;
    entrar = true;
  }
  if (firstName.value.length < 6) {
    warnings += `El nombre no es valido <br>`;
    entrar = true;
  }
  if (lastName.value.length < 3) {
    warnings += `El apelido no es valido <br>`;
    entrar = true;
  }
  if (date.value.length < 3) {
    warnings += `la fecha no es valida<br>`;
    entrar = true;
  }

  if (entrar) {
    parrafo.innerHTML = warnings;
  } else {
    parrafo.innerHTML = "!Usuario registrado correctamente¡";
  }
  form.reset();
});
