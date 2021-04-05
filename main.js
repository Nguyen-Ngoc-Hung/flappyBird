const WIDTH = 1000;
const HEGHT = 500;

var canvas = document.getElementById("game-zone");
var context = canvas.getContext("2d");

var base = new Image();
base.src="images/base.png";
context.drawImage(base,100,0);
