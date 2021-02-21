import { category, word, hint } from "./questionHint.js";

var lives = 10;
//lives
document.getElementById("lives").innerHTML = "You have " + lives + " lives.";

//Categories
document.getElementById("category").innerHTML =
  "Choosen Category is " + category;

//Buttons a-z
var i = 97;
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

//onclick function for characters
function clicked(x) {
  k = 0;
  document.getElementById(x.id).classList.add("disabled");
  // if character not found
  if (!word.includes(x.id)) {
    lives--;
    eval("step" + (10 - lives) + "()");
    if (lives == 0) {
      document.getElementById("lives").innerHTML = "Game Over. Play Again";
      completed();
    } else {
      document.getElementById("lives").innerHTML =
        "You have " + lives + " lives.";
    }
  }
  // if character found
  else {
    var li = document.getElementsByTagName("li");
    console.log(li);
    var l = 0;
    while (word[l] != undefined) {
      if (word[l] == x.id) {
        li[l].innerHTML = x.id;
      }
      l++;
    }
    // console.log(Object.values(li));
    var m = 0;
    var li_values = Object.values(li);
    var str = "";
    while (li_values[m] != undefined) {
      str += li_values[m].innerHTML;
      m++;
    }
    if (word == str) {
      document.getElementById("lives").innerHTML = "You Won";
      completed();
    }
  }
}

//creation of word
var ul = document.getElementById("word");
var j = 0;
while (word[j] != undefined) {
  var node = document.createElement("li");
  var textNode = document.createTextNode("_");
  node.appendChild(textNode);
  document.getElementById("word").appendChild(node);
  j++;
}

// Drawing hangman
var c = document.getElementById("canvas");
var ctx = c.getContext("2d");
ctx.strokeStyle = "#FFFFFF";
ctx.lineWidth = 2;
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

//add eventlistner to hint
document.getElementById("hint").addEventListener("click", getHint);

function getHint() {
  document.getElementById("clue").innerHTML = "Hint: " + hint;
}

function completed() {
  var newwindow = confirm("Play Again");
  if (newwindow) {
    window.location.reload();
  } else {
    var newwindow = confirm("Play Again");
  }
}
