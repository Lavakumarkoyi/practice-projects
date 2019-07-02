function income(sno, description, value) {
  (this.sno = sno), (this.description = description), (this.value = value);
}

function expense(sno, description, value) {
  (this.sno = sno), (this.description = description), (this.value = value);
}

function budget() {
  var obj = {
    values: {
      type: document.querySelector(".type"),
      desc: document.querySelector(".description"),
      value: document.querySelector(".value")
    }
  };

  return obj;
}

function ui() {}

var totals = {
  inc: 0,
  exp: 0
};

finalvalue = function(inc, exp) {
  var final = inc - exp;

  document.querySelector(".final").value = final;
};

var table = function(a, b, c, d) {
  if (d === "add") {
    var r = document.querySelector(".income");

    var u = document.createElement("tr");

    u.innerHTML = `<td>${a}</td>
                    <td>${b}</td>
                    <td>${c}</td>
                    <td><a href="#"><i class="fa fa-times" aria-hidden="true"></i></a></td>`;

    r.appendChild(u);

    totals.inc = totals.inc + parseInt(c);

    document.querySelector(".earn").value = totals.inc;
  } else if (d === "sub") {
    var s = document.querySelector(".expense");

    var u = document.createElement("tr");

    u.innerHTML = `<td>${a}</td>
                    <td>${b}</td>
                    <td>${c}</td>
                    <td><a href="#"><i class="fa fa-times" aria-hidden="true"></i></a></td>`;

    s.appendChild(u);
    totals.exp = totals.exp + parseInt(c);

    document.querySelector(".spent").value = totals.exp;
  }
};

document.querySelector(".container").addEventListener("click", function(e) {
  var uvalue1, uvalue2;

  //totals.inc = totals.inc - uvalue1;
  //totals.exp = totals.exp - uvalue2;

  if (
    e.target.parentElement.parentElement.parentElement.parentElement.classList.contains(
      "expense"
    )
  ) {
    uvalue1 = parseInt(
      e.target.parentElement.parentElement.previousElementSibling.textContent
    );

    console.log(typeof uvalue1);

    totals.exp = totals.exp - uvalue1;

    console.log(totals.exp);
    document.querySelector(".spent").value = totals.exp;
    finalvalue(totals.inc, totals.exp);

    e.target.parentElement.parentElement.parentElement.remove();
  } else if (
    e.target.parentElement.parentElement.parentElement.parentElement.classList.contains(
      "income"
    )
  ) {
    uvalue2 = parseInt(
      e.target.parentElement.parentElement.previousElementSibling.textContent
    );
    console.log(typeof uvalue2);

    totals.inc = totals.inc - uvalue2;

    console.log(totals.inc);

    document.querySelector(".earn").value = totals.inc;
    finalvalue(totals.inc, totals.exp);

    e.target.parentElement.parentElement.parentElement.remove();
  }
});

var a = 0,
  b = 0;

document.querySelector(".btn").addEventListener("click", function(e) {
  e.preventDefault();
  var inc = budget();

  var UI = new ui();

  if (inc.values.type.value === "add") {
    var a = a + 1;
    var plus = new income(a, inc.values.desc.value, inc.values.value.value);
    table(plus.sno, plus.description, plus.value, inc.values.type.value);
  } else if (inc.values.type.value === "sub") {
    var b = b + 1;
    var minus = new expense(b, inc.values.desc.value, inc.values.value.value);
    table(minus.sno, minus.description, minus.value, inc.values.type.value);
  }

  finalvalue(totals.inc, totals.exp);

  /*if (inc.values.type.value === "add") {
    UI.table(
      a,
      inc.values.desc.value,
      inc.values.value.value,
      inc.values.type.value
    );
  } else if (inc.value.type.value === "sub") {
    UI.table(
      b,
      inc.values.desc.value,
      inc.values.value.value,
      inc.values.type.value
    );
  }*/
});
