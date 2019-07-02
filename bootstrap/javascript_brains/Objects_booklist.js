function NewBook(bookName, author, isbn) {
  (this.bookName = bookName), (this.author = author), (this.isbn = isbn);
}

function UI() {}

UI.prototype.addNewElement = function(newbook) {
  var d = document.querySelector(".main");

  var e = document.createElement("tr");

  e.innerHTML = `<td>${newbook.bookName}</td>
    <td>${newbook.author}</td>
    <td>${newbook.isbn}</td>
    <td><a href="#"><i class="fa fa-times" aria-hidden="true"></i></a></td>`;

  d.appendChild(e);
};

UI.prototype.showAlerts = function(message, className) {
  var div = document.createElement("div");

  div.classList.add("alert", `${className}`);

  div.appendChild(document.createTextNode(`${message}`));

  var container = document.querySelector(".container");

  var row = document.querySelector(".row");

  container.insertBefore(div, row);

  setTimeout(function() {
    document.querySelector(".alert").remove();
  }, 3000);
};

document.querySelector(".container").addEventListener("click", function(e) {
  e.preventDefault();

  if (e.target.classList.contains("fa")) {
    e.target.parentElement.parentElement.parentElement.remove();
  }
});

var king, minister;

document.querySelector(".btn-primary").addEventListener("click", function(e) {
  e.preventDefault();

  var a = document.getElementById("bookname");
  var b = document.getElementById("author");
  var c = document.getElementById("isbn");

  var newbook = new NewBook(a.value, b.value, c.value);

  var ui = new UI();

  if (a.value == " " || b.value == " " || c.value == 0 || king == 1) {
    ui.showAlerts("PLEASE FILL ALL THE FIELDS correctly", "error");
  } else if (king == 0) {
    ui.addNewElement(newbook);
    ui.showAlerts("BOOKED ADDED", "success");

    a.value = " ";
    b.value = " ";
    c.value = null;

    document.getElementById("bookname").classList.remove("is-valid");
    document.getElementById("author").classList.remove("is-valid");
    document.getElementById("isbn").classList.remove("is-valid");
  }
});

document.getElementById("bookname").addEventListener("keyup", function() {
  var a = document.getElementById("bookname");

  if (
    a.value.indexOf("1") !== -1 ||
    a.value.indexOf("2") !== -1 ||
    a.value.indexOf("3") !== -1 ||
    a.value.indexOf("4") !== -1 ||
    a.value.indexOf("5") !== -1 ||
    a.value.indexOf("6") !== -1 ||
    a.value.indexOf("7") !== -1 ||
    a.value.indexOf("8") !== -1 ||
    a.value.indexOf("9") !== -1 ||
    a.value.indexOf("0") !== -1 ||
    a.value === " " ||
    a.value.indexOf("$") !== -1 ||
    a.value.indexOf("!") !== -1 ||
    a.value.indexOf("+") !== -1 ||
    a.value.indexOf("-") !== -1 ||
    a.value.indexOf("*") !== -1 ||
    a.value.indexOf("^") !== -1 ||
    a.value.indexOf("/") !== -1 ||
    a.value.indexOf("&") !== -1 ||
    (a.value.length > 0 && a.value.length < 4)
  ) {
    a.classList.add("is-invalid");
    king = 1;
  } else if (a.value.length >= 4) {
    king = 0;
    a.classList.add("is-valid");
    a.classList.remove("is-invalid");
  } else if (a.value.length === 0) {
    a.classList.remove("is-valid");
    a.classList.remove("is-invalid");
  }
});

document.getElementById("author").addEventListener("keyup", function() {
  var a = document.getElementById("author");

  if (
    a.value.indexOf("1") !== -1 ||
    a.value.indexOf("2") !== -1 ||
    a.value.indexOf("3") !== -1 ||
    a.value.indexOf("4") !== -1 ||
    a.value.indexOf("5") !== -1 ||
    a.value.indexOf("6") !== -1 ||
    a.value.indexOf("7") !== -1 ||
    a.value.indexOf("8") !== -1 ||
    a.value.indexOf("9") !== -1 ||
    a.value.indexOf("0") !== -1 ||
    a.value === " " ||
    a.value.indexOf("$") !== -1 ||
    a.value.indexOf("!") !== -1 ||
    a.value.indexOf("+") !== -1 ||
    a.value.indexOf("-") !== -1 ||
    a.value.indexOf("*") !== -1 ||
    a.value.indexOf("^") !== -1 ||
    a.value.indexOf("/") !== -1 ||
    a.value.indexOf("&") !== -1 ||
    (a.value.length > 0 && a.value.length < 4)
  ) {
    a.classList.add("is-invalid");
    minister = 1;
  } else if (a.value.length >= 4) {
    minister = 0;
    a.classList.add("is-valid");
    a.classList.remove("is-invalid");
  } else if (a.value.length === 0) {
    a.classList.remove("is-valid");
    a.classList.remove("is-invalid");
  }
});

document.getElementById("isbn").addEventListener("keyup", function() {
  var a = document.getElementById("isbn");

  console.log(typeof a.value);

  if (a.value.length == 0) {
    a.classList.add("is-invalid");
    a.classList.remove("is-valid");
  } else if (a.value == "") {
    console.log("Lavakumar");
    a.classList.remove("is-invalid");
    a.classList.remove("is-valid");
  } else {
    a.classList.remove("is-invalid");
    a.classList.add("is-valid");
  }
});
