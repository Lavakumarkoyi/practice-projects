document.querySelector(".btn-primary").addEventListener("click", function(e) {
  e.preventDefault();
  console.log("lavakumar");
  var a = document.getElementById("bookname");
  var b = document.getElementById("author");
  var c = document.getElementById("isbn");

  var s = document.querySelector(".main");

  var d = document.createElement("tr");

  s.appendChild(d);

  var e = document.createElement("td");
  var f = document.createElement("td");
  var g = document.createElement("td");
  var h = document.createElement("td");

  var i = document.createTextNode(`${a.value}`);
  var j = document.createTextNode(`${b.value}`);
  var k = document.createTextNode(`${c.value}`);
  var l = document.createElement("button");
  var m = document.createElement("i");

  l.classList.add("btn", "btn-default");
  l.setAttribute("type", "button");

  l.appendChild(m);

  m.setAttribute("aria-hidden", "true");
  m.classList.add("fa", "fa-times");

  e.appendChild(i);
  f.appendChild(j);
  g.appendChild(k);
  h.appendChild(l);

  d.appendChild(e);
  d.appendChild(f);
  d.appendChild(g);
  d.appendChild(h);
});
