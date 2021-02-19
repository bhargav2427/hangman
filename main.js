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

// Drawing hangman
var c = document.getElementById("canvas");
var ctx = c.getContext("2d");
ctx.strokeStyle = "#FFFFFF";
//calling function for trails
step1();
step2();
step7();
step3();
step4();
step5();
step6();
step8();
step9();
step10();

//1st step of drawing
function step1() {
  ctx.moveTo(20, 160);
  ctx.lineTo(160, 160);
  ctx.stroke();
}

//2nd step for drawing
function step2() {
  ctx.moveTo(30, 160);
  ctx.lineTo(30, 20);
  ctx.stroke();
}

//3rd step for drawing
function step3() {
  ctx.moveTo(15, 20);
  ctx.lineTo(90, 20);
  ctx.stroke();
}

function step4() {
  ctx.moveTo(80, 20);
  ctx.lineTo(80, 30);
  ctx.stroke();
}

function step5() {
  ctx.beginPath();
  ctx.arc(80, 40, 10, 0, Math.PI * 2);
  ctx.stroke();
}

function step6() {
  ctx.moveTo(80, 50);
  ctx.lineTo(80, 90);
  ctx.stroke();
}

function step7() {
  ctx.moveTo(80, 60);
  ctx.lineTo(55, 70);
  ctx.stroke();
}

function step8() {
  ctx.moveTo(80, 60);
  ctx.lineTo(105, 70);
  ctx.stroke();
}

function step9() {
  ctx.moveTo(80, 90);
  ctx.lineTo(50, 110);
  ctx.stroke();
}

function step10() {
  ctx.moveTo(80, 90);
  ctx.lineTo(110, 110);
  ctx.stroke();
}
