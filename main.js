var i = 97;
var buttons = document.getElementById("buttons");
while (i < 123) {
  var node = document.createElement("div");
  node.id = String.fromCharCode(i);
  var textNode = document.createTextNode("" + String.fromCharCode(i));
  node.appendChild(textNode);
  document.getElementById("buttons").appendChild(node);
  node.addEventListener("click", function () {
    clicked(this);
  });
  i++;
}

function clicked(x) {
  console.log(x.id);
  document.getElementById(x.id).classList.add("disabled");
}
