document.querySelector(".btn").addEventListener("click", function(e) {
  e.preventDefault();
  var MainText = document.querySelector(".input");
  var MainLi = document.createElement("li");
  MainLi.appendChild(document.createTextNode(`${MainText.value}`));
  MainLi.className = "list-group-item pr-5";
  var badge = document.createElement("span");
  badge.className = "badge";

  var icon = document.createElement("svg");
  icon.className = "icon";

  var sprite = document.createElement("use");
  sprite.setAttribute("xlink:href", "../img/sprite.svg#icon-bookmark");

  icon.appendChild(sprite);
  badge.appendChild(icon);
  MainLi.appendChild(badge);

  var MainUl = document.querySelector(".list-group");

  MainUl.appendChild(MainLi);

  //event delegation

  /**/

  //console.log("My name is lavakumar");
});

document.querySelector(".list-group").addEventListener("click", function(e) {
  if (
    e.target.parentElement.parentElement.parentElement.classList.contains(
      "list-group-item"
    )
  ) {
    e.target.parentElement.parentElement.parentElement.remove();
  }

  console.log(e.target.parentElement.parentElement.parentElement);
});

document.querySelector(".list-group-item").style.color = "red";

document.querySelector(".clear").addEventListener("click", function(e) {
  //e.preventDefault();
  //document.querySelector(".list-group").innerHTML = " ";

  while (document.querySelector(".list-group").firstchild) {
    document.querySelector(".list-group").removeChild();
  }
});
