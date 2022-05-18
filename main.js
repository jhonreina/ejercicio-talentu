const tbody = document.getElementById("data");

function cargarTabla() {
  let info;
  fetch("https://reqres.in/api/users?page=1")
    .then((result) => result.json())
    .then((data) => {
      info = data.data
        .map((e) => {
          return `<tr><td>${e.id++}</td><td><img src='${e.avatar}'/></td><td>${
            e.first_name
          }</td><td>${e.last_name}</td><td>${
            e.email
          }</td><td>${"N/A"}</td></tr>`;
        })
        .join("");

      tbody.innerHTML = info;
    });
}

cargarTabla();
