var i = 97;
var buttons = document.getElementById("buttons");
while (i < 123) {
  var node = document.createElement("div");
  var textNode = document.createTextNode("" + String.fromCharCode(i));
  node.appendChild(textNode);
  document.getElementById("buttons").appendChild(node);
  i++;
}
